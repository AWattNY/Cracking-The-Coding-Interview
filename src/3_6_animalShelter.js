import Queue from '../src/queueHelperFunctions';

const Animal = ( name, specie ) => {
  this.name = name;
  this.specie = specie;
  this.order = null;
};

const AnimalShelter = function() {
  this.dogs = new Queue();
  this.cats = new Queue();
  this.start = 0;
  this.end = 0;
  this.order = 0;
};

AnimalShelter.prototype.size = function() {
  return this.end - this.start;
};

AnimalShelter.prototype.enqueue = function(animal) {
  animal.order = this.order;
  if (animal.specie === 'dog') {
    this.dogs.enqueue(animal);
  }
  if (animal.specie === 'cat') {
    this.cats.enqueue(animal);
  }
  this.end++;
  this.order++; 
  
};

AnimalShelter.prototype.dequeueAny = function() {
  if (this.dogs.size() === 0 ) {
    return this.dequeueCats();
  }
  if (this.cats.size() === 0 ) {
    return this.dequeueDogs();
  }

  var dog = this.dogs.peek();
  var cat = this.cats.peek();
  if ( dog.order > cat.order ) {
    return this.dequeueCats();
  } else {
    return this.dequeueDogs();
  }
  
};

AnimalShelter.prototype.dequeueCats = function() {
  var dequeued = this.cats.dequeue();
  this.size() && this.start++;
  return dequeued;
};

AnimalShelter.prototype.dequeueDogs = function() {
  var dequeued = this.dogs.dequeue();
  this.size() && this.start++;
  return dequeued;  
};

module.exports = AnimalShelter;