import { 
  kthSmallest,
  kthSmallestBH
} from '../src/17_14_smallestK';
import { expect } from 'chai';
import _ from 'lodash';

describe('Ctci - Hard Problems 17-14 Smallest K - Modified Quicksort Solution', function() {

  it('should return 5 smallest elements of array ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length - 1;
    expect(_.isEqual(kthSmallest(data, 0, l, 5), [-35, 0, 2, 3, 7])).to.equal(true);
  });
  
  it('should return 3 smallest elements of array ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length;
    expect(_.isEqual(kthSmallest(data, 0, l - 1, 3), [-35, 0, 2])).to.equal(true);
  });

  it('should return null for values of k smaller than 1 ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length - 1;
    expect(kthSmallest(data, 0, l, 0)).to.equal(null);
  });

  it('should return null for values of k larger than length of array ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length - 1;
    expect(kthSmallest(data, 0, l, 15)).to.equal(null);
  });

});

describe('Ctci - Hard Problems 17-14 Smallest K - Binary Heap Solution', function() {

  it('should return 5 smallest elements of array ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length - 1;
    expect(_.isEqual(kthSmallestBH(data, 5), [-35, 0, 2, 3, 7])).to.equal(true);
  });
  
  it('should return 3 smallest elements of array ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length;
    expect(_.isEqual(kthSmallestBH(data, 3), [-35, 0, 2])).to.equal(true);
  });

  it('should return null for values of k smaller than 1 ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length - 1;
    expect(kthSmallestBH(data, 0)).to.equal(null);
  });

  it('should return null for values of k larger than length of array ', function() {
    var data = [55, -35, 26, 200, 0, 32, 18, 7, 23, 8, 2, 3];
    var l = data.length - 1;
    expect(kthSmallestBH(data, 15)).to.equal(null);
  });

});