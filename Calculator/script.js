//Calculator Program

const display = document.getElementById('display');

function appendTodisplay(input){
    display.value += input;

}
function clearDisplay(){
    display.value = '';
}
function deleteOnce(){
   if(display.value === 'Errorஉ','undefined' ){
    clearDisplay();
    
   }else{
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