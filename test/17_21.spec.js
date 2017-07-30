import getHistVolume from '../src/17_21_volumeOfHistogramme';
import { expect } from 'chai';

describe('Ctci - Hard Problems 17-21 volume Of Histogramme', function() {
  
  it('should return correct water volume value for a given histogramme ', function() {
    var histogramme = [0, 0, 4, 0, 0, 6, 0, 0, 3, 0, 5, 0, 1, 0, 0, 0];
    expect(getHistVolume(histogramme)).to.equal(26);
  });
  
  it('should return correct water volume value for a given histogramme ', function() {
    var histogramme = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
    expect(getHistVolume(histogramme)).to.equal(6);
  });

  it('should return 0 for histogramme with all decreasing values ', function() {
    var histogramme = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    expect(getHistVolume(histogramme)).to.equal(0);
  });

});