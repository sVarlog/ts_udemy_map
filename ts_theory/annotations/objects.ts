const profile = {
    name: 'Jack',
    age: 25,
    coordinates: {
        lat: 1,
        lng: 20
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// variable annotation for destructure object ES2015
const {age}: {age: number} = profile;
const {coordinates: {lat, lng}}: {coordinates: {lat: number, lng: number}} = profile;
