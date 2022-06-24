import { faker } from "@faker-js/faker";
import { IMappable } from "./IMappable";

export class Company implements IMappable {
	name: string;
	description: string;
	location: { lat: number; lng: number };

	constructor() {
		this.name = faker.company.companyName();
		this.description = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}

	content(): string {
		return `${this.name} - ${this.description}`;
	}
}
