function pivot(arr, comparator, start=0, end=arr.length -1) {
    
  function swap(arr, i, j) {
      let temp = arr[i]; 
      arr[i] = arr[j];
      arr[j] = temp;
      return arr;
  }
  
  let pivIdx = start;
  let pivot = arr[pivIdx];
  
  for(let i = start; i <= end; i++) {
      if(typeof comparator === 'function') {
          if(comparator(pivot, arr[i]) > 0) {
              pivIdx ++;
              swap(arr, pivIdx, i);
          }
      } else {
          if(pivot > arr[i]) {
              pivIdx ++; 
              swap(arr, pivIdx, i);
          }
      }
  }
  swap(arr, start, pivIdx);
  return pivIdx;
  
}

function quickSort(arr, comparator, left = 0, right = arr.length - 1) {
    let pivIdx;
    if(left < right) {
        pivIdx = pivot(arr, comparator, left, right)
        quickSort(arr, comparator, left, pivIdx - 1);
        quickSort(arr, comparator, pivIdx + 1, right);
    }
    return arr;
}