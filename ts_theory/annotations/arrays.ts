// default annotation any[]
const array = [];

// default annotation string[]
const newColors = ['red', 'green', 'yellow'];

// default annotation Date[]
const dates = [new Date(), new Date()];

// default annotation string[][]
const fruitsByColor = [
    ['tomato'],
    ['apple'],
    ['lemon']
];

// Help with inference when extracting values
const color = newColors[0];
const color1 = newColors.pop();

// => Prevent incompotible values
// newColors.push(true);

// Help with map
colors.map((color: string): string => {
    return color.toUpperCase();
});

// Flexible types. Example Date or string type
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2021-11-11');