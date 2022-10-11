// Set Up Global Array
let PRIMES = [false, false, true];

// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${goldbachsOtherConjecture()}. <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Function to return true if n is prime, false otherwise
function isPrime(n) {
    if (PRIMES[n] !== undefined) return PRIMES[n];
    if (n%2==0) return false;
    const upperBound = Math.sqrt(n);
    for (let i=3;i<=upperBound;i+=2) {
        if (n%i===0) return PRIMES[n] = false;
    }
    return PRIMES[n] = true;
}