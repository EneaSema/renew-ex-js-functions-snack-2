// 🎯 Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
// Esempio di utilizzo:
// sequenzaOperazioni([
//   () => console.log("Operazione 1"),
//   () => console.log("Operazione 2"),
//   () => console.log("Operazione 3")
// ], 2000);
// Output atteso:
// Operazione 1
// Operazione 2
// Operazione 3
// Operazione 1
// Operazione 2
// Operazione 3

// console.log("Snack 9 Bonus");

// function somma(a, b) {
//   return a + b;
// }
// function sottrazione(a, b) {
//   return a - b;
// }
// function moltiplicazione(a, b) {
//   return a * b;
// }

// const operazioni = [somma(a, b), sottrazione(a, b), moltiplicazione(a, b)];
// const intervalloTempo = 2000;

// function sequenzaOperazioni(operazioni, intervalloTempo) {
//   operazioni.forEach((operazione, index) => {
//     setTimeout(() => {
//       operazione();
//     }, intervalloTempo * index);
//   });
// }

// sequenzaOperazioni(
//   [
//     () => console.log("Operazione 1:", somma(a, b)),
//     () => console.log("Operazione 2:", sottrazione(a, b)),
//     () => console.log("Operazione 3:", moltiplicazione(a, b)),
//   ],
//   2000
// );
