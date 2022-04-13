const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    sugarTypeWeight: 'gram'
};

// Tuple
const cola: [string, boolean, number, string] = ['brown', true, 40, 'gram'];

// type alias
type Drink = [string, boolean, number, string];
const cola2: Drink = ['brown', true, 40, 'gram'];
const sprite: Drink = ['claer', true, 40, 'gram'];
const coffee: Drink = ['black', true, 0, 'gram'];

const carSpecs: [number, number] = [400, 3354];

const carSpaceObj = {
    horsepower: 400,
    weight: 3354
};