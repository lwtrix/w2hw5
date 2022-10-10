// EX 1 ********

// const heading1 = document.querySelector('h1');
// heading1.textContent = "Space Gadgetz";

// EX 2 ********

// document.querySelector('body').style.backgroundColor = "aliceblue";

// EX 3 ********

const address = document.querySelector('#address')

function fakeAddress() {
    address.textContent = "Fake Address"
}

// fakeAddress()

// EX 4 ********

const links = document.getElementsByClassName('link');

function changeClass() {
    for(let link of links) {
        link.classList.add('random')
    }
}

// changeClass()

// EX 5 ********

const images = document.querySelectorAll('img');

function toggleDisplay() {
    for(img of images) {
        img.classList.toggle('invisible')
    }
}

// toggleDisplay()

// EX 6 ********

const prices = document.querySelectorAll('.price');

function randomColor() {
    
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const randColor = `rgb(${r}, ${g}, ${b})`

    for(price of prices) {
        price.style.color = randColor;
    }
}

// randomColor()




