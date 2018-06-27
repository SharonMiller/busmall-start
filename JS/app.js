'use strict';
//global variables
var product1 = document.getElementById('product1');
var prodName1 = document.getElementById('vote1');
var product2 = document.getElementById('product2');
var prodName2 = document.getElementById('vote2');
var product3 = document.getElementById('product3');
var prodName3 = document.getElementById('vote3');
var imageSection = document.getElementById('clickMe');


//global variables for chart
var chartLabels = [];
var chartVotedTimes = [];
var chartImageDisplayedCount = [];
var chartImagePercent = [];

//===================

//create array for all images
Product.productsArray = [];

//array for images clicked
Product.totalClicks = 0;

//track which items were lastshonwn

function Product(src, imageName, size) {
  this.src = src;
  this.imageName = imageName;
  this.votedTimes = 0;
  this.imageDisplayedCount = 0;
  this.size = size || '300px';
  Product.productsArray.push(this);
};
// ItemImage.prototype.render = function(){
//   console.log ('rendering');
// };

//rank photos
Product.rankImages = function () {
  for (var i in this.productsArray) {
    console.log(this.productsArray[i].votedFor);
  }
};
//setting up the first three product images as the past displayed images
var pastRandomNumber1 = 0;
var pastRandomNumber2 = 1;
var pastRandomNumber3 = 2;

//funtion to choose three new random images
Product.renderThreeRandomly = function () {
  var randomNumber1;
  var randomNumber2;
  var randomNumber3;
  do {
    randomNumber1 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber1 === pastRandomNumber1 || randomNumber1 === pastRandomNumber2 || randomNumber1 === pastRandomNumber3);

  do {
    randomNumber2 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber1 === randomNumber2 || randomNumber2 === pastRandomNumber1 || randomNumber2 === pastRandomNumber2 || randomNumber2 === pastRandomNumber3);

  do {
    randomNumber3 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2 || randomNumber3 === pastRandomNumber1 || randomNumber3 === pastRandomNumber2 || randomNumber3 === pastRandomNumber3);

  product1.src = Product.productsArray[randomNumber1].src;
  product2.src = Product.productsArray[randomNumber2].src;
  product3.src = Product.productsArray[randomNumber3].src;

  product1.dataset.index = randomNumber1;
  product2.dataset.index = randomNumber2;
  product3.dataset.index = randomNumber3;

  Product.productsArray[randomNumber1].imageDisplayedCount++;
  Product.productsArray[randomNumber2].imageDisplayedCount++;
  Product.productsArray[randomNumber3].imageDisplayedCount++;


  //saving the new random numbers into the past random numbers- only checks in the while loop
  pastRandomNumber1 = randomNumber1;
  pastRandomNumber2 = randomNumber2;
  pastRandomNumber3 = randomNumber3;

  //grabbing the text from the image in HTML and matching it to the product array
  prodName1.textContent = Product.productsArray[randomNumber1].imageName;
  prodName2.textContent = Product.productsArray[randomNumber2].imageName;
  prodName3.textContent = Product.productsArray[randomNumber3].imageName;
};

// product1.src = this.productsArray[randomNumber1].src;



//new products
new Product('./img/bag.jpg', 'Star Wars Carry-ons');
new Product('./img/banana.jpg', 'Banana Slicer');
new Product('./img/bathroom.jpg', 'TP Tablet Holder');
new Product('./img/boots.jpg', 'Open Toed Rainboots');
new Product('./img/breakfast.jpg', 'All in One Breakfast Cooker');
new Product('./img/bubblegum.jpg', 'Meatball Bubblegum');
new Product('./img/chair.jpg', 'Chair');
new Product('./img/cthulhu.jpg', 'Cthulu');
new Product('./img/dog-duck.jpg', 'Duck Mask for Dog');
new Product('./img/dragon.jpg', 'Dragon Meat');
new Product('./img/pen.jpg', 'Pen');
new Product('./img/pet-sweep.jpg', 'Pet Sweeping Slippers');
new Product('./img/scissors.jpg', 'Pizza Scissors');
new Product('./img/shark.jpg', 'Shark Sleeping Bag');
new Product('./img/sweep.jpg', 'Sweep Slippers');
new Product('./img/tauntaun.jpg', 'Tauntaun Sleeping Bag');
new Product('./img/unicorn.jpg', 'Unicorn Meat');
new Product('./img/usb.gif', 'Wiggly USB Tail');
new Product('./img/water-can.jpg', 'Water Can');
new Product('./img/wine-glass.jpg', 'Wine Glass');


function handleClickEvent(event) {
  var clickedNode = event.target;
  console.log(Product.totalClicks);
  // console.log(clickedNode.dataset.index);
  if (clickedNode.dataset.index >= 0) {
    Product.renderThreeRandomly();
    Product.totalClicks++;
    Product.productsArray[clickedNode.dataset.index].votedTimes++;
  }
  if (Product.totalClicks == 25) {
    var ulEl = document.getElementById('results-list');
    console.log('im in the if statement');
    for (var i = 0; i < Product.productsArray.length; i++) {
      var liEl = document.createElement('li');
      console.log('im in the for loop');
      liEl.textContent = Product.productsArray[i].votedTimes + ' votes for the ' + Product.productsArray[i].imageName;
      ulEl.appendChild(liEl);
      console.log(ulEl + 'hi');
    }
    console.log('NEAR IMAGE');
    imageSection.removeEventListener('click', handleClickEvent);
  }
}
//chart info function
// var ctx = DocumentType.getElementById('myChart').getContext('2d');
// var myChart = new Chart (ctx, {
//   type: 'horizontalBar',
//   data: data,
//   options: options,
//   label: Product.productsArray[i].imageName,
// });


imageSection.addEventListener('click', handleClickEvent);

Product.renderThreeRandomly();
