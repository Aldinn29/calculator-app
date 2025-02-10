function changeTheme(theme) {
    const themeLink = document.getElementById('theme-link');
    themeLink.href = theme;
}

document.getElementById('option1').addEventListener('change', function() {
    if (this.checked) {
        changeTheme('public/css/theme1.css');
    }
});

document.getElementById('option2').addEventListener('change', function() {
    if (this.checked) {
        changeTheme('public/css/theme2.css');
    }
});

document.getElementById('option3').addEventListener('change', function() {
    if (this.checked) {
        changeTheme('public/css/theme3.css');
    }
});

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));

let currentInput = "";
let calculation = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', function(e) {
    const value = e.target.innerText;

    if (value === 'RESET') {
      currentInput = "";
      calculation = "";
      display.value = "";
      resultDisplayed = false;
    } else if (value === 'DEL') {
      currentInput = currentInput.slice(0, -1);
      display.value = currentInput;
    } else if (value === '=') {
      try {
        currentInput = eval(calculation.replace('x', '*'));
        display.value = currentInput;
        calculation = currentInput;
        resultDisplayed = true;
      } catch (error) {
        display.value = "Error";
        currentInput = "";
        calculation = "";
        resultDisplayed = false;
      }
    } else if (value === '.') {
      if (!currentInput.includes('.')) {
        currentInput += value;
        display.value = currentInput;
      }
    } else if (resultDisplayed) {
      currentInput = value;
      calculation = value;
      display.value = currentInput;
      resultDisplayed = false;
    } else {
      currentInput += value;
      calculation = currentInput;
      display.value = currentInput;
    }
  });
});