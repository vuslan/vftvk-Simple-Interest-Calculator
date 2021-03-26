function compute()
{
    // validate principal
    if (checkdata() == false) {
        return false;
    }
    
    // get the values for calculating interest rate
    p = document.getElementById("principal").value;
    var principal = Number(p);
    r = document.getElementById("interestrate").value;
    var rate = Number(r);
    y = document.getElementById("years").value;
    var years = Number(y);
    
    // calculate the interest rate
    var interest = principal * years * rate / 100;
    var actualy = 2021 + years;

    // update the html
    document.getElementById('result').innerHTML = "If you deposit <mark>"+p.toString()+"</mark>,<br/>at an interest rate of <mark>"+r.toString()+"%</mark>.<br/>You will receive an amount of <mark>"+interest.toString()+"</mark>,<br/>in the year <mark>"+actualy.toString()+"</mark>";
    document.getElementById('interestvalue').innerHTML = rate.toString()+"%";

    return true;
}

function checkdata(){
      //Create references to the input elements we wish to validate
      var principal = document.getElementById("principal");

      //Check if principal field is a positive value.
      if(principal.value == "" || principal.value == "0" || Number(principal.value) < 0){
            alert("Please enter a positive number");
            principal.focus();
            return false;
      }

      //If all is well return true.
      return true;
}

function interestvalue(rate){
    document.getElementById('interestvalue').innerHTML = rate.toString()+"%";

}