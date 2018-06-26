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

//track which items were lastshonwn

function ItemImage(src, imageName) {
  this.src = src;
  this.imageName = imageName;
  this.imageClickedCount = 0;
  this.imageDisplayedCount = 0;
  // this.size = size || 300px;
  ItemImage.imageArray.push(this);
}

// ItemImage.prototype.render = function(){
//   console.log ('rendering');
// };

//rank photos
ItemImage.rankImages = function() {
  for(var i in this.imageArray){
    console.log(this.imageArray[i].imageClickedCount);
  }
};
var pastLikedItem1 = 0;
var pastLikedItem2 = 10;
var pastLikedItem3 = 16;

ItemImage.renderThreeRandomly = function (){
  do {
    var randomNumber1 = Math.floor(Math.random() * ItemImage.imageArray.length);
  } while (randomNumber1 === pastLikedItem1 || randomNumber1 === pastLikedItem2 || randomNumber1 === pastLikedItem3);
};
itemImage1.src = this.imageArray[randomNumber1].src;
itemImage1.src = ItemImage.imageArray[randomNumber1].src;
itemImage2.src = ItemImage.imageArray[randomNumber2].src;
itemImage3.src = ItemImage.imageArray[randomNumber3].src;

//new products
new ItemImage('./img/bag.jpg', 'Star Wars Carry-ons');
new ItemImage('./img/banana.jpg', 'Banana Slicer');
new ItemImage('./img/bathroom.jpg', 'TP Tablet Holder');
new ItemImage('./img/boots.jpg', 'Open Toed Rainboots');
new ItemImage('./img/breakfast.jpg', 'All in One Breakfast Cooker');
// new ItemImage(.)

ItemImage.renderThreeRandomly();