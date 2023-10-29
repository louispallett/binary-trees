export { removeDuplicates, sort };

const removeDuplicates = (array) => {
    const uniqueValues = {};
    const result = [];
  
    for(const item of array) {
      if(!uniqueValues[item]) {
        result.push(item);
        uniqueValues[item] = true;
      }
    }
    return result;
}
  
const sort = (array) => {
    if(array.length < 2) {
      return array;
    } else {
      const mid = Math.floor(array.length/2);
      const lefthand = array.slice(0, mid);
      const righthand = array.slice(mid, array.length);
  
      // Return the merge function once sort() has completed for both left and right arrays. This will divide
      // each array until array.length < 2, then returning each individual array. Then, it will merge those returned
      // arrays
      return merge(sort(lefthand), sort(righthand));
    }
}
  
const merge = (left, right) => {
    // Define array indexes
    let i = 0;
    let j = 0;
    
    // Define the resulting array for elements to be pushed into
    const result = [];
  
    // Initial for loop for when both arrays NOT empty
    for(; i < left.length && j < right.length;) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
  
    // Remaining while loops when one array is empty but the other is NOT empty
    while(i < left.length) {
        result.push(left[i]);
        i++;
    }
  
    while(j < right.length) {
        result.push(right[j]);
        j++;
    }
  
    // Finally, return array
    return result;
}