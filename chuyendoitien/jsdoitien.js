function convert(){
    let amount = parseFloat(document.getElementById("amount").value)
    let from = parseFloat(document.getElementById("from").value)
    let to = parseFloat(document.getElementById("to").value)
    let quydoi
    if (from == 2 & to ==1){
        quydoi = (amount * 24000)
    } else if (from == 1 & to == 2){
        quydoi = (amount / 24000)
    } else quydoi = amount
    document.getElementById("result").innerHTML = "Result: " + quydoi
}