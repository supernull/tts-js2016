// -> Define two constructor functions: 'Robot' and 'Vehicle'

function Robot() {
	this.lasers = 2;

}
function Vehicle() {
var x = Object.create(Vehicle);
return x;
}

// -> When called with 'new', the Robot constructor function should return
//    the implicit 'this'

var robby = new Robot();

// -> When called with 'new', the Vehicle constructor function should return
//    an object of your own making, not the implicit 'this'.

var coolcar = new Vehicle();


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
