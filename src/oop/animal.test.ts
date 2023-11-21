import {Animal} from "./animal";

describe('Animal', () => {
  it('should be able to eat', () => {
   // given
   const animal = new Animal("dog");

    // when
   const eatBehaviour = animal.eat();

    // then
    expect(eatBehaviour).toEqual('dog can eat');
  });
});