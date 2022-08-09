function notify(){
    var message="This is Blog page here you can write and post your Blog";
    alert(message);
}
document.getElementById("blogme").onclick=notify;

//log in form validation 
function valid(){
    if(document.myform.username.value==""){
        alert("Please provide the User name")
        document.myform.username.focus()
        return false
    }
    else if(document.myform.password.value==""){
        alert("Please provide password")
        document.myform.password.focus()
        return false
    }
    else{return true}
}