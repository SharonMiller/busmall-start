'use strict';
//global variables
var product1 = document.getElementById('product1');
var prodName1 = document.getElementById('vote1');
var product2 = document.getElementById('product2');
var prodName2 = document.getElementById('vote2');
var product3 = document.getElementById('product3');
var prodName3 = document.getElementById('vote3');
var imageSection = document.getElementById('clickMe');

//===================

//create array for all images
Product.productsArray = [];

//array for images clicked
Product.totalClickes = 0;

//track which items were lastshonwn

function Product(src, imageName, size) {
  this.src = src;
  this.imageName = imageName;
  this.votedFor = 0;
  this.imageDisplayedCount = 0;
  this.size = size || '300px';
  Product.productsArray.push(this);
}
Product.voteCount = 0;
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
  } while (randomNumber1 === randomNumber2 || randomNumber2 === pastRandomNumber2 || randomNumber1 === pastRandomNumber1);
  
  do {
    randomNumber3 = Math.floor(Math.random() * Product.productsArray.length);
  } while (randomNumber1 === randomNumber2 || randomNumber1 === randomNumber3 || randomNumber3 === pastRandomNumber2 || randomNumber3 === pastRandomNumber3);

  product1.src = Product.productsArray[randomNumber1].src;
  product2.src = Product.productsArray[randomNumber2].src;
  product3.src = Product.productsArray[randomNumber3].src;

  product1.dataset.index = randomNumber1;
  product2.dataset.index = randomNumber2;
  product3.dataset.index = randomNumber3;
  //saving the new random numbers into the past random numbers- only checks in the while loop
  pastRandomNumber1 = randomNumber1;
  pastRandomNumber2 = randomNumber2;
  pastRandomNumber3 = randomNumber3;

  //why did we do this, what is this doing???
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


function handleClickEvent(event) {
  Product.renderThreeRandomly();
  // var clickedNode = event.target;

  // Product.votecount++;
  // if (Product.voteCount === 25);
  //stop counter and display
}
// Product.random();


imageSection.addEventListener('click', handleClickEvent);

Product.renderThreeRandomly();