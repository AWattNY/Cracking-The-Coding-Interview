const getHistVolume = (arr) => {
  let n = arr.length - 1;
  let left = [];
  let right = []; 
  let waterVolume = 0;

  left[0] = arr[0];
  for ( var i = 1; i < n; i++ ) {
    left[i] = Math.max(left[i - 1], arr[i]);
  }

  right[n - 1] = arr[n - 1];
  for ( var i = n - 2; i >= 0; i-- ) {
    right[i] = Math.max(right[i + 1], arr[i]);
  }

  for ( var i = 0; i < n; i++ ) {
    waterVolume += Math.min(left[i], right[i]) - arr[i];
  }
  return waterVolume;
};

const getHistVolumeOpt = (arr) => {
  let waterVolume = 0;
  let leftMax = 0;
  let rightMax = 0;
  let lo = 0;
  let hi = arr.length - 1;

  while ( lo <= hi ) {

    if ( arr[lo] < arr[hi] ) {
      if ( arr[lo] > leftMax ) {
        leftMax = arr[lo];
      } else {
        waterVolume += leftMax - arr[lo];
        lo++;
      }
    } else {
      if ( arr[hi] > rightMax ) {
        rightMax = arr[hi];
      } else {
        waterVolume += rightMax - arr[hi];
        hi--;
      }
    }
  }

  
  return waterVolume;
};

module.exports = {
  getHistVolume,
  getHistVolumeOpt
};

