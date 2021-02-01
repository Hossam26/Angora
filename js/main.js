var inputName=document.getElementById("name");
var inputMail=document.getElementById("email");
var inputPhone=document.getElementById("phone");
var inputMessage=document.getElementById("message");
var sendBtn=document.getElementById("send");
var nav=document.getElementsByClassName("nav-link")
$(nav[0]).css("color","#f25454")
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
let offSet=[$("#brand").offset().top,$("#design").offset().top,$("#graphic").offset().top,$("#dev").offset().top];
var sectionsTop=[$("#home").offset().top,$("#About").offset().top,$("#team").offset().top,$("#Services").offset().top,$("#contact").offset().top]

document.addEventListener("scroll",function(){
    if ($(window).scrollTop() > offSet[0] * 0.3) {
        $("#brand").animate({ "width": "80%" }, 2)
    }
    if ($(window).scrollTop() > offSet[1] * 0.35) {
        $("#design").animate({ "width": "60%" }, 2)
    }
    if ($(window).scrollTop() > offSet[2] * 0.40) {
        $("#graphic").animate({ "width": "40%" }, 2)
    }
    if ($(window).scrollTop() > offSet[3] * 0.45) {
        $("#dev").animate({ "width": "80%" }, 2)
    }
    for (var i=0;i<nav.length;i++){
        if(window.outerWidth<=600&& $(window).scrollTop()>sectionsTop[i]-sectionsTop[i]*0.1){
            $(".nav-link").css("color","rgba(0,0,0,.9)")
            $(nav[i]).css("color","#f25454")
          }
       else if($(window).scrollTop()>sectionsTop[i]-sectionsTop[i]*0.2){
            $(".nav-link").css("color","rgba(0,0,0,.9)")
            $(nav[i]).css("color","#f25454")
                
            }
    }
    
})

