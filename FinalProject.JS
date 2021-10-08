function generate(){
    var quotes = {
        "Fact #1" : '"The only letter to not apper in the periodic tabe is the letter J"',
        "Fact #2" : '"Rain contains vitamin B12"',
        "Fact #3" : '"The first living creature in space was a dog named Laika"',
        "Fact #4" : '"In the mid-1800s Ketchup was sold as medicine"',
        "Fact #5" : '"The US gets over 1,200 tornadoes a year"',
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