let profileDetails = {
    imgSrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
  };
let profileContainerE1= document.getElementById('profileContainer');
let imgContainerE1= document.getElementById('imgContainer');
imgContainerE1.classList.toggle('img-container')

let imgE1= document.createElement('img');
imgE1.src= profileDetails.imgSrc;
imgE1.classList.toggle('img')
imgContainerE1.appendChild(imgE1);

let headingE1= document.createElement('h1');
headingE1.textContent= profileDetails.name;
headingE1.classList.toggle('heading')
imgContainerE1.appendChild(headingE1);

let paragraphE1= document.createElement('p');
paragraphE1.textContent= 'Age :' + profileDetails.age;
paragraphE1.classList.toggle('paragraph')
imgContainerE1.appendChild(paragraphE1);
  
 