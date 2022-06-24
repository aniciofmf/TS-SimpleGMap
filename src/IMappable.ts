export interface IMappable {
	content(): string;
	location: {
		lat: number;
		lng: number;
	};
}
