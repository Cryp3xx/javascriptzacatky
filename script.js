function myFunction() {
    var variable1; //Nebudeme pouzivat
    let variable2; //budeme pouzivat
    const variable3 = 3; // nemohu pote zmenit
    variable4 = "ahoj" // string
    variable5 = 5 // number/int/integer
    variable6 = true // boolean
    
    const userFirstName = document.getElementById("firstName").value
    const userLastName = document.getElementById("lastName").value

    
        const userFullName = userFirstName + " " + userLastName
        document.getElementById("fullName").value = userFullName
}
 
function addition() {
const inputFirstNumber = parseInt(document.getElementById("firstNumber").value)
const inputSecondNumber = parseInt(document.getElementById("secondNumber").value)

const additionResult = inputFirstNumber + inputSecondNumber

document.getElementById("result").value = additionResult
}

function substraction() {
    const inputFirstNumber = (document.getElementById("firstNumber").value)
    const inputSecondNumber = (document.getElementById("secondNumber").value)

    const substractionResult = inputFirstNumber - inputSecondNumber

    document.getElementById("result").value = substractionResult
}

function division() {
    const inputFirstNumber = (document.getElementById("firstNumber").value)
    const inputSecondNumber = (document.getElementById("secondNumber").value)

    const divisionResult = inputFirstNumber : inputSecondNumber

    document.getElementById("result").value = divisionResult
}

function multiplication() {
    const inputFirstNumber = (document.getElementById("firstNumber").value)
    const inputSecondNumber = (document.getElementById("secondNumber").value)

    const multiplicationResult = inputFirstNumber . inputSecondNumber

    document.getElementById("result").value = multiplicationResult
}
