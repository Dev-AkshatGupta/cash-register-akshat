const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,5,1];
const noOfNotes=document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click",function validateBillAndCashAmount(){

    //console.log(billAmt);
//console.log(cashRecd);
var cashRecd =parseInt(cashGiven.value);
var billAmt =parseInt(billAmount.value);
console.log(Number(cashGiven.value));
    message.style.display="none";
  
      if(billAmt>0){
          
  if(cashRecd>=billAmt){
    console.log("hello");
    const cashToBeReturned=cashRecd-billAmt;
  calculateChange(cashToBeReturned);
  }
  else{
    console.log("hell");
  showMessage("the cash provided should be atleast equal to bill amount");
  }
      
  }
      else{
         showMessage("bill amount cant be negative");
      }
  });
  function showMessage(msg)
  {

    console.log("hello akshat");
        message.style.display="block";
      message.innerText=msg;
  }
  function calculateChange(cashToBeReturned)
  {
  for (var i=0;i<=availableNotes.length-1;i++)
  {
   const numberOfNotes=Math.trunc(cashToBeReturned/availableNotes[i]);   
   cashToBeReturned %=availableNotes[i];
   noOfNotes[i].innerText=numberOfNotes;
  };
  }