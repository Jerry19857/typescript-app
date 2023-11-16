import {Animal} from "./animal";

describe('Animal', () => {
  it('should be able to eat', () => {
   // given
   const animal = new Animal();

    // when
   const eatBehaviour = animal.eat();

    // then
    expect(eatBehaviour).toEqual('I can eat');
  });
});