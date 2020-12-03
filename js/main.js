var inputName=document.getElementById("name");
var inputMail=document.getElementById("email");
var inputPhone=document.getElementById("phone");
var inputMessage=document.getElementById("message");
var sendBtn=document.getElementById("send");

var clientMessages;
var check=localStorage.getItem("allMessages");
if(check==null){
    clientMessages=[];
}
else{
    clientMessages=JSON.parse(localStorage.getItem("allMessages"));
   
}
sendBtn.onclick=function(){
saveMessage();
alert("your message has been recieved successfully!")
}

function saveMessage(){
    var clientMessage=
    {
        name:inputName.value,
        mail:inputMail.value,
        phone:inputPhone.value,
        message:inputMessage.value
    };
    clientMessages.push(clientMessage);
    localStorage.setItem("allMessage",JSON.stringify(clientMessages));
}