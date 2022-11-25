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
    text.classList.add("underlined-text")
});

// Add a button and an input to your HTML. Every time the user clicks the button, change the
// background color of the button to the color typed by the user.

const nameInputElement = document.querySelector('#name');
buttonElement.addEventListener('click', function() {
    document.body.style.background = nameInputElement.value;
});

// Add an input and a paragraph to your HTML. Every time the user puts in a valid number, change
// the font size of the paragraph. If the user didn't put in a valid value, set it to 12px.
const paragraphElement = document.querySelector('#text')
const validNumberElement = document.querySelector('#number');
validNumberElement.addEventListener('input', function(){
    if (validNumberElement) {
        paragraphElement.style.fontSize = `${validNumberElement.value}px`;
    } if (validNumberElement === undefined) {
        paragraphElement.style.fontSize = '12px'
    }
});



