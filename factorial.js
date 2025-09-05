//Console Input
const readline=require("readline");

const r1 = readline.createInterface({
    input:process.stdin,
    output: process.stdout
})

console.log("--------------------------------");
console.log("Factorial Applicatiuon");
console.log("1. Say Hello");
console.log("2. Factorial");
console.log("3. Exit Application");
console.log("--------------------------------");

r1.question("Enter your choice (1-3): ", choice => {
if (choice === "1"){

        console.log("Hello");
    } else if (choice === "2"){
        console.log("Factorial");
       
        r1.question("Enter a number for factorial: ", numStr => {
            let num = parseInt(numStr);
             if (isNaN(num) || num < 0){
                console.log("Please enter a valid non-negative integer.");
            } else {
                let factorial = 1;

                for (let i = 1; i <= num; i++){
                    factorial *= i;
                }
                console.log("The factorial of num is factorial");
            }
        })
    }
})        
    
