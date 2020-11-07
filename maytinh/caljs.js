function add(){
    let numb1 = parseFloat(document.getElementById('num1').value)
    let numb2 = parseFloat(document.getElementById('num2').value)
    let Addition = numb1 + numb2
    document.getElementById('result').innerHTML = Addition
}
function sub(){
    let numb1 = parseFloat(document.getElementById('num1').value)
    let numb2 = parseFloat(document.getElementById('num2').value)
    let Subtraction = numb1 - numb2
    document.getElementById('result').innerHTML = Subtraction
}
function mul(){
    let numb1 = parseFloat(document.getElementById('num1').value)
    let numb2 = parseFloat(document.getElementById('num2').value)
    let Multiplication = numb1 * numb2
    document.getElementById('result').innerHTML = Multiplication
}
function div(){
    let numb1 = parseFloat(document.getElementById('num1').value)
    let numb2 = parseFloat(document.getElementById('num2').value)
    let Division = numb1 / numb2
    document.getElementById('result').innerHTML = Division
}

