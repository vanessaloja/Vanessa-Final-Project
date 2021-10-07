function generate(){
    var quotes = {
        "Fact #1" : '"A snail can sleep for 3 years"',
        "Fact #2" : '"Bats always turn left when leaving a cave"',
        "Fact #3" : '"Cows can sleep standing up, but they can only dream lying down"',
        "Fact #4" : '"An Octopus has three hearts and 9 brains"',
        "Fact #5" : '"The oldest cat in the world was 38 years old"',
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