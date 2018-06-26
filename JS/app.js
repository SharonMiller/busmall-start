'use strict';
//global variables
var itemImage1 = document.getElementById('item1');
var itemImage2 = document.getElementById('item2');
var itemImage3 = document.getElementById('item3');
var imageSection = document.getElementById('vote');
//===================

//create array for all images
ItemImage.imageArray = [];

//array for images clicked
ItemImage.totalClickes = 0;

//track which items were last shown
ItemImage.lastShown = [];

function ItemImage(src, imageName) {
  this.src = src;
  this.imageName = imageName;
  this.imageClickedCount = 0;
  this.imageDisplayedCount = 0;
  ItemImage.imageArray.push(this);
}


ItemImage.prototype.render = function(){
  console.log ('rendering');
};

//rank photos

var pastLikedItem1 = 0;
var pastLikedItem2 = 10;
var pastLikedItem3 = 16;

//random number generator
ItemImage.renderThreeRandomly = function (){
  do {
    var randomNumber1 = Math.floor(Math.random() * ItemImage.imageArray.length);
  } while (randomNumber1 === pastLikedItem1 || randomNumber1 === pastLikedItem2 || randomNumber1 === pastLikedItem3);
};




//new products
new ItemImage('./img/bag.jpg', 'Star Wars Carry-ons');
new ItemImage('./img/banana.jpg', 'Banana Slicer');
new ItemImage('./img/bathroom.jpg', 'TP Tablet Holder');
new ItemImage('./img/boots.jpg', 'Open Toed Rainboots');

ItemImage.renderThreeRandomly();