function thirdLargest(arr){
    let n = arr.length;
    arr.sort((a,b)=> a - b);
    return arr[n - 3];

}

console.log(thirdLargest([10, 20, 4, 45, 99])); // Output: 45
console.log(thirdLargest([1, 2, 3, 4, 5]));