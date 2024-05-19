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

// Example array of products
const products = [
    { 
      id: 1, 
      name: 'Product A', 
      category: { name: 'Electronics' }, 
      details: { price: 300, stock: 100 } 
    },
    { 
      id: 2, 
      name: 'Product B', 
      category: { name: 'Electronics' }, 
      details: { price: 150, stock: 200 } 
    },
    { 
      id: 3, 
      name: 'Product C', 
      category: { name: 'Furniture' }, 
      details: { price: 450, stock: 50 } 
    },
    { 
      id: 4, 
      name: 'Product D', 
      category: { name: 'Electronics' }, 
      details: { price: 600, stock: 80 } 
    },
    { 
      id: 5, 
      name: 'Product E', 
      category: { name: 'Furniture' }, 
      details: { price: 250, stock: 150 } 
    },
  ];
  
  // Function of filter nested array based on conditions
  function filterNestedArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Condition to filter products in the 'Electronics' category with price greater than 200
  const condition = (product) => product.category.name === 'Electronics' && product.details.price > 200;
  
  // Filtered array
  const filteredProducts = filterNestedArray(products, condition);
  
  // Output the result
  console.log(filteredProducts);
  /*
  Output:
  [
    { 
      id: 1, 
      name: 'Product A', 
      category: { name: 'Electronics' }, 
      details: { price: 300, stock: 100 } 
    },
    { 
      id: 4, 
      name: 'Product D', 
      category: { name: 'Electronics' }, 
      details: { price: 600, stock: 80 } 
    }
  ]
*/  