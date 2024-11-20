const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const requestUrl = new URL(req.url);
        if (requestUrl.pathname === "/health") {
            return  new Response("ok");
        }
        
        return new Response("Bunny 👯!");
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);
