// Example array
const numbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// Function to filter array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Condition to filter numbers greater than 5
const condition = (number) => number > 5;

// Filtered array
const filteredNumbers = filterArray(numbers, condition);

// Output the result
console.log(filteredNumbers); // Output: [7, 9, 6, 8, 10]
