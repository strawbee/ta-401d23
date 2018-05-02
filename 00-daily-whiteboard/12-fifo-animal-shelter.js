/*
Create a class called AnimalShelter which holds only dogs and cats. 
The shelter operates using a first-in, first-out approach.

Implement the following methods:

enqueue(animal): adds animal to the shelter. 
Animal can be either a dog or a cat object.

dequeue(pref): returns either a dog or a cat. If pref, a string, 
is ‘cat’ return the longest-waiting cat. If pref is ‘dog’, return 
the longest-waiting dog. For anything else, return either a cat or a dog.
*/

class Cat {
  constructor(name) {
    this.name = name;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class AnimalShelter { // eslint-disable-line
  constructor() {
    this.cats = [];
    this.dogs = [];
  }

  enqueue(animal) {
    if (animal instanceof Cat) this.cats.push(animal);
    else if (animal instanceof Dog) this.dogs.push(animal);
    else return null;
    return this;
  }

  dequeue(pref) {
    if (!this.cats[0] && !this.dogs[0]) return null;
    if (!this.cats[0]) return this.dogs.shift();
    if (!this.dogs[0]) return this.cats.shift();
    if (pref === 'cat') return this.cats.shift();
    if (pref === 'dog') return this.dogs.shift();
    // randomly returns either a cat or a dog if no preference
    if (!pref) return Math.round(Math.random()) ? this.cats.shift() : this.dogs.shift();
    return null;
  }
}
