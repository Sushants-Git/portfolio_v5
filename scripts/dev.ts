const api = Bun.spawn(['bun', 'scripts/api-server.ts'], {
    stdout: 'inherit',
    stderr: 'inherit',
});

const vite = Bun.spawn(['bunx', 'vite'], {
    stdout: 'inherit',
    stderr: 'inherit',
});

process.on('SIGINT', () => {
    api.kill();
    vite.kill();
    process.exit(0);
});

await Promise.all([api.exited, vite.exited]);
