// -> Define an object called 'Robot'

var Robot = {}

// -> Define a method called 'new' in Robot
Robot.new = function (){ var x = Object.create(Robot); return x}

// -> When Robot.new is called it should return a new object with Robot as its prototype
//    e.g. var robby = Robot.new();


//    Robot should be the prototype of robby

var robby = Robot.new();


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot: Robot
}
