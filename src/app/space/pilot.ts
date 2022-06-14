export interface PilotAttrs {
  id?: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export class Pilot {
  static defaultImageUrl = '/assets/pilot.jfif';
	firstName = '';
	lastName = '';
	imageUrl = '';
	id?: number;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value: string) {
    const values = value.split(' ');
    this.firstName = values[0];
    this.lastName = values[1];
  }

	constructor(attrs: PilotAttrs) {
		this.id = attrs.id;
		this.firstName = attrs.firstName;
		this.lastName = attrs.lastName;
		this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
	}
}
