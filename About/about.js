
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();



new fullpage('#fullpageabout',{
    autoScrolling: true,
    navigation:true,
    navigationPosition: 'right',
    css3: true,
    loopBottom: false,
    loopTop: false,
    normalScrollElements: '#wrap',
    scrollOverflow: true,
    // parallax: true,
    // parallaxOffset:65,
    // scrollingSpeed:900,
   
    // onLeave: function(section,origin, destination, direction){
	// 	//it won't scroll if the destination is the 3rd section
	// 	if(destination.index == 6){
	// 		return false;
	// 	}
    // },
    // afterLoad: function( section, origin, destination, direction){
    //     var loadedSlide = this;
    //     console.log(origin.index)
    //     if(origin.index==0){
    //         sectionone();  }  
    //     if(origin.index==1){
    //         sectiontwo();       }  
    //     if(origin.index==2){
    //          sectionthree();       }  
    //     if(origin.index==3){
    //         sectionfour();       }  
    //     if(origin.index==4){
    //         sectionfive();       }  
            // if(origin.index==5){
            //     fullpage_api.setAllowScrolling(false, 'down');      }

            
    // },
    onLeave:(origin,destination,direction)=> {
        const section=destination.item;
        const title =section.querySelectorAll('.text');
        const tl= new TimelineMax({delay:0.5});
        tl.fromTo(title,0.5,{y:"70",opacity:0}, {y:0,opacity:1});

    }

}) ;



function openmenu(){
    document.getElementById("menu-v").style.width="115vw";
    document.getElementById('menuu').style.display="none";
    document.getElementById('close').style.display="block";
    document.getElementById('theonlychild-v').style.display="block";
    document.getElementById('realityGenerator-v').style.display="block";
    document.getElementById('menudata-v').style.display="block";
    document.getElementById('menuabout-v').style.display="block";
    document.getElementById('instagram').style.display="block";
    document.getElementById('portfolio').style.display="block";
    document.getElementById('email').style.display="block";
    
}

function closemenu(){
    document.getElementById("menu-v").style.width="0";
    // document.getElementById("menu-v").style.display="none";
    document.getElementById('menuu').style.display="block";
    document.getElementById('close').style.display="none";

    document.getElementById('theonlychild-v').style.display="none";
    document.getElementById('realityGenerator-v').style.display="none";
    document.getElementById('menudata-v').style.display="none";
    document.getElementById('menuabout-v').style.display="none";
   
}






// dragElement(document.getElementById("baby1960"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }




// ////////////////////////////////////////////DATA///////////////////////////////////


///////////////////////////////////////////// CONTROL//////////////////////////////////
// function totalcontral(){
//     x=document.getElementById("total");
//     y=document.getElementById("chinafertility");
//     z=document.getElementById("chinapopulation");
//     if (x.style.display === "block") {
//         x.style.display = "block";
//         y.style.display = "none";
//         z.style.display="none";
//       } else {
//         x.style.display = "block";
//         y.style.display = "none";
//         z.style.display="none";
        
//       }
      
// }

// function comparefertility(){
//     x=document.getElementById("total");
//     y=document.getElementById("chinafertility");
//     z=document.getElementById("chinapopulation");
//     if (y.style.display === "block") {
//         x.style.display = "none";
//         y.style.display = "block";
//         z.style.display="none";
//       } else {
//         x.style.display = "none";
//         y.style.display = "block";
//         z.style.display="none";
        
//       }
//  }

// function comparepopulation(){
//     document.getElementById("total").style.display="none";
//     document.getElementById("chinafertility").style.display="none";
//     document.getElementById("chinapopulation").style.display="block";
//  }





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
    var myWidth=window.innerWidth ;
    var myHeight=window.innerHeight;
    ctx.canvas.width= myWidth;
    ctx.canvas.height= myHeight;
  
    
}