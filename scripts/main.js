let myImage = document.querySelector('img');
myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/front.jpg'){
    myImage.setAttribute('src','images/wzt.jpg');
  }else {
    myImage.setAttribute('src','images/front.jpg');
  }
}

function setHeading(name){
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'hi ' + name;
}

function setUserName(){
  let myName = prompt('what is your name ?');
  localStorage.setItem('name',myName);
  setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
  setUserName();
}else{
  setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
