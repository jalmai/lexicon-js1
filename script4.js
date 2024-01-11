// // --- ENKEL DATAREGISTRERING ---

// let name = prompt("Vad heter du?");
// console.log("Välkommen " + name + "!Jalma");
// let birthyear = prompt("vilket år är du född?");
// let currentDate = new Date();
// console.log(
//   "Iår kommer du att fylla eller har redan fyllt " +
//     (currentDate.getFullYear() - birthyear)
// );
let num1 = prompt("Ange första numret");
let num2 = prompt("Ange andra numret");

console.log(parseInt(num1) + parseInt(num2));
console.log(parseInt(num1) - parseInt(num2));
console.log(parseInt(num1) * parseInt(num2));
console.log(parseInt(num1) / parseInt(num2));

alert("Beräkningarna är klara. Se konsoll för resultat");
