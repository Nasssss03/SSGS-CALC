// app.js

const readline = require('readline');
const calculator = require('./calculator');

// Configurazione dell'interfaccia di input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funzione per chiedere all'utente un input
function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => resolve(answer));
  });
}

// Funzione principale
async function main() {
  console.log("Benvenuto nella Calcolatrice!");
  console.log("Operazioni disponibili:");
  console.log("1. Addizione");
  console.log("2. Sottrazione");
  console.log("3. Moltiplicazione");
  console.log("4. Divisione");

  // Chiediamo all'utente di selezionare un'operazione
  const choice = await askQuestion("Seleziona un'operazione (1-4): ");
  if (!['1', '2', '3', '4'].includes(choice)) {
    console.error("Errore: Scelta non valida.");
    rl.close();
    return;
  }

  // Richiediamo i parametri all'utente
  const num1 = parseFloat(await askQuestion("Inserisci il primo numero: "));
  const num2 = parseFloat(await askQuestion("Inserisci il secondo numero: "));

  if (isNaN(num1) || isNaN(num2)) {
    console.error("Errore: Parametri non validi.");
    rl.close();
    return;
  }

  let result;
  try {
    switch (choice) {
      case '1':
        result = calculator.addizione(num1, num2);
        break;
      case '2':
        result = calculator.sottrazione(num1, num2);
        break;
      case '3':
        result = calculator.moltiplicazione(num1, num2);
        break;
      case '4':
        result = calculator.divisione(num1, num2);
        break;
    }
    console.log(`Risultato: ${result}`);
  } catch (error) {
    console.error(`Errore: ${error.message}`);
  } finally {
    console.log("Grazie per aver usato la Calcolatrice!");
    rl.close();
  }
}

main();