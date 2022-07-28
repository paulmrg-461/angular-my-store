const username: string = 'PaulRealpe';
const password: string | number = 123456;

const sum = (a: number, b: number) => a + b;

class Person {
  constructor(public age: number, public lastName: string) {}
}

const paul: Person = new Person(26, 'Realpe');

paul.age;
