//Calculator Program

const display = document.getElementById('display');

const errorMessages = ['Error', 'undefined', 'Infinity', 'NaN', 'Errorஉ'];

function appendTodisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value = '';
}
function deleteOnce(){
   if(display.value == 'Errorஉ' ){
    clearDisplay();
    
   }
   else if(display.value == 'undefined' ){
    clearDisplay();
    
   }
   else if(display.value == 'Infinity' ){
    clearDisplay();
    
   }
   else if(display.value == 'NaN' ){
    clearDisplay();
    
   }
   else{
    display.value = display.value.slice(0, -1);
   }
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Errorஉ";
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Allow numbers, operators, dot, and Enter
    if (/[\d+\-*/.]/.test(key)) {
      display.value += key;
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
        deleteOnce();
    } else if (key === 'Escape') {
      display.value = '';
    }
  });
// const display = document.getElementById('display');

//   const errorMessages = ['Error', 'undefined', 'Infinity', 'NaN', 'Errorஉ'];

//   function appendToDisplay(input) {
//     if (errorMessages.includes(display.value)) {
//       display.value = '';
//     }
//     display.value += input;
//   }

//   function clearDisplay() {
//     display.value = '';
//   }

//   function deleteOnce() {
//     if (errorMessages.includes(display.value)) {
//       clearDisplay();
//     } else {
//       display.value = display.value.slice(0, -1);
//     }
//   }

//   function calculate() {
//     try {
//       const result = eval(display.value);
//       display.value = (result === Infinity || isNaN(result)) ? 'Error' : result;
//     } catch {
//       display.value = 'Error';
//     }
//   }

//   document.addEventListener('keydown', (event) => {
//     const key = event.key;

//     if (/[\d+\-*/.]/.test(key)) {
//       appendToDisplay(key);
//     } else if (key === 'Enter') {
//       calculate();
//     } else if (key === 'Backspace') {
//       deleteOnce();
//     } else if (key === 'Escape') {
//       clearDisplay();
//     }
//   });