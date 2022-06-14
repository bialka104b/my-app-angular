import { Pilot } from "./pilot";

export class SpaceShip {

    pilot?: Pilot;
    modelName: string;
    imageUrl: string;
    health = 100;
    activeShields = true;
    activeWeapons = true;
    constructor(modelName: string, imageUrl: string, pilot?: Pilot) {
    this.modelName = modelName;
		this.imageUrl = imageUrl;
		this.pilot = pilot;
	}
}
