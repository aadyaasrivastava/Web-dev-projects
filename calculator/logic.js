// let screen= document.getElementById('screen');//yahan se hamare pass screen aagayi 
// buttons = document.querySelectorAll('button');//yahan se hamre pass sare buttons aagaye
// let screenValue = '';
// for(item of buttons){//for loops se hum hr ek button le rahe hai
//     item.addeventlistener('click', (e) => {
//         buttonText = e.target.innerText;
//         console.log('Button text is',buttonText);
//         if(buttonText=='X'){
//             buttonText = '*'
//             screenValue = buttonText;
//            }
//            else if(buttonText = "="){

//            }
//     })
// }

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

