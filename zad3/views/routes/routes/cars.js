const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');

let cars = [];
let nextId = 1;

router.get('/car', (req, res) => {
  let html = '';

  if (cars.length === 0) {
    html = '<div>No cars has been found.</div>';
  } else {
    const car = cars[cars.length - 1];
    const carHtml = `
      <h2>Last added car</h2>
      <div><span class="bold">Make:</span> ${car.make}</div>
      <div><span class="bold">Model:</span> ${car.model}</div>
      <div><span class="bold">Year:</span> ${car.year}</div>
      <div><span class="bold">Color:</span> ${car.color}</div>
    `;
    const $ = cheerio.load(carHtml);
    html = $.html('.car');
  }

  res.send(html);
});

router.get('/car/add', (req, res) => {
  res.sendFile('add-car.html', { root: './views' });
});

router.get('/car/list', (req, res) => {
  let html = '';

  if (cars.length === 0) {
    html = '<div>No cars has been found.</div>';
  } else {
    html = '<h2>Cars</h2><ul>';

    cars.forEach(car => {
      const carHtml = `
        <li>
          <p><span class="bold">Make:</span> ${car.make}</p>
          <p><span class="bold">Model:</span> ${car.model}</p>
          <p><span class="bold">Year:</span> ${car.year}</p>
          <p><span class="bold">Color:</span> ${car.color}</p>
        </li>
      `;
      const $ = cheerio.load(carHtml);
      html += $.html();
    });

    html += '</ul>';
  }

  res.send(html);
});

router.post('/car/add', (req, res) => {
  const newCar = {
    id: nextId,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color
  };

  cars.push(newCar);
  nextId++;

  res.redirect('/car');
});

module.exports = router;
