
      // second part

      const depositBtn = document.getElementById("addDeposit"); // যেই বাটনে ক্লিক করে  add  করতে চাই, তাকে ধরা । 
      depositBtn.addEventListener("click", function () {
        const depositAmount = document.getElementById("depositAmount").value; // যেই যায়গায়  ইনপুট  করতে চাই  তাকে  ধরা এবং তার মানকে ধরা। 
        const depositNumber = parseFloat(depositAmount);  // তাকে সংখ্যায় রুপান্তর করা। 

        const currentDeposit =
          document.getElementById("currentDeposit").innerHTML; // যেই যায়গায়  যোগ করতে চাই  তাকে  ধরা এবং তার  ভিতরের টেক্সটকে ধরা।  
        const currentDepositNumber = parseFloat(currentDeposit); // তাকে সংখ্যায় রুপান্তর করা। 
        const totalDeposit = depositNumber + currentDepositNumber; // রুপান্তর করা। দুটি মানকে যোগ করে নতুন একটা ভার এ রাখা 

        document.getElementById("currentDeposit").innerHTML = totalDeposit; //  যোগফলকে  যেই যায়গায় রাখবো তাকে কল করে তার মধ্যে রাখা 

        const currentBalance =
          document.getElementById("currentBalance").innerHTML; // একইভাবে টোটাল ব্যালেন্স এর যায়গায় ইনপুটকৃত মানটি যোগ করতে ব্যালেন্সকে কল করা এবং তার ভিতরের লেখা কে ধরা। 
        const currentBalanceNumber = parseFloat(currentBalance); // তাকে সংখ্যায় রুপান্তর করা। 
        const totalBalanceNumber = currentBalanceNumber + depositNumber; // ইনপুটকৃত মানটিকে টোটাল ব্যালেন্স এর সাথে যোগ করা। 
        document.getElementById("currentBalance").innerHTML =
          totalBalanceNumber;     // যোগফলকে  যেই যায়গায় রাখবো তাকে কল করে তার মধ্যে রাখা 

        document.getElementById("depositAmount").value = ""; // ইনপুট করা বক্সকে খালি বা আবার আগের মতো রাখতে 
      });



      // second part

// এখানে মুলত দুইটা অংশকে এক করে তাদের মধ্যে ফাংশান দিয়ে কাজ করা হয়েছে।  যেহেতু দুইটা অংশের সাথেই  depositNumber কে যোগ করা হয়েছে এবং দুইটা অংশতেই  কিছু কমন জিনিস আছে তাই, যেমন  একটা span  কে ধরা এবং তাকে parseFloat করা  তার  depositNumber এর নাম্বারের সাথে যোগ করে আউটপুট পাওয়া।  কিন্তু যেহেতু তাদের id নাম্বার আলাদা বা তারা আলাদা আলাদা যায়গায় যোগ হবে তাই তাদেরকে তাদের  id দরে আলাদা আলাদা কল করে  depositNumber এর সাথে পাছ করতে হবে। 

      const depositBtn = document.getElementById("addDeposit");
      depositBtn.addEventListener("click", function () {
        const depositAmount = document.getElementById("depositAmount").value;
        const depositNumber = parseFloat(depositAmount);

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