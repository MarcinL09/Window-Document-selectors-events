// Exercise: add a button to HTML and change its background color

const buttonElement = document.querySelector('button');
if (buttonElement) {
    buttonElement.style.background = 'orange';
}

// Exercise: make the input disabled using JavaScript

const inputElement = document.getElementById("#name");
if (inputElement) {
    inputElement.disabled = true;
}

// Exercise: add a class to all <p> elements that underlines the text

const text = document.querySelectorAll('p');

text.forEach(function(text){
    text.classList.add("underlined-text");
})
