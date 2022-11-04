 // function that solves for the totat interest taking the different values
 function compute()
 {
     var principal = document.getElementById("principal").value;
     var rate = document.getElementById("rate").value;
     var years = document.getElementById("years").value;
     var interest = principal * years * rate /100;
     var year = new Date().getFullYear()+parseInt(years);
     //p = document.getElementById("principal").value;
     document.getElementById("result").innerHTML= `If you deposit <mark>${principal}</mark>,<br>
     at an interest rate of <mark>${rate}% </mark>.<br>
     You will receive an amount of <mark>${interest}</mark>,<br>
     in the year <mark>${year}</mark>`
     
 }
 // function to display the percentage on the range input
 function updateRate() 
 {
     var rateval = document.getElementById("rate").value;
     document.getElementById("rate_val").innerText=rateval;
 }
 //function that checks principal value and makes sure it more than 0 
 function checkPrincipal(){
     var principal = document.getElementById("principal").value;
     if(principal<=0){
         alert('Enter a positive number')
         principal.focus()
     }
 }