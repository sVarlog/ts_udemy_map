// function annotation for function expression
const add = (a: number, b: number): number => {
    return a + b;
};

// return void
const subtract = (a: number, b: number) => {
    a - b;
};

// function annotation for function declaration
function divide(a: number, b: number): number {
    return a / b;
};

// function annotation for anon function
const multiply = function(a: number, b: number): number {
    return a * b; 
};

// function annotation for return void value
const logger = (message: string): void => {
    console.log(message);
};

// Use function annotation for throw error or string
const throwError = (message: string): never | string => {
    if (!message) {
        throw new Error(message);
    } else {
        return message;
    }
};

const todayWeather = {
    date: new Date(),
    weather: 'sunny'
};

// annotations for object function params
const logWeather = (forecaset: {date: Date; weather: string}): void => {
    console.log(forecaset.date);
    console.log(forecaset.weather);
};

// ES2015
const logWeather2 = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todayWeather);