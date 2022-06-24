import { faker } from "@faker-js/faker";
import { IMappable } from "./IMappable";

export class User implements IMappable {
	name: string;
	location: { lat: number; lng: number };

	constructor() {
		this.name = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	content(): string {
		return this.name;
	}
}
