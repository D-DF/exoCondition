// let res1 = (true && false) || (false && true) = false;
// let res2 = 10 > 11 && 11 > 10 = false;
// let res3 = (true || false) && true = true;
// let res4 = (!true && !false) || (!false && !false) = true;
// let res5 = 'Hello' === 'Hello' && 'World' == 'Word'= false;
// let res6 = (!(20 >= 20) && 7 === 7) || true = true;
// let res7 = '1' === 1 && '2' == 2 && '3' === 3 = false;
// let res8 = !res7 = true;
// let res9 = !res8 = false;
// let res10 =
//   (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9) = true


let res1 = (true && false) || (false && true)
console.log(res1)
let res2 = 10 > 11 && 11 > 10
console.log(res2)
let res3 = (true || false) && true
console.log(res3)
let res4 = (!true && !false) || (!false && !false)
console.log(res4)
let res5 = 'Hello' === 'Hello' && 'World' == 'Word'
console.log(res5)
let res6 = (!(20 >= 20) && 7 === 7) || true
console.log(res6)
let res7 = '1' === 1 && '2' == 2 && '3' === 3
console.log(res7)
let res8 = !res7
console.log(res8)
let res9 = !res8
console.log(res9)
let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9)
console.log(res10)


// EXERCICE 2

let bitCoin = 3000;

if (bitCoin > 1000 && bitCoin < 2999) {
  console.log("Acheter")
} else if (bitCoin < 999) {
  console.log ("Ne rien faire")
} else{
  console.log("Vendre")
} 


// EXERCICE 3 

// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse
// Vous devrez aussi prendre en compte la température pour décider si on doit mettre un manteau ou pas.

let isRainy = true
let isWindy = false
let temperature = 6;

if (isRainy || isWindy && temperature < 10) {
  console.log('Mettez votre manteau')
} else {
  console.log('Nous n avez pas besoin de manteau today')
}




