//filter, forEach, map and reduce

// var players = [
//     {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
//     {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
//     {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
//     {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
//     {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
//     {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
//     {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
// ];
//
// //find Mike
// var whosMike = players.find(function(players){
//   return players.firstName === 'Mike';
//
// });
//
// //array of all rbs
// var allRBs = players.filter(function(players){
//   return players.position == 'RB'
// });
//
// //array of all last names
// var playerLastNames = players.map(function(player){
//  return player.lastName;
// });
//
// //array of all full names with 5<touchdowns
//
// console.log(lottaTouchdowns);

var slideshow = { photoList:["photo1", "photo2", "photo3"],
  currentPhotoIndex:0,
  nextPhoto: function(){
      if(this.photoList.length >= this.currentPhotoIndex){
            console.log(this.photoList[currentPhotoIndex]);
            this.currentPhotoIndex++;
        } else{
          console.log("end of slideshow");
        }
      // console.log("test")
  },
  // play: function(){setInterval(this.nextPhoto,2000); },
  // // pause: function(){cancelInterval(intID)}
}

slideshow.nextPhoto();
