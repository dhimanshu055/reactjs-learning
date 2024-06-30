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



// Example array of users
const users = [
    { id: 1, name: 'John', age: 25, status: { active: true } },
    { id: 2, name: 'Jane', age: 17, status: { active: true } },
    { id: 3, name: 'Bob', age: 30, status: { active: false } },
    { id: 4, name: 'Alice', age: 22, status: { active: true } },
    { id: 5, name: 'Tom', age: 19, status: { active: true } },
  ];
  
  // Function to filter nested array based on conditions
  function filterNestedArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Condition to filter users who are active and older than 18
  const condition = (user) => user.status.active && user.age > 18;
  
  // Filtered array
  const filteredUsers = filterNestedArray(users, condition);
  
  // Output the result
  console.log(filteredUsers);
  /*
  Output:
  [
    { id: 1, name: 'John', age: 25, status: { active: true } },
    { id: 4, name: 'Alice', age: 22, status: { active: true } },
    { id: 5, name: 'Tom', age: 19, status: { active: true } }
  ]
*/  