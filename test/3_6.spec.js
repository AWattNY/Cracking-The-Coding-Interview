import Queue from '../src/queueHelperFunctions';
import AnimalShelter from '../src/3_6_animalShelter';
import { expect } from 'chai';

describe('Ctci - Stacks and Queues 3-6 Animal Shelter', function() {
  var queue;
  const Animal = function( name, specie ) {
    this.name = name;
    this.specie = specie;
    this.order = null;
  };
  
  beforeEach(function() {
    queue = new AnimalShelter();    
  });

  describe('queue shared behavior', function() {

    it('reports a size of zero for a new AnimalShelter', function() {
      expect(queue.size()).to.equal(0);
    });

    it('reports a size of 2 after adding two animals', function() {
      var dog1 = new Animal('rex', 'dog');
      var cat1 = new Animal('miao', 'cat');
      queue.enqueue(dog1);
      queue.enqueue(cat1);
      expect(queue.size()).to.equal(2);
    });

    it('reports a size of 1 after adding two animals and removing one', function() {
      var dog1 = new Animal('rex', 'dog');
      var dog2 = new Animal('rex2', 'dog');
      queue.enqueue(dog1);
      queue.enqueue(dog2);
      queue.dequeueAny();
      expect(queue.size()).to.equal(1);
    });

    it('reports a size of 0 after removing more animals than were added', function() {
      var dog1 = new Animal('rex', 'dog');
      queue.enqueue(dog1);
      queue.dequeueAny();
      queue.dequeueAny();
      expect(queue.size()).to.equal(0);
    });

    it('allows sequentially adding and removing animals', function() {
      var dog1 = new Animal('rex', 'dog');
      var dog2 = new Animal('rex2', 'dog');
      queue.enqueue(dog1);
      var dequeued = queue.dequeueDogs();
      expect(Object.is(dequeued, dog1)).to.equal(true);
      queue.enqueue(dog2);
      var dequeued = queue.dequeueDogs();
      expect(Object.is(dequeued, dog2)).to.equal(true);
    });

  });

  describe('Animal Shelter -specific behavior', function() {
    it('removes the least recently added of two animals', function() {
      var dog1 = new Animal('rex', 'dog');
      var cat1 = new Animal('miao', 'cat');
      queue.enqueue(dog1);
      queue.enqueue(cat1);
      var dequeued = queue.dequeueAny();
      expect(Object.is(dequeued, dog1)).to.equal(true);
    });

    it('removes the oldest item, after newer items have already been added and removed', function() {
      var dog1 = new Animal('rex', 'dog');
      var cat1 = new Animal('miao', 'cat');
      var dog2 = new Animal('rex2', 'dog');
      queue.enqueue(dog1);
      queue.enqueue(cat1);
      queue.dequeueAny();
      queue.enqueue(dog2);
      var dequeued = queue.dequeueAny();
      expect(Object.is(dequeued, cat1)).to.equal(true);
      
    });
  });

});