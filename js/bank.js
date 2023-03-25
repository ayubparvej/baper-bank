// 1st step: get the button
document.getElementById('depositbtn').addEventListener('click', function () {
    //2nd step: get the input field
    const newDepositInput = document.getElementById('deposit-input');
    const newDepositInputValue = newDepositInput.value;
    //3rd Step: convert the value into number
    const newDepositAmountInput = parseFloat(newDepositInputValue);

    //4th Step: get the deposite inner text
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountCurrent = depositAmount.innerText;

    const dopsitAmountNumber = parseFloat(depositAmountCurrent);

    depositAmount.innerText = dopsitAmountNumber + newDepositAmountInput;

    //step 5: Get the balance innertext

    const totalBalance = document.getElementById('balance-amount');
    const currentBalance = totalBalance.innerText;

    const currentBalanceNumber = parseFloat(currentBalance);

    totalBalance.innerText = currentBalanceNumber + newDepositAmountInput;







    //Last steps: clear the input field after submit
    newDepositInput.value = '';




})

//Withdrawal work

document.getElementById('withdrawbtn').addEventListener('click', function () {
    //2nd step: get the input field

    const newWithdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInputValue = newWithdrawInput.value;
    //3rd Step: convert the value into number
    const newWithdrawAmountInput = parseFloat(newWithdrawInputValue);


    //step 5: Get the balance innertext

    const totalBalance = document.getElementById('balance-amount');
    const currentBalance = totalBalance.innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    // Last steps: clear the input field after submit
    newWithdrawInput.value = '';

    //Showing alert in case the withdrawal amount is more than current balance
    if (newWithdrawAmountInput > currentBalanceNumber) {
        alert('Insufficient fund');
        return;
    }

    //4th Step: get the deposite inner text
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountCurrent = withdrawAmount.innerText;
    const withdrawAmountNumber = parseFloat(withdrawAmountCurrent);




    withdrawAmount.innerText = withdrawAmountNumber + newWithdrawAmountInput;

    totalBalance.innerText = currentBalanceNumber - newWithdrawAmountInput;













})