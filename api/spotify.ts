export const config = { runtime: 'edge' };

async function getAccessToken(): Promise<string> {
  const basic = btoa(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  );
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }),
  });
  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

function mapTrack(track: any) {
  return {
    title: track.name,
    artist: track.artists.map((a: any) => a.name).join(', '),
    url: track.external_urls.spotify,
    albumArt: (track.album.images[2] ?? track.album.images[0])?.url ?? null,
  };
}

export default async function handler() {
  const access_token = await getAccessToken();

  const [nowPlayingRes, recentRes, topRes] = await Promise.all([
    fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
    fetch('https://api.spotify.com/v1/me/player/recently-played?limit=10', {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
    fetch('https://api.spotify.com/v1/me/top/tracks?limit=1&time_range=short_term', {
      headers: { Authorization: `Bearer ${access_token}` },
    }),
  ]);

  const recentData = (await recentRes.json()) as any;
  const seen = new Set<string>();
  const lastPlayed = (recentData.items ?? [])
    .find((item: any) => {
      if (seen.has(item.track.id)) return false;
      seen.add(item.track.id);
      return true;
    });

  const topData = (await topRes.json()) as any;
  const favourite = topData.items?.[0] ? mapTrack(topData.items[0]) : null;

  if (nowPlayingRes.status === 204 || nowPlayingRes.status >= 400) {
    return Response.json({
      isPlaying: false,
      lastPlayed: lastPlayed ? mapTrack(lastPlayed.track) : null,
      favourite,
    });
  }

  const song = (await nowPlayingRes.json()) as any;
  if (!song?.item) {
    return Response.json({
      isPlaying: false,
      lastPlayed: lastPlayed ? mapTrack(lastPlayed.track) : null,
      favourite,
    });
  }

  return Response.json({
    isPlaying: true,
    nowPlaying: mapTrack(song.item),
    lastPlayed: lastPlayed ? mapTrack(lastPlayed.track) : null,
    favourite,
  });
}
