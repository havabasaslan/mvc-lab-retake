// app.js

const http = require('http');
const { getHTMLDocumentStart, getHTMLDocumentEnd } = require('./htmlGenerator');
const { getCars, getCarInformation, getCarAge } = require('./cars');

// Utwórz serwer Node.JS nasłuchujący na porcie 3000
const server = http.createServer((req, res) => {
    // Serwer w swoim listeningListener wyświetla informację o uruchomieniu
    server.on('listening', () => {
        console.log(`Server is running on ${server.address().port}.`);
    });

    // Przypisz pod stałą cars wynik funkcji getCars
    const carsData = getCars();

    // Ustaw nagłówek – Content-Type na wartość text/html
    res.setHeader('Content-Type', 'text/html');

    // Zwróć wynik metody getHTMLDocumentStart
    res.write(getHTMLDocumentStart());

    // Zwróć <body>
    res.write('<body>');

    // Zwróć <p>, którego treścią jest wynik metody getCarInformation dla dowolnego id
    res.write(`<p>${getCarInformation(1)}</p>`);

    // Zwróć <p>, którego treścią jest wynik metody getCarAge dla tego samego id
    res.write(`<p>${getCarAge(1)}</p>`);

    // Zakończ <body>
    res.write('</body>');

    // Zwróć wynik metody getHTMLDocumentEnd
    res.end(getHTMLDocumentEnd());
});

// Nasłuchuj na porcie 3000
server.listen(3000);
