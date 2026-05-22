
function convert() {
    let amount = document.getElementById("amount").value;
    let rate = document.getElementById("currency").value;

    let result = amount * rate;

    document.getElementById("result").innerHTML =
        "Результат: " + result.toFixed(2) + " тг";
}




const Lovescat = true


if (Lovescat == true) {
    let questionCat = prompt("какая твоя любимая порода кошек?")

}
else {
    alert(" :((( ")
}


let steamLIST = ["кс", " бравл", "майн"]
console.log(steamLIST)
console.log(steamLIST[2])
steamLIST.push("дорс")
console.log(steamLIST)
steamLIST.unshift("РОБЛОКС")
console.log(steamLIST)
steamLIST.pop(
)
console.log(steamLIST)
steamLIST.shift()
console.log(steamLIST
)

let  indexCS= steamLIST.indexOf("кс")
console.log(indexCS)
