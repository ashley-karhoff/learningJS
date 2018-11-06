// Write the function isEven() to take a single numeric argument that returns true for even numbers and false for odd
function isEven(num) {
    return num % 2 === 0;
}

// Create a function to show the factorial of a number
function factorial(num) {
    var result = 1;
    for(var i = 2; i <= num; i++) {
        result = result * i; // or could use "result *= i;"
    }
    return result;
}
factorial(5);

// Write a function that converts strings from kebab to snack case
function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}
kebabToSnake("dogs-are-awesome");
