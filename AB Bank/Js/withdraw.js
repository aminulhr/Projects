document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const withdrawinput = document.getElementById('user-Withdraw');
    const withinputvaluestring = withdrawinput.value;
    const withdrawinputvalue = parseFloat(withinputvaluestring);
    // add value in the withdraw balamce

const oldWithdrawBalance= document.getElementById('withdraw-balance');
const withdrawbalanceString =  oldWithdrawBalance.innerText;
const witderawbalance = parseFloat(withdrawbalanceString);
const sum1 = witderawbalance  + withdrawinputvalue;
oldWithdrawBalance.innerText = sum1;

const mainBalanceElement = document.getElementById('main-balance');
const mainbalanceString = mainBalanceElement.innerText;
const mainBalance = parseFloat(mainbalanceString);

const sum2 = mainBalance - withdrawinputvalue;
mainBalanceElement.innerText =sum2;

   
                                                
    withdrawinput.value = "";
})