// -> Define a 'Robot' constructor function

function Robot(){
	this.motors = 2;
}

// -> Inside the Robot constructor assign a property 'motors' on 'this',
//    set motors to 2
// -> Create an instance of Robot called 'robby'

var robby = new Robot();

// -> What is the result of `(robby instanceof Robot)`?
claim((robby instanceof Robot), true);

// -> What is `robby.motors`?
claim(robby.motors, 2);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:  Robot,
	robby:  robby
}
