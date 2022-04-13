import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
    name: string;
    age: number;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'white';

    constructor() {
        this.name = faker.name.firstName();
        this.age = faker.random.number(70);
        this.location = {
            lat: Number(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `
            <div>
                <h1>User name: ${this.name}</h1>
                <h3>User age: ${this.age}</h3>
            </div>
        `;
    }
}