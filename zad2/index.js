const fs = require('fs');
const querystring = require('querystring');

function handleHome(response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(home.renderPage());
    response.end();
}

function handleAddCar(request, response) {
    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(addCar.renderPage());
        response.end();
    } else if (request.method === 'POST') {
        let body = '';
        request.on('data', (chunk) => {
            body += chunk.toString();
        });
        request.on('end', () => {
            const formData = querystring.parse(body);
            const formDataJSON = JSON.stringify(formData);
            fs.writeFile('formData.json', formDataJSON, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Form data saved successfully.');
            });
            response.writeHead(302, { 'Location': '/car' });
            response.end();
        });
    }
}

function handleCar(response) {
    fs.readFile('formData.json', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(car.renderPage(data));
        response.end();
    });
}

function handlePageNotFound(response) {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('404 Page Not Found');
    response.end();
}

module.exports = { handleHome, handleAddCar, handleCar, handlePageNotFound };
