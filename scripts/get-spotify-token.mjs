/**
 * One-time script to get your Spotify refresh token.
 * Run: node scripts/get-spotify-token.mjs
 *
 * Reads SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET from .env.local
 */
import readline from 'readline';
import { readFileSync } from 'fs';

function loadEnv() {
  try {
    return Object.fromEntries(
      readFileSync('.env.local', 'utf-8')
        .split('\n')
        .filter((l) => l.includes('='))
        .map((l) => {
          const [k, ...v] = l.split('=');
          return [k.trim(), v.join('=').trim()];
        })
    );
  } catch {
    return {};
  }
}

const env = loadEnv();
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID ?? env.SPOTIFY_CLIENT_ID ?? '';
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET ?? env.SPOTIFY_CLIENT_SECRET ?? '';
const REDIRECT_URI = 'https://sushant.tech/';
const SCOPES = 'user-read-currently-playing user-read-recently-played user-top-read';

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing SPOTIFY_CLIENT_ID or SPOTIFY_CLIENT_SECRET in .env.local');
  process.exit(1);
}

const authUrl =
  `https://accounts.spotify.com/authorize` +
  `?client_id=${CLIENT_ID}` +
  `&response_type=code` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}` +
  `&scope=${encodeURIComponent(SCOPES)}`;

console.log('\n1. Open this URL in your browser:\n');
console.log(authUrl);
console.log("\n2. After authorizing, you'll be redirected to https://sushant.tech/?code=...");
console.log('3. Copy the value of the "code" query param from the URL.\n');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question('Paste the code here: ', async (code) => {
  rl.close();
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64');
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code.trim(),
      redirect_uri: REDIRECT_URI,
    }),
  });

  const data = await res.json();

  if (data.refresh_token) {
    console.log('\nSuccess! Add this to your .env.local and Vercel environment variables:\n');
    console.log(`SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`);
  } else {
    console.error('\nError:', JSON.stringify(data, null, 2));
  }
});
