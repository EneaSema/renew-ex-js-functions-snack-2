// 🏆 Snack 1

// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
console.log("Snack 1");
const a = 1;
const b = 2;
function somma(a, b) {
  return a + b;
}
console.log(
  `Il valore della funzione somma tra ${a} + ${b} è uguale a:`,
  somma(a, b)
);
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

const sommaNumeriFunzioneAnonima = function (a, b) {
  return a + b;
};

console.log(
  `Il valore della variabile sommaNumeriFunzioneAnonima che ha la funzione anonima che fa la somma tra ${a} + ${b} è uguale a:`,
  sommaNumeriFunzioneAnonima(a, b)
);
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const sommaNumeriArrowFunction = (a, b) => a + b;

console.log(
  `Il valore della variabile sommaNumeriArrowFunction scritta in ARROW FUNCTION che fa la somma tra ${a} + ${b} è uguale a:`,
  sommaNumeriArrowFunction(a, b)
);
