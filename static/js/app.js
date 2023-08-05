let inputEl = document.querySelector(".input")
let displayEl = document.querySelector("#display-el")
let initial, final, operand, result=0

inputEl.addEventListener("click", e => {
    if(e.target.matches('.number-el')){
        initial = e.target.value
        if(displayEl.textContent === "0"){            
            displayEl.textContent = initial
        }else{
            displayEl.textContent += initial
            //displayEl.textContent = displayEl.textContent + initial
        }
        
    }

    /*if(e.target.matches(".operand-el")){
        operand = e.target.value
        final = displayEl.textContent
        if(operand === "+"){
            result += final
        }else if (operand === "-"){
            result -= final
        }else if (operand === "*"){
            result *= final
        }else if (operand === "/"){
            result /= final
        }

        displayEl.textContent =result
    }*/
})