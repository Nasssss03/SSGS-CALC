// calculator.js

module.exports = {
    // Addizione: Adds two numbers
    addizione: (a, b) => a + b,
  
    // Sottrazione: Subtracts two numbers
    sottrazione: (a, b) => a - b,
  
    // Moltiplicazione: Multiplies two numbers
    moltiplicazione: (a, b) => a * b,
  
    // Divisione: Divides two numbers
    divisione: (a, b) => {
      if (b === 0) {
        throw new Error("Impossibile dividere per zero.");
      }
      return a / b;
    }
  };