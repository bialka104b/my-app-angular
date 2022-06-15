import { Pilot } from './pilot';

describe('Pilot', () => {
  it('should create an instance', () => {
	  expect(new Pilot({firstName:'', lastName:'', imageUrl:''})).toBeTruthy();
  });
});
