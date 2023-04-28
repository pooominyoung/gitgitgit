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

var Username = document.querySelector('#user');
let myHeading = document.querySelector('#pagename');

function setUsername () {
    const myName= prompt("Pleas enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent='Longtime no see, ${myName}';
    setUsername();
    } 
     if (!localStorage.getItem("name")){
    }else {
    const storedName = localStorage.getItem("myname");
    myHeading.textContent = 'Longtime no see, ${"storedName"}';       
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

Username.onclick = setUsername;


if(pagename2===onclick){
    style.color="red"
    window.open('bluefooted.html')
}

