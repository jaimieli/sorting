function bubbleSort(arr){
  // if the array is empty or only
  if(arr.length < 2) return arr; //
  var swapped,
       temp;
  do {
    swapped = false;
    // set swapped to false at the beginning of each pass
    for(var i = 0; i < arr.length; i++) {
      if(arr[i]>arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped = true;
      }
    }
  }while(swapped); // keep doing this until we're done - we're done when no swaps have been made so swapped will be false
  return arr;
}

function split(arr) {
  var middle = Math.round(arr.length/2);
  return {left: arr.slice(0, middle),
          right: arr.slice(middle)}
}

function sort(arr) {
  if(arr.length < 2) {
    return arr;
  }
  var splitArrays = split(arr);
  // array is split, gets passed into sort, if it array length isn't less than two, the array is split again... splitting occurs until array length is less than 2
  // when array length is less than 2, equal to one, than the array is returned to merge
  return merge(sort(splitArrays.left),sort(splitArrays.right));
}

// split and sort combined below
// function sort(arr) {
//     // termination case
//     if (arr.length < 1) {
//       console.log("Array should never be empty");
//     }
//     //   base case
//   if(arr.length === 1) {
//     return arr;
//   }
//   var middle = Math.round(arr.length / 2),
//       arr1 = arr.slice(0,middle),
//       arr2 = arr.slice(middle); // by default it'll include the rest of the string
//       // it will not merge until the sort function is finished splitting each array til they're all one element each
//         // recursive case
//   return merge(sort(arr1),sort(arr2));
// }

// merge function simply combines two arrays
function merge(left, right) {
  // the arrays, left and right, that are passed in, are sorted
  var result = []
  // define the length variable inside the for parameters
  // there is a style to use the variable, ii, as the limit (length)
  for(var i = 0, length = left.length + right.length; i< length; i++) {
    if (left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    else if (left.length) {
      result.push(left.shift());
    }
    else if (right.length) {
      result.push(right.shift());
    }
  }
  return result;
}












