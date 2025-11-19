function getSecondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i =0; i< arr.length ; i++){
         if(arr[i]>firstLargest)
         {
            secondLargest   = firstLargest;
            firstLargest = arr[i]
         }
    }
    return secondLargest;
}
console.log(getSecondLargest([10, 20, 4, 45, 99])); // Output: 45
console.log(getSecondLargest([1, 2, 3, 4, 5]));