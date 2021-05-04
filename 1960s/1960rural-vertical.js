
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();

var birth60= document.getElementById('birth60');
var bookcover60=document.getElementById('bookcover60');
var sewingmachine= document.getElementById('sewingmachine');
var birthticket=document.getElementById('birthticket');
var sweater=document.getElementById('sweater');
var herbalsoup=document.getElementById('herbalsoup');



new fullpage('#fullpage1960',{
    autoScrolling: true,
    navigation:true,
    css3: true,
    // onLeave:(origin,destination,direction)=>{
    //     const section = destination.item;
    //     const title = section.querySelector("h1");
    //     const tl = new TimelineMax({ delay: 0.5 });
    // }
    scrollOverflow:true,
    scrollOverflowReset: true,
    normalScrollElements: '#s2-1970',
    // parallax: true

    onLeave: function(section,origin, destination, direction){
		//it won't scroll if the destination is the 3rd section
		if(destination.index == 6){
			return false;
		}
    },
    afterLoad: function( section, origin, destination, direction){
        var loadedSlide = this;
        console.log(origin.index)
        if(origin.index==0){
            sectionone();  }  
        if(origin.index==1){
            sectiontwo();       }  
        if(origin.index==2){
             sectionthree();       }  
        if(origin.index==3){
            sectionfour();       }  
        if(origin.index==4){
            sectionfive();       }  
        if(origin.index==5){
            sectionsix();         }
        if(origin.index==6){
            sectionseven();         }
        if(origin.index==7){
            sectioneight();         }
            
                    

            
    },
    onLeave:(origin,destination,direction)=> {
        const section=destination.item;
        const title =section.querySelectorAll('.text');
        const tl= new TimelineMax({delay:0.6});
        tl.fromTo(title,0.5,{y:"70",opacity:0}, {y:0,opacity:1});
     
        const photo =section.querySelectorAll('.photo');
        const ph= new TimelineMax({delay:0.4});
        ph.fromTo(photo,0.5,{y:"70",opacity:0}, {y:0,opacity:1});
    }


// $(document).on('click', '.button', function(){
//     fullpage_api.moveSectionDown();
//   });

}) ;


window.addEventListener('scroll', function() {
    const page =document.querySelector('#fullpage1960');
    let scrollposition = window.pageYOffset;
    console.log(scrollposition);
})






function openform(){

    document.getElementById('stories').style.display="none";
    // document.getElementById("form").style.width="350px";
    document.getElementById("form").style.display="block";
    // document.getElementById("form").style.padding="35px";
    document.getElementById('about').style.display="none";
    document.getElementById('datapage').style.display="none";
    
}




function openabout(){
    document.getElementById("about").style.width="350px";
    document.getElementById("about").style.display="block";
    document.getElementById("about").style.padding="35px";
    document.getElementById('menu').style.display="none";
    
}

function closeabout(){
    document.getElementById("about").style.width="0";
    document.getElementById("about").style.padding="0";
    document.getElementById('menu').style.display="block";
   
}



///////////////        1960        ///////////////
////rural



function sectionone(){
    birth60.style.opacity="1";
    birth60.style.zIndex="1";
    bookcover60.style.opacity="0.1";
    sewingmachine.style.opacity="0.1";
    birthticket.style.opacity="0.1";
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="0.1";
    birthticket.style.zIndex="-3";
    fullpage_api.setAllowScrolling(true); 
}
function sectiontwo(){
    birth60.style.opacity="0.1";
    birth60.style.zIndex="-1";
    bookcover60.style.opacity="1";
    sewingmachine.style.opacity="0.1";
    birthticket.style.opacity="0.1";
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="0.1";
    birthticket.style.zIndex="-3";
    fullpage_api.setAllowScrolling(true); 
}
function sectionthree(){
    birth60.style.opacity="0.1";
    bookcover60.style.opacity="0.1";
    sewingmachine.style.opacity="0.1";
    birthticket.style.opacity="0.1";
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="0.1";
    birthticket.style.zIndex="-1";
    fullpage_api.setAllowScrolling(true); 
}
function sectionfour(){
    birth60.style.opacity="0.1";
    bookcover60.style.opacity="0.1";
    sewingmachine.style.opacity="1";
    birthticket.style.opacity="0.1";
    
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="0.1";
    birthticket.style.zIndex="-1";
    fullpage_api.setAllowScrolling(true); 
}
function sectionfive(){
    birth60.style.opacity="0.1";
    bookcover60.style.opacity="0.1";
    sewingmachine.style.opacity="0.1";
    birthticket.style.opacity="1";
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="0.1";
    birthticket.style.zIndex="1";
    fullpage_api.setAllowScrolling(true); 
}

function sectionsix(){
    birth60.style.opacity="0.1";
    bookcover60.style.opacity="0.1";
    sewingmachine.style.opacity="0.1";
    birthticket.style.opacity="0.1";
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="0.1";
    birthticket.style.zIndex="1";
    fullpage_api.setAllowScrolling(false, 'down');
}
function sectionseven(){
    birth60.style.opacity="0.1";
    bookcover60.style.opacity="0.1";
    sewingmachine.style.opacity="0.1";
    birthticket.style.opacity="0.1";
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="1";
    birthticket.style.zIndex="0.1";
    fullpage_api.setAllowScrolling(true); 
}
function sectioneight(){
    birth60.style.opacity="0.1";
    bookcover60.style.opacity="0.1";
    sewingmachine.style.opacity="0.1";
    birthticket.style.opacity="0.1";
    sweater.style.opacity="0.1";
    herbalsoup.style.opacity="0.1";
    birthticket.style.zIndex="0.1";
    fullpage_api.setAllowScrolling(true); 
}
function r1960girl(){
    document.getElementById('s5photo').style.display="none";
    // document.getElementById('p6').style.display="none";
    document.getElementById('p7girl').style.display="block";
    document.getElementById('p7boy').style.display="none";
    document.getElementById('boyiud').style.display="none";
    fullpage_api.moveSectionDown();
    // document.getElementById('girls7').style.color="#2B2E34";
    // document.getElementById('s7text1960').style.color="#666666";
    // document.getElementById('s7text1960').style.display="block";
    document.getElementById('p9lastpage').style.display="none";
    document.getElementById('s9text').style.display="none";
    document.getElementById('s10-1960').style.display="block";
    document.getElementById('s11-1960').style.display="block";

}


function r1960boy(){
    document.getElementById('s5photo').style.display="block";
    document.getElementById('p7girl').style.display="none";
    document.getElementById('p7boy').style.display="block";
   
    // document.getElementById('boys7').style.color="#2B2E34";
    // document.getElementById('s7text1960').style.color="#869594";
    // document.getElementById('s7text1960').style.display="none";
    document.getElementById('p8drink').style.display="none";
    document.getElementById('p8pour').style.display="none";

    document.getElementById('boyiud').style.display="block";

    document.getElementById('p9').style.display="none";
    document.getElementById('delivery').style.display="none";
    document.getElementById('p9lastpage').style.display="block";
    document.getElementById('s9text').style.display="block";

    document.getElementById('s10-1960').style.display="none";
    document.getElementById('s11-1960').style.display="none";
    fullpage_api.moveSectionDown();
    fullpage_api.setAllowScrolling(true);
    
}

function drinkit(){
    // document.getElementById('s8-1960').style.display="block";
    document.getElementById('p8drink').style.display="block";
    document.getElementById('p9').style.display="block";
    document.getElementById('s9subtext').style.display="block";
    document.getElementById('p8pour').style.display="none";
    fullpage_api.moveSectionDown();
    fullpage_api.setAllowScrolling(true);
}

function pourit(){
    fullpage_api.moveSectionDown();
    document.getElementById('p8pour').style.display="block";
    document.getElementById('p8drink').style.display="none";
    document.getElementById('p9').style.display="block";
    document.getElementById('s9subtext').style.display="block";
    fullpage_api.setAllowScrolling(true);
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