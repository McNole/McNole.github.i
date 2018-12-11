var myHeading = document.querySelector('h1'); // This is a comment
myHeading.textContent = 'Hello world!';
/*
Everything in between is a comment.
*/
//var iceCream = 'chocolate';
//if (iceCream === 'chocolate') {
  //alert('Yay, I love chocolate ice cream!');
//} else {
  //alert('Awwww, but chocolate is my favorite...');
//}
var myVariable = document.querySelector('h1');
alert('hello!');

//function multiply(num1,num2) {
  //var result = num1 * num2;
  //return result;
//}
//document.querySelector('html').onclick = function() {
    //alert('Ouch! Stop poking me!');
//}

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/My test image.jpg') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/My test image.jpg');
    }
}

//
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello World, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello World, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
//move
