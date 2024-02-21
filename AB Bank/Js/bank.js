document.getElementById("Deposit-btn").addEventListener('click',function(){
    const newDeposit = document.getElementById('user-Deposit');
    const newDepositValue = newDeposit.value;
    const number1 = parseFloat(newDepositValue);
    const oldbalance = document.getElementById('deposit-balance');
    const oldbalancevalue =  oldbalance.innerText;
    const number2 = parseFloat(oldbalancevalue);
    const corentTolaldeposit = number1 + number2;
    oldbalance.innerText = corentTolaldeposit;


// add the deposit value on the main balance
const main =  document.getElementById('main-balance');
const mainElement = main.innerText;
const mainNumber = parseFloat(mainElement);
const mainTotal = mainNumber + corentTolaldeposit;
main.innerText =mainTotal;


newDeposit.value="";
})


// Withdraw

