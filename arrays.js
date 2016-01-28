//1
var list = ['pop tarts','ramen','chips','salsa', 'coffee'];
console.log("STEP 1: Our list: " + list )
//2

list.push('fruit loops');
console.log("STEP 2: Added fruitloops! Our list: " + list)

//3
var coffeeSlot = list.indexOf('coffee');
list.splice(coffeeSlot,coffeeSlot,"fair trade coffee");
console.log("STEP 3: Replace coffee with fair trade coffee. Our list: " + list)

//4
var chipsSlot = list.indexOf('chips');
var salsaSlot = list.indexOf('salsa');
list.splice(chipsSlot,chipsSlot,"rice");
list.splice(salsaSlot,salsaSlot,"beans");
console.log("STEP 4: Replace chips and salsa with rice and beans. Our list: " + list)

//5
var cart = [];

//6
var addItemtoCart = list.pop();
cart.push(addItemtoCart)
console.log("STEP 6: Remove last item from the list, add to cart. Our list: " + list + "  | Our cart: " + cart)

//7
var addFirstItemToCart = list[0];
list.shift();
cart.push(addFirstItemToCart);
console.log("STEP 7: Remove the first item from the list, add to cart. Our list: " + list + " | Our cart: " +cart)
