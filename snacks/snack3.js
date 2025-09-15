// 🏆 Snack 3
// Crea una funzione eseguiOperazione
// Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

console.log("Snack 3");

// const somma = (a, b) => a + b; non serve in quanto già dichiarata nello snack1
const moltiplica = (a, b) => a * b;

function esefuiOperazione(a, b, operazione) {
  return operazione(a, b);
}

console.log(
  `Risultato della funzione esguiOperazione, in caso di somma tra ${a} +${b}:`,
  esefuiOperazione(a, b, somma)
);

console.log(
  `Risultato della funzione esguiOperazione, in caso di moltiplicazione tra ${a} +${b}:`,
  esefuiOperazione(a, b, moltiplica)
);

// Esempio d’uso:
// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;

// const eseguiOperazione = (a, b, operazione) => operazione(a, b);

// console.log(eseguiOperazione(3, 4, somma)); // 7
// console.log(eseguiOperazione(3, 4, moltiplica)); // 12
// const somma = (a, b) => a + b;
// const moltiplica = (a, b) => a * b;
// ​
// const eseguiOperazione = (a, b, operazione) => operazione(a, b);
// ​
// console.log(eseguiOperazione(3, 4, somma)); // 7
// console.log(eseguiOperazione(3, 4, moltiplica)); // 12
