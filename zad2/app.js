const http = require('http');
const routes = require('./routes');

const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        routes.handleHome(res);
    } else if (req.url === '/add-car' && req.method === 'GET') {
        routes.handleAddCar(req, res);
    } else if (req.url === '/car' && req.method === 'GET') {
        routes.handleCar(res);
    } else {
        routes.handlePageNotFound(res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
