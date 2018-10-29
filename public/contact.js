function validateForm() {

    var x = document.forms["Form1"]["FirstName"].value;
    var y = document.forms["Form1"]["Lastname"].value;
    var z = document.forms["Form1"]["location"].value;
    var u = document.forms["Form1"]["Email"].value;
    if (x == "" && isNaN(x))
    {
        alert("First Name must be filled out");
        return false;
    }
    else if (y == "" && isNAN(y))
    {
        alert("Last Name must be filled out");
        return false;
    }
    else if (z == "" && isNAN())
    {
        alert("Location must be filled out");
        return false;
    }
    else if(z == "" && isNAN())
    {
        alert("Email must be filled out");
        return false;
    } 
	