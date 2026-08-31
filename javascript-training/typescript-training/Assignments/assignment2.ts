function checkloan(customername : string ,creditScore: number, income :number,isEmployed :boolean,
                   debtToIncomeRatio : number) : void {

                    console.log("Loan result for : " + customername);

//1.Credit Score: If the credit score is above 750, the loan is automatically approved.
// If the credit score is between 650 and 750, additional checks are performed.
// If the credit score is below 650, the loan is denied.

                   if(creditScore > 750) {
                    console.log("Loan Approved: Credit score is above 750");
                   } else if(creditScore >= 650) {

   //2. check income                 
                   if(income >= 50000) {
                     if(isEmployed) {
                        if(debtToIncomeRatio <40.0) {
                            console.log("Loan Approved : DTI ratio is less than 40%");
                        }else {
                            console.log("Loan Denied: DTI ratio is greater than 40%");
                        }
                     }else {
                        console.log("Loan Denied:If the customer is unemployed");
                     }
                   }else{
                    //if income is less than $50,000 ,Loan is denied
                    console.log("Loan Denied: Income is less than required");
                   }

                   }else {
                    // if credit score is below 650, loan denied
                    console.log("Loan Denied: Credit score is below 650");
                   }
                    
                   }
       checkloan("John Doe" , 720 ,55000.0 , true,35.0);            