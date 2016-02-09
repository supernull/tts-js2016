// function Particle(startX, startY) {
//  this.startX = startX;
//  this.startY = startY;
//  var velocity = {x: 0, y: 0};
// };
//
// var time = 5;
// var gravity = 0.5;
// var particles = [];
//
// Particle.prototype = {
//    getVelocity: function (time, gravity) {
//
//      return time * gravity
//    },
//
//  move: function move(){
//    this.y += this.getVelocity();
//      if(y >= 500){
//        console.log('bottom');
//    } else { console.log('wee')}
//  }
// }
//
// for (i = 0; i < 100; i++){
//  particles.push(new Particle(i, Math.round(Math.random()*500)))
// };
//
// setInterval(function(){
//   time++;
//   particles.filter(function(i){return i.y < 500;})
//   .forEach(function(i){i.move();})
// },100)

var gravity = 0.5;
var time = 0;

function Particle(startX,startY) {
    this.x = startX;
    this.y = startY;
}

Particle.prototype = {
    getVelocity: function(){
        return time * gravity;
    },

    move: function() {

      this.y += this.getVelocity();
      if(this.y >= 500)
          console.log('bottom');
    }
}

var particles = [];
for(var i = 0; i < 10; i++) {
    particles.push(new Particle(i,Math.random()*500));
}

setInterval(function(){
    time++;
    particles.filter(function(p){
        return p.y < 500;
    })
    .forEach(function(p){
        p.move();
    })
},100)
