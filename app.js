const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#case-given");
const checkButton = document.querySelector("#check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes =[2000,500,200,100,20,10,1];
// console.log(billAmount.value);
// console.log(billAmount,cashGiven,checkButton,message);

checkButton.addEventListener("click",function validateBillAndCashAmount() {
    // console.log( billAmount.value)
    // console.log(caseGiven.value)
    hideMessage();
    if (billAmount.value > 0) { // 12
        if (cashGiven.value >= billAmount.value) { //2022>12 => true
            const amountToBeReturned = cashGiven.value - billAmount.value; //2022-12 = 2010
            calculateChange(amountToBeReturned);
        } else {
            showMessage("Do you wanna wash plates?");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});



function calculateChange(amountToBeReturned) { //2010
    //go over all the available notes
    for(let i = 0; i< availableNotes.length; i++){
        // no of notes need for the denomination
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]); // 2010/2000 = 1 ,|| 10/500 =0
        // amount left after calculating the number of notes needed
         amountToBeReturned = amountToBeReturned % availableNotes[i]; // 2010 % 2000 = 10 || 10%500 = 10
         // updating the no of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }


}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    
    console.log(message.innerText)
    message.style.display = "block";
    message.innerText = msg;
}

// billAmount. addEventListener("click", clickHandler);
//  validateBillAndCashAmount);