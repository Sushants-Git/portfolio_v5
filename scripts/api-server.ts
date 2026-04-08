import handler from '../api/spotify';

const PORT = 3001;

Bun.serve({
    port: PORT,
    async fetch(req) {
        const { pathname } = new URL(req.url);
        if (pathname === '/api/spotify') return handler();
        return new Response('Not found', { status: 404 });
    },
});

console.log(`[api] http://localhost:${PORT}`);
