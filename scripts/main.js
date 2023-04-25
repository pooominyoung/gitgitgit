let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_2849.jpg') {
        myImage.setAttribute
('src','images/IMG_2848.jpg');
    } else{
      myImage.setAttribute('src','images/IMG_2849.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName || myName === null){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Nice to meet you ' +myName+' BaBooo';
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Long time no see ' +storedName + ' BaBooo!';
}

myButton.onclick = function() {
    setUserName();
}

var heading = document.querySelector('#pagename');
heading.onclick = function(){
    if(heading.style.color==="red"){
        heading.style.color="mediumblue"
    }else{
        heading.style.color="red"
        window.open('page2.html')
    }
}