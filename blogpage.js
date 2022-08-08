function notify(){
    var message="This is Blog page here you can write and post your Blog";
    alert(message);
}
document.getElementById("blogme").onclick=notify;

//log in validation fuction
function loginvalid(){
    if(document.myform.username.value==""){
        alert("please provide User Name")
        document.myform.username.focus()
        return false
    }
    else if(document.myform.password.value==""){
        alert("please enter the password")
        document.myform.password.focus()
        return false

    }
    else{return true}
}