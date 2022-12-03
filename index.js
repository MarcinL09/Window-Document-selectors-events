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
const fontSizeNumberElement = document.querySelector('#number');
function isValueValid(value) {

}
fontSizeNumberElement.addEventListener('input', function(){
    const value = fontSizeNumberElement.value;
    if (isValueValid(value)) {
        paragraphElement.style.fontSize = `${fontSizeNumberElement.value}px`;
    } else {
        paragraphElement.style.fontSize = '12px';
    }
});
/*
Add three paragraphs to your HTML and a button. When the user clicks on a button, change the
color of all of the paragraphs to green. When the user clicks on the button again, change the
color of the paragraphs to black. If the user clicks on the button for the third time, change the
color back to green and so forth.
*/

const paragraphToBeColored = document.querySelectorAll('.color');
const colorChangingButton = document.querySelector('#color-changer');

colorChangingButton.addEventListener('click', function () {
    paragraphToBeColored.forEach(function (element ) {
       if (element.style.color === 'green') {
           element.style.color = 'black';
       } else {
           element.style.color = 'green';
        }
    });
});



