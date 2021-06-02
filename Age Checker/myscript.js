function validate()
{
    //1. Take input from age input field , store it in a variable
    var ageInput = document.getElementById("age").value;

    //2. if age is lesser than 18, display the 'errorAge' span, else hide it
    if(ageInput < 18){
        document.getElementById('errorAge').style.display="block";
    }
    else{
        document.getElementById('errorAge').style.display="none";
    }

}

