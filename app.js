
//////////////////////////////
//////////////////////////////
///// pratical challenge /////
//////////////////////////////
//////////////////////////////

function calucator(){
    var operation = document.getElementsByClassName('operation')
    for(var i=0; i<operation.length;i++){
        operation[i].addEventListener('click', function() {
            let input = document.getElementById('inputValue')
            let inputValue =input.value
            let opertor = this.dataset.operate_data
            let initialValue = 0
            console.log(JSON.parse())
            if (opertor == "add"){
                console.log("add")
            }
            else if (opertor == "subtract"){
                console.log("subtract")
            } 
            else if (opertor == "divide"){
                console.log("divide")
            }
            else if (opertor == "multiply"){
                console.log("multiply")
            }            
        })
    }
    
}