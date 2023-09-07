const display = document.getElementById("disp");

const input = document.getElementById("message");

const button = document.getElementById("submitBtn");


function displayMessage()
{
    event.preventDefault();
    display.textContent = input.value;
}



button.addEventListener('click',displayMessage);