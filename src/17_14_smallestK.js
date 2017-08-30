const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

};

const partition = (arr, lo, hi) => {
  let pivot = arr[hi];
  let i = lo;
  for ( var j = lo; j < hi; j++ ) {
    if ( arr[j] <= pivot ) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, hi);
  return i;
};
const kthSmallest = (array, lo, hi, k) => {
  if ( k >= 1 && k <= hi - lo + 1 ) {
    let pIndex = partition(array, lo, hi);
    if ( pIndex === lo + k - 1 ) {
      return array.slice(0, pIndex + 1);
    }
    if ( pIndex > lo + k - 1 ) {
      return kthSmallest(array, lo, pIndex - 1, k);
    }
    return kthSmallest(array, pIndex + 1, hi, lo + k - 1 - pIndex);
  }
  return null;
};

module.exports = kthSmallest;