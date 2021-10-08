function generate(){
    var quotes = {
        "Fact #1" : '"Tug of War used to be an event at the Summer Olympics between 1900 and 1920"',
        "Fact #2" : '"Tablecloths were orignally designed to be one big napkin"',
        "Fact #3" : '"The first parachute jump from an airplane happened in 1912"',
        "Fact #4" : '"The Hollywood sign was once Hollywoodland"',
        "Fact #5" : '"Toto, the dog from The Wizard of Oz, was paid more than some of the actors"',
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