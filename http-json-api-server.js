'use strict'
const http = require('http');

function parsetime (time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
    }
}

function unixtime (time) {
    return { unixtime: time.getTime() }
}

const server = http.createServer((req, res) => {
    const baseURL = 'http://' + req.headers.host;
    const url = new URL(req.url, baseURL);
    const isoDate = url.searchParams.get('iso');
    const date = new Date(isoDate);
    let result

    if (url.pathname === '/api/parsetime') {
        result = parsetime(date);
    } else if (url.pathname === '/api/unixtime') {
        result = unixtime(date);
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result))
    } else {
        res.writeHead(404)
        res.end()
    }
})
server.listen(Number(process.argv[2]))