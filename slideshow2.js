var slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        var self = this;
        if(self.currentPhotoIndex < self.photoList.length - 1) {
            self.currentPhotoIndex++;
            console.log('currentPhoto is: ' + self.photoList[self.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow')
        }
    },

    prevPhoto: function() {
      var self = this;
        if(self.currentPhotoIndex > 0) {
            self.currentPhotoIndex--;
            console.log('currentPhoto is: ' + self.photoList[self.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow')
        }
    },

    getCurrentPhoto: function() {
        var self = this;
        return self.photoList[self.currentPhotoIndex];
    },

      play: function(){ var self = this;
        setInterval(nextPhoto,2000); },
}

slideshow.play();
