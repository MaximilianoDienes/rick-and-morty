const http = require("http");
const data = require("./utils/data.js")
const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")) {
        const url = Number(req.url.split("/").pop())
        const character = data.find((c) => c.id === url);

        if (character) {
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(character))
        }

        else {
            res.writeHead(404, {'Content-Type':'text/plain'})
            res.end("Character not found")
        }
    }
})

server.listen(PORT, () => {
    console.log(`SERVER LISTENING ON PORT ${PORT}`)
})