
      const withdrawBtn = document.getElementById("addWithdraw");
      withdrawBtn.addEventListener("click", function () {
        const withdrawAmount = document.getElementById("withdrawAmount").value;
        const withdrawAmountNumber = parseFloat(withdrawAmount);

        const currentWithdraw =
          document.getElementById("currentWithdraw").innerHTML;
        const currentWithdrawNumber = parseFloat(currentWithdraw);

        const totalAddedWithdraw = withdrawAmountNumber + currentWithdrawNumber;
        document.getElementById("currentWithdraw").innerHTML =
          totalAddedWithdraw;

        const currentBalance =
          document.getElementById("currentBalance").innerHTML;
        const currentWithdrawBalance = parseFloat(currentBalance);
        const totalWithdrawAmount =
          currentWithdrawBalance - withdrawAmountNumber;

        document.getElementById("currentBalance").innerHTML =
          totalWithdrawAmount;

        document.getElementById("withdrawAmount").value = "";
      });