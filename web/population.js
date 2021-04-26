
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();




// function grid(){
//     ctx.beginPath();
//     ctx.moveTo()
// }


function isInputNumber(evt){
    var ch=String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}



///check place
function checkPlace(){
    var place=document.getElementsByName("place");
    if (place[0].checked){
        checkyearR();
    }

    if (place[1].checked){
        checkyearC();
    }
}


function checkyearR(){
    // var year = Number(birthyear);
    var birthyear= parseInt(document.getElementById('birthyear').value);
   
    console.log(birthyear);
    if( birthyear<1970) {
        showup(); 
        document.getElementById("item2").innerHTML=birthyear;
        }
        // else{
        // if(year>=1970, year<1980){
        //     circle();
        // }
    // }
} 

function showup(){
    var x=document.getElementById('s1990footsteps');
    if (x.style.display == "none"){
        x.style.display ="block";    
    }else{x.style.display = "block";
}
}




var eyeball=document.getElementsByClassName('eyeball');
document.onmousemove=function(e){
    var x = e.clientX * 100/ window.innerWidth+"%";
    var y = e.clientY * 100/ window.innerHeight+"%";
    
    for (var i=0; i<2; i++){
        eyeball[i].style.left=x;
        eyeball[i].style.top=y;
        eyeball[i].style.transform="translate(-"+x+",-"+y+")";
    }
   
}



dragElement(document.getElementById("s1990footsteps"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}






// function circle() {
//     var canvas = document.getElementById('circle');
//     if (canvas.getContext)
//     {
//     var ctx = canvas.getContext('2d'); 
//     var X = canvas.width / 2;
//     var Y = canvas.height / 2;
//     var R = 45;
//     ctx.beginPath();
//     ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
//     ctx.lineWidth = 3;
//     ctx.strokeStyle = '#FF0000';
//     ctx.stroke();
//     }
// }


function randn(r){
    var result=Math.random()*r - r/2;
    return result
}

function randi(r){
    var result=Math.floor(Math.random()*r);
    return result
}

function rand(r){
var result=Math.random()*r;
return result    
}




// $( window ).resize(function() {
//  		$("#myCanvas").width($( window ).width()-10)
// });

// $( window ).resize(function() {
//     $("#myCanvas").height($( window ).height()-10)
// });

window.onload=function(){
    setUpCanvas();
    window.addEventListener('resize', setUpCanvas, false);

}

function setUpCanvas(){
    canvas= document.querySelector("#myCanvas");
    ctx= canvas. getContext("2d")
    canvas.style.border= "5px dotted orange";
    var myWidth=window.innerWidth -20;
    var myHeight=window.innerHeight -30;
    ctx.canvas.width= myWidth;
    ctx.canvas.height= myHeight;
    
    
}
