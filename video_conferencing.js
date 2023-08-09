let localvideo=document.getElementById('video');
let startbutton=document.getElementById('start-call');
let endbutton=document.getElementById('end-call');
let localstream;
let remotestream;
let peerconnection;

startbutton.addEventListener('click',function(){
    startbutton.disabled=true;
    endbutton.disabled=false;

    navigator.mediaDevices.getUserMedia({video:true,auto:true})
    .then(function(stream){
        localstream=stream;
        localvideo.srcObject=localstream;
    })
    .catch(function(error){
        console.log('error accessing media devices:',error);
    });
});

endbutton.addEventListener('click',function(){
    startbutton.disabled =false;
    endbutton.disabled=true;

    if(localstream){
        localstream.getTracks().forEach(function(track){
            track.stop();
        });
    }
    localvideo.srcObject=null;
});

function chats(){
    document.getElementById('chat-box').style.display='block';
}
 
 const inputtext = document.getElementById("start");
 const messages = document.getElementById("message");
 function send(){
    if(inputtext.value==''){
        alert("You must write something!");
    }
    else{
        let h3=document.createElement("h3");
        h3.innerHTML=inputtext.value;
        messages.appendChild(h3);
    }
    inputtext.value="";
    saveData();

 }



