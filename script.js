let displayValue = ''

function appendToDisplay(nums){
    displayValue += nums
    updateDisplay()
    
}

function clearDisplay (){
    displayValue = ''
    updateDisplay()
}

function calculate(){
    try{
        const result = eval(displayValue)
        displayValue =  result.toString()
        updateDisplay()

    }catch(error){
        displayValue = 'Error'
        updateDisplay()
    }
}

function updateDisplay(){
    document.getElementById('display').value = displayValue
}