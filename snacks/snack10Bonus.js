// 🎯 Snack 10 (Bonus)
// Creare un throttler per limitare l’esecuzione di una funzione
// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
// Esempio di utilizzo:
//  = creaThrottler(() => console.log("Eseguito!"), 2000);

// const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);
// ​
// throttledLog(); // ✅ "Eseguito!"
// throttledLog(); // ❌ Ignorato (chiamato troppo presto)
// setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)

console.log("Snack 10 Bonus");

const stampa = () => console.log("Eseguito");
const tempoLimite = 2000;

function creaThrottler(stampa, tempoLimite) {
  let ultimaEsecuzione = 0;
  return function () {
    let ora = Date.now();
    if (ora - ultimaEsecuzione >= tempoLimite) {
      ultimaEsecuzione = ora;
      stampa();
    } else console.log("Non posso eseguire ancora");
  };
}

const throttledLog = creaThrottler(stampa, tempoLimite);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
