const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,5,1];
const noOfNotes=document.querySelector(".no-of-notes");

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    //  message.style.display="none";
      if(billAmount.value>0){
  if(cashGiven.value>=billAmount.value){
  //const cashToBeReturned=cashGiven.value-billAmount.value;
  //calculateChange(cashToBeReturned);
  }
  else{
  showMessage("the cash provided should be atleast equal to bill amount");
  }
      
  }
      else{
         showMessage("bill amount cant be negative");
      }
  });
  function showMessage(msg)
  {
      message.style.dispaly="block";
      message.innerText=msg;
  }
  function calculateChange(cashToBeReturned)
  {
  for (var i=0;i<=availableNotes.length;i++)
  {
   const numberOfNotes=Math.trunc(cashToBeReturned/availableNotes[i]);   
   cashToBeReturned %=availableNotes[i];
   noOfNotes[i].innerText=numberOfNotes;
  };
  }