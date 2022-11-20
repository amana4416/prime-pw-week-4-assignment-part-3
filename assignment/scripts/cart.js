console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named `basket` and set it to an empty arra
let basket = [];

// Create a function called `addItem`
function addItem(item) {
    basket.push(item);
    return true;
}

// Test 
console.log('Add protein powder to basket:', addItem('protein powder'));
console.log('Add yogurt to basket:', addItem('yogurt'));
console.log('Add bagels to basket:', addItem('bagels'));

console.log("What's in the basket?", basket);

// Create a function called `listItems`
function listItems(array) {
    for (let item of array) {
        console.log(item);
    }
}

// Test
listItems(basket);

// Create a function called `empty`
function empty(array) {
    while (array.length > 0) {
        array.pop();
    }
}

// Test
empty(basket);

console.log('The basket is empty now:', basket);