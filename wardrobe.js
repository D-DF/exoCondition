// Ecrivez un programme qui affichera un message contenant tous les vêtements et accessoires que vous devrez porter en fonction des données méteo. Ci dessus le début d'un template:
// Soyez imaginatif et cohérent. Si l'on veut bien faire, cet exercice peut être assez difficile, par exemple un t-shirt doit être toujours porté, même sous un pull ou un manteau.


let pluie       = true;
let soleil      = false;
let temperature = 3;
let vetement    = '';

if  (pluie && temperature < 5 && soleil) {
  vetement += "parapluie, t shirt, pantalon, calecon, chaussette, botte, pull, manteau, gants";
} else if (!pluie && temperature < 10 && soleil) {
  vetement += "t shirt, pantalon, calecon, chaussette, botte, pull, manteau, gants";
} else if (temperature < 11 && temperature <= 20 && !pluie || !soleil) {
  vetement += "Calecon, chaussette, basket, pantalon, pull, manteau, lunette de soleil";
} else {
  vetement += "Calecon, claquette, chaussette, t shirt, lunette de soleil";
}
  
console.log(`Je vous recommande de porter : ${vetement}`);
