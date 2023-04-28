
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

const formElement = document.querySelector(".profile");
formElement.addEventListener('submit', savePlayerInput);

function savePlayerInput(event){
  event.preventDefault();
  const formData = new FormData(event.target);
  const userName = formData.get('name')
}
const formData = new formData(event.target);
formElement.addEventListener('submit', savePlayerInput);

const userName = formData.get('name')