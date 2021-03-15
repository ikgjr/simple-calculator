// this select all the buttons
const buttons = document.querySelectorAll('button');
// this select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');

// this add eventListener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// this is the calculate function
function calculate(event) {
  // this makes for the current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    // this check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // this calculate and show the answer to display
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
    // this clear everything on display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
}