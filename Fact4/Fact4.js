function generate(){
    var quotes = {
    "Fact #1" : '"I was born and raised in New York City"',
    "Fact #2" : '"I have a dog named Nugget!"',
    "Fact #3" : '"I danced ballet for 10 years"',
    "Fact #4" : '"I am a big fan of the Harry Potter series"',
    "Fact #5" : '"I have completed the Front End Web Development course!"',
}

var authors = Object.keys(quotes);

var author = authors[Math.floor(Math.random() * authors.length)];

var quote = quotes[author];

document.getElementById("quote").textContent = quote;
document.getElementById("author").textContent = author;
}

const menuHamburger = document.querySelector('#menu-hamburger')
// console.log(menuHamburger)
const menu = document.querySelector('.menu')
// console.log(menu)

const close = document.querySelector('#menu-close')
console.log(close)

menuHamburger.addEventListener('click', () => {
    menu.classList.add('menu-open')
})


close.addEventListener('click', () => {
    menu.classList.remove('menu-open')
})