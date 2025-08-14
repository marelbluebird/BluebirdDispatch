// Mock databases
let cityDatabase = [];
let foodDatabase = {};

// Function to initialize the city database
function initializeCityDatabase() {
    cityDatabase = ['Vienna', 'San Juan', 'New York', 'Tokyo'];
}

// Function to initialize the food database
function initializeFoodDatabase() {
    foodDatabase = {
        Vienna: 'Wiener Schnitzel',
        'San Juan': 'Mofongo',
        Tokyo: 'Sushi',
        'New York': 'Bagel',
    };
}

// Function to check if a city exists in the city database
function isCity(city) {
    return cityDatabase.includes(city);
}

// Function to check if a city-food pair is valid
function isValidCityFoodPair(city, food) {
    return foodDatabase[city] === food;
}



console.log('__EXAMPLE_URL__: ' + __EXAMPLE_URL__)
console.log('__EXAMPLE_TOKEN__: ' + __EXAMPLE_TOKEN__)



beforeEach(() => { // Applies to all tests in this file
    return initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
    beforeEach(() => { // Applies only to tests in this describe block
        return initializeFoodDatabase();
    });

    test('Vienna <3 veal', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});