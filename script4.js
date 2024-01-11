// --- ENKEL DATAREGISTRERING ---

let name = prompt("Vad heter du?");
console.log("Välkommen " + name + "!Jalma");
let birthyear = prompt("vilket år är du född?");
let currentDate = new Date();
console.log(
  "Iår kommer du att fylla eller har redan fyllt " +
    (currentDate.getFullYear() - birthyear)
);
