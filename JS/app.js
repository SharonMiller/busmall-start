'use strict';
//global variables
var product1 = document.getElementById('product1');
var prodName1 = document.getElementById('vote1');
var product2 = document.getElementById('product2');
var prodName2 = document.getElementById('vote2');
var product3 = document.getElementById('product3');
var prodName3 = document.getElementById('vote3');
var imageSection = document.getElementById('clickMe');
var votingDataChart;

//global variables for chart
var chartProductLabels = [];
var chartVotedTimes = [];
// var chartImageDisplayedCount = [];
// var chartImagePercent = [];

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
  // console.log(Product.totalClicks);
  // console.log(clickedNode.dataset.index);
  if (clickedNode.dataset.index >= 0) {
    Product.renderThreeRandomly();
    Product.totalClicks++;
    Product.productsArray[clickedNode.dataset.index].votedTimes++;
  }
  //stop voting after 25 clicks and create the product chart
  if (Product.totalClicks == 25) {
    console.log('25 clicks');
    generateProductData();
    drawChart();
  }
}
imageSection.removeEventListener('click', handleClickEvent);

//Create a function to display my labels in my chart
function generateProductData() {
  // console.log('this is my product data');
  for (var i = 0; i < Product.productsArray.length; i++) {
    productData.labels[i] = Product.productsArray[i].imageName;
    productData.datasets['0']['data'][i] = Product.productsArray[i].votedTimes;
  }
}
var productData = {
  labels: [],
  datasets: [{
    label: 'Vote Results',
    backgroundColor: [
      '#FFD700',
      '#FE5000',
      '#CE0058',
      '#BB29BB',
      '#10069F',
      '#0085CA',
      '#00AB84',
      '#009ACE',
      '#C6BCD0',
      '#3F2A56',
      '#A0D1CA',
      '#6CC24A',
      '#00966C',
      '#00A9E0',
      '#C964CF',
      '#DF1995',
      '#E03E52',
      '#FFAE62',
      '#FBD872',
      '#BF9BDE',

    ],
    borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    data: [],
    borderWidth: 1,
  }]
};


// chart info function//////////////
function drawChart() {
  var ctx = document.getElementById('votingDataChart').getContext('2d');
  votingDataChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: productData,
    // {
    //   labels: chartProductLabels,
    //   datasets: [{
    //     label: 'Vote Results',
    //     data: [],
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.2)',
    //       'rgba(54, 162, 235, 0.2)',
    //       'rgba(255, 206, 86, 0.2)',
    //       'rgba(75, 192, 192, 0.2)',
    //       'rgba(153, 102, 255, 0.2)',
    //       'rgba(255, 159, 64, 0.2)'
    //     ],
    //     borderColor: [
    //       'rgba(255,99,132,1)',
    //       'rgba(54, 162, 235, 1)',
    //       'rgba(255, 206, 86, 1)',
    //       'rgba(75, 192, 192, 1)',
    //       'rgba(153, 102, 255, 1)',
    //       'rgba(255, 159, 64, 1)'
    //     ],
    //     borderWidth: 1
    //   }]
    // },
    options: {}
  });
}
// drawChart();


imageSection.addEventListener('click', handleClickEvent);

Product.renderThreeRandomly();
