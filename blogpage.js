
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
    else{
        document.getElementById("welcome").innerHTML="Welcome"+document.getElementById("username").value;
        return true}
}
//blog page notification
function onpage(){
    window.alert("You are alredy in the Blog page");
}

function posting(){
    let blog_body=document.getElementById("blog_body");
    let sectag=document.createElement("section");
    let imgtag=document.createElement("img");
    let headingtag=document.createElement("h2");
    let paragraph=document.createElement("p")
   //adding inner content to the tags
    paragraph.innerHTML=document.getElementById("exampleFormControlTextarea4").value;
    headingtag.innerHTML=document.getElementById("heading").value;
    imgtag.src=document.getElementById("images").value;

    //adding class to the tags

    sectag.classList.add("section");
 
    // ading to document
    sectag.appendChild(imgtag);
    sectag.appendChild(headingtag);
    sectag.appendChild(paragraph);
    blog_body.appendChild(sectag);
    document.getElementById("add-blog").style.display="none";
}

function createblog(){
    document.getElementById("exampleFormControlTextarea4").value="";
    document.getElementById("heading").value="";
    document.getElementById("images").value="";

    document.getElementById("add-blog").style.display="block";
}
function cancelblog(){
    document.getElementById("add-blog").style.display="none";
}

