// htmlGenerator.js

// Utwórz metodę getHTMLDocumentStart
const getHTMLDocumentStart = () => {
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cars</title>
            </head>`;
};

// Utwórz metodę getHTMLDocumentEnd
const getHTMLDocumentEnd = () => {
    return `</html>`;
};

// Wyeksportuj obie metody
module.exports = {
    getHTMLDocumentStart,
    getHTMLDocumentEnd
};
