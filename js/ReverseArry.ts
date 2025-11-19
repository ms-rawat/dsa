function reverseArray<T>(arr: T[]): T[] {
    return [...arr].reverse(); // copy first, then reverse
}

console.log(reverseArray<number>([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]
console.log(reverseArray<string>(['a', 'b', 'c'])); // Output: ['c', 'b', 'a']