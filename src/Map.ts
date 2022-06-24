import { IMappable } from "./IMappable";

export class Map {
	private gMap: google.maps.Map;

	constructor(elementId: string) {
		this.gMap = new google.maps.Map(<HTMLElement>document.getElementById(elementId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarkerForUser(mappable: IMappable): void {
		const mapMarker = new google.maps.Marker({
			map: this.gMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});

		mapMarker.addListener("click", () => {
			const infoWindows = new google.maps.InfoWindow({
				content: mappable.content(),
			});

			infoWindows.open(this.gMap, mapMarker);
		});
	}
}
