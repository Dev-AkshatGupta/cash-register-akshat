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
if(!cashRecd ||!billAmt){
showMessage("Please fill all the inputs");
}
else{
  
    message.style.display="none";
  
      if(cashRecd<0|| billAmt<0){
          
        showMessage("bill amount cant be negative , neither the cash recieved can be negative");
  }
      else{
        if(cashRecd>=billAmt){
    
          const cashToBeReturned=cashRecd-billAmt;
        calculateChange(cashToBeReturned);
        }
        else{
          
        showMessage("the cash provided should be atleast equal to bill amount");
        }
               
      }
  };
  })


    
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