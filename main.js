// Write your JavaScript here
let Dollars; let Quarters; let Dimes; let Nickels; let Pennies;
document.getElementById("calculate-change").addEventListener("click", function(){
    const dueInput = document.getElementById("amount-due");
    const due = parseFloat(dueInput.value);
    const receivedInput = document.getElementById("amount-received");
    const received = parseFloat(receivedInput.value);
    const result = calculateChange(due, received);
    document.getElementById("dollars-output").innerText=Dollars;
    document.getElementById("quarters-output").innerText=Quarters;
    document.getElementById("dimes-output").innerText=Dimes;
    document.getElementById("nickels-output").innerText=Nickels;
    document.getElementById("pennies-output").innerText=Pennies;
})

document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementById("dollars-output").innerText= "";
    document.getElementById("quarters-output").innerText= "";
    document.getElementById("dimes-output").innerText= "";
    document.getElementById("nickels-output").innerText= "";
    document.getElementById("pennies-output").innerText= "";
    document.getElementById("amount-due").value="";
    document.getElementById("amount-received").value="";
})

function calculateChange(totalCost, amountPaid) {
    let change = (amountPaid - totalCost).toFixed(2);

    if (change < 0) {
        return "Not enough money given.";
    }

    let cents = Math.round(change * 100);
    
    let dollars = Math.floor(cents / 100);
    Dollars=dollars;
    cents %= 100;

    let quarters = Math.floor(cents / 25);
    Quarters=quarters;
    cents %= 25;

    let dimes = Math.floor(cents / 10);
    Dimes=dimes;
    cents %= 10;

    let nickels = Math.floor(cents / 5);
    Nickels=nickels;
    cents %= 5;

    let pennies = cents; Pennies=cents;

    return `Change due: 
    Dollars: ${dollars}
    Quarters: ${quarters}
    Dimes: ${dimes}
    Nickels: ${nickels}
    Pennies: ${pennies}`;
}

// Example usage:
console.log(calculateChange(4.75, 10));