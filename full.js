 // first part

 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function () {
   const loginArea = document.getElementById("login-area");
   loginArea.style.display = "none";
   const secondPart = document.getElementById("transaction-area");
   secondPart.style.display = "block";
 });

 // second part

 const depositBtn = document.getElementById("addDeposit");
 depositBtn.addEventListener("click", function () {
   // const depositAmount = document.getElementById("depositAmount").value;
   // const depositNumber = parseFloat(depositAmount);

   const depositNumber = getInputNumber("depositAmount");

   updateSpanText("currentDeposit", depositNumber);
   updateSpanText("currentBalance", depositNumber);

   document.getElementById("depositAmount").value = "";
 });

 function updateSpanText(id, depositNumber) {
   const current = document.getElementById(id).innerHTML;
   const currentNumber = parseFloat(current);
   const totalAmount = currentNumber + depositNumber;
   document.getElementById(id).innerHTML = totalAmount;
 }
 ////   third part means withdraw part

 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click", function () {
   const withdrawNumber = getInputNumber("withdrawAmount");

   updateSpanText("currentWithdraw", withdrawNumber);
   updateSpanText("currentBalance", -1 * withdrawNumber);

   document.getElementById("withdrawAmount").value = "";
 });

 function getInputNumber(id) {
   const Amount = document.getElementById(id).value;
   const withdrawNumber = parseFloat(Amount);
   return withdrawNumber;
 }