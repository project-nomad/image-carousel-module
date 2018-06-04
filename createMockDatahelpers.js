function makeInsertsForListingsTable() {
  for (let i = 1; i <= 100; i += 1) {
    console.log(`INSERT INTO LISTINGS (id, name) VALUES (${i}, "listing${i}");`);
  }
}

//makeInsertsForListingsTable();


// make helper for making a random number generator between 1 && 100

const urls = ['https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room1.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room10.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room11.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room12.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room13.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room14.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room15.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room16.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room17.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room18.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room19.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room2.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room20.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room21.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room22.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room23.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room24.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room25.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room26.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room27.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room28.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room29.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room3.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room30.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room31.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room32.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room33.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room34.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room35.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room36.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room37.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room38.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room39.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room4.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room40.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room41.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room42.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room43.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room44.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room45.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room46.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room47.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room48.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room49.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room5.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room50.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room6.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room7.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room8.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/room9.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/1.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/10.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/100.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/101.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/11.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/12.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/13.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/14.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/15.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/16.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/17.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/18.JPG', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/19.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/2.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/20.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/21.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/22.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/23.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/24.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/25.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/26.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/27.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/28.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/29.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/3.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/30.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/31.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/32.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/33.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/34.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/35.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/36.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/37.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/38.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/39.JPG', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/4.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/40.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/41.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/42.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/43.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/44.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/45.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/46.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/47.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/48.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/49.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/5.JPG', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/50.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/51.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/52.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/53.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/54.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/55.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/56.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/57.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/58.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/59.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/6.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/60.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/61.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/62.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/63.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/64.JPG', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/65.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/66.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/67.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/68.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/69.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/7.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/70.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/71.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/72.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/73.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/74.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/75.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/76.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/77.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/78.JPG', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/79.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/8.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/80.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/81.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/82.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/83.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/84.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/85.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/86.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/87.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/88.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/89.JPG', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/9.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/90.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/91.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/92.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/93.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/94.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/95.jpeg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/96.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/97.jpg', 'https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/98.jpeg'];

function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - (min + 1)) + min + 1);
}


//must change values i + 50, increment y fifty every time && changerng min max
//1-10
//10-20
//20-30


function makeInsertsForRefrencePic() {
  // for loop for index
  for (let i = 0; i < urls.length; i += 1) {
  // every iteration we use a random number generator  to produce listing_id

    console.log(`INSERT INTO REFRENCEPIC (id,listing_id, caption, verifiablePhoto, SRC) VALUE (${i + 1351},${randomNumberGenerator(90, 101)}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore", ${true}, "${urls[i]}");`);
  }
}

makeInsertsForRefrencePic();