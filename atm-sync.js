// atm-sync.js
function withdrawMoney() {
  console.log("Person A: Card inserted");
  console.log("Person A: Checking balance...");

  // Blocking operation (simulating bank server)
  const start = Date.now();
  while (Date.now() - start < 3000) {
    // Blocking for 3 seconds
  }

  console.log("Person A: Cash withdrawn");
}

function checkBalance() {
  console.log("Person B: Card inserted");
  console.log("Person B: Balance shown");
}

console.log("ATM Started\n");

withdrawMoney();   // Person A uses ATM
checkBalance();    // Person B waits until A finishes

console.log("\nATM Ready for next users");
