// calculator program

const display = document.getElementById('display')


function appendToDisplay(input){
display.value += input
}

function clearDispaly(){
  display.value = ""
}

function claculate(){
    try{
        display.value = eval(display.value)
    }catch(error){
    display.value = "Error"
    }
}