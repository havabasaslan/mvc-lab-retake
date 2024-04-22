// cars.js

// Utwórz stałą tablicę o nazwie cars przechowującą pięć obiektów
const cars = [
    { id: 1, make: "Toyota", model: "Yaris", year: 2001, color: "white" },
    { id: 2, make: "Ford", model: "Focus", year: 2010, color: "blue" },
    { id: 3, make: "Honda", model: "Civic", year: 2015, color: "red" },
    { id: 4, make: "BMW", model: "X5", year: 2018, color: "black" },
    { id: 5, make: "Audi", model: "A4", year: 2019, color: "silver" }
];

// Stwórz metodę getCars zwracającą tablicę cars
const getCars = () => {
    return cars;
};

// Stwórz metodę getCarInformation
const getCarInformation = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
    } else {
        return "Car doesn't exist";
    }
};

// Stwórz metodę getCarAge
const getCarAge = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        const currentYear = new Date().getFullYear();
        const carAge = currentYear - car.year;
        return `Car is ${carAge} years old.`;
    } else {
        return "Car doesn't exist";
    }
};

// Wyeksportuj wszystkie metody
module.exports = {
    getCars,
    getCarInformation,
    getCarAge
};
