let MyImage = document.querySelector('img');

MyImage.onclick = function(){
    let MySrc = MyImage.getAttribute('src');
    if (MySrc === 'Mozilla_Firefox_1.png') {
        MyImage.setAttribute('src','Mozilla_Firefox_2.png'); 
    }
    else{
        MyImage.setAttribute('src','Mozilla_Firefox_1.png')
    }
}

let mybutton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please, introduce your name');
    if (!myName) {
        setUserName();
    }else{
    localStorage.setItem('name',myName);
    myHeading.textContent('Mozilla is cooll,' + myName);}
}

if (!localStorage.getItem('name')) {
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

mybutton.onclick = function(){
    setUserName();
}