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



//STRETCH GOALS//

// Add a global `const` named `maxItems` and set it to 5
const maxItems = 5;

// Create a function called isFull()
function isFull(array) {
    if (array.length < 5) {
        return false;
    } else {
        return true;
    }
}

// Test
console.log('Is the basket full?', isFull(basket));
basket ['elbow pasta', 'shredded cheese', 'cream cheese', 'heavy whipping cream', 'shallots']
console.log('Add onion powder to basket:', basket);
console.log('Is the basket full?', isFull(basket));

// Update the required `addItem` function
function addItem(item) {
    if (isFull(basket)) {
        return false;
    } else {
        basket.push(item);
        return true;
    }
}

// Test
console.log('Do not add frosting to the basket', addItem('frosting'));
console.log('What is in the basket?', basket);
console.log('Now empty the basket so we can get frosting:', empty(basket));
console.log('See if the basket is empty', basket);
console.log('Add forsting to the basket', addItem('frosting'));
console.log('What is in the basket now??', basket);


// Create a function called `removeItem'
function removeItem(item) {
    if (basket[basket.indexOf(item)] === item) { 
        return basket.splice(basket.indexOf(item), 1);
    } else {
        return null;
    }
}

// Test
console.log('Is there candy in the basket?', removeItem('candy'));
console.log('Take out frosting', removeItem('frosting'));
console.log('The basket is now empty', basket);