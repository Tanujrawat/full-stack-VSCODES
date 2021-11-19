function validateForm()
{
    let x = document.forms["myForm"]["username"].value;
    if(x == "")
    {
        alert("UserName must be filled out");
        return false;
    }
}