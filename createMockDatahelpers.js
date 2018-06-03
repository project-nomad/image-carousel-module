function makeInsertsForListingsTable() {
  for (let i = 1; i <= 100; i += 1) {
    console.log(`INSERT INTO LISTINGS (id, name) VALUES (${i}, "listing${i}");`);
  }
}

makeInsertsForListingsTable();


// make helper for making a random number generator between 1 && 100

const urls = ['https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room1.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room10.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room11.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room12.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room13.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room14.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room15.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room16.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room17.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room18.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room19.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room2.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room20.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room21.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room22.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room23.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room24.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room25.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room26.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room27.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room28.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room29.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room3.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room30.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room31.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room32.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room33.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room34.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room35.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room36.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room37.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room38.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room39.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room4.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room40.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room41.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room42.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room43.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room44.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room45.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room46.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room47.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room48.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room49.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room5.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room50.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room6.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room7.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room8.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room9.jpg'];

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - (min + 1)) + min + 1);
}


//must change values i + 50, increment y fifty every time && changerng min max
function makeInsertsForRefrencePic() {
  // for loop for index
  for (let i = 0; i < urls.length; i += 1) {
  // every iteration we use a random number generator  to produce listing_id

    console.log(`INSERT INTO REFRENCEPIC (id,listing_id, caption, verifiablePhoto, SRC) VALUE (${i + 450},${randomNumberGenerator(90, 101)}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", ${true}, "${urls[i]}");`);
  }
}

//makeInsertsForRefrencePic();
