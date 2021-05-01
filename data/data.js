
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();


const data=document.getElementById('title');
const s1text=document.getElementById('s1text');
const s3text=document.getElementById('s3text');
const s5text=document.getElementById('s5text');
const s6text=document.getElementById('s6text');
const iudtext=document.getElementById('iudwrap');
const s7text=document.getElementById('s7text');
const s8text=document.getElementById('s8text');
const s9text=document.getElementById('s9text');
const s10text=document.getElementById('s10text');
const s11text=document.getElementById('s11text');

// const scroll= document.getElementById('datapage1');

new fullpage('#fullpagedata',{
    autoScrolling: true,
    navigation:true,
    css3: true,
    scrollingSpeed:800,
    fitToSection: false,
    
    // onLeave:(origin,destination,direction)=>{
    //     const section = destination.item;
    //     const title = section.querySelector("h1");
    //     const tl = new TimelineMax({ delay: 0.5 });
    // }
    scrollOverflow:true,
    scrollOverflowReset: true,
    normalScrollElements: '.iudwrap,#s9text',
    // parallax: true

    // onLeave: function(section,origin, destination, direction){
	// 	//it won't scroll if the destination is the 3rd section
	// 	if(destination.index == 6){
	// 		return false;
	// 	}
    // },
    navigationTooltips:['One–Child Policy', 'One–Child Policy','Variation','Variation','Education','Labour Market','Contraceptive Method','Induced Abortion','IUD','"Missing Women"','Under–report'],
    // showActiveTooltip:true,
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
            sectionsix();       }
        if(origin.index==6){
            sectionseven();       }  
  
            if(origin.index==7){
                sectioneight();       }  
                if(origin.index==8){
                    sectionnine();       }  
                    if(origin.index==9){
                        sectionten();       } 
                        if(origin.index==10){
                            section11();       }  
  ``
                          
        
            
    },
    onLeave:(origin,destination,direction)=> {
        const section=destination.item;
        const title =section.querySelectorAll('.text');
        const graph=section.querySelectorAll('.graph');
        const tl= new TimelineMax({delay:0.5});
        tl.fromTo(title,0.5,{y:"70",opacity:0}, {y:0,opacity:1});
        tl.fromTo(graph,0.3,{scaleX:"0"}, {scaleX:"1"});

    }



// $(document).on('click', '.button', function(){
//     fullpage_api.moveSectionDown();
//   });

}) ;
// fullpage_api.parallax.init();

window.addEventListener('scroll', function() {
    const page =document.querySelector('#datapage1');
    let scrollposition = window.pageYOffset;
    console.log(scrollposition);
})


function sectionone(){

   data.style.display="block";
    s1text.style.display="block";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}


function sectiontwo(){
    data.style.display="none";
    s1text.style.display="block";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}

function sectionthree(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="block";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}

function sectionfour(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="block";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}

function sectionfive(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="none";
    s5text.style.display="block";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}


function sectionsix(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="block";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}

function sectionseven(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="block";
    s7text.style.display="block";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}

function sectioneight(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="block";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="none";

}


function sectionnine(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="block";
    s10text.style.display="none";
    s11text.style.display="none";

}

function sectionten(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="block";
    s11text.style.display="none";

}

function section11(){
    data.style.display="none";
    s1text.style.display="none";
    s3text.style.display="none";
    s5text.style.display="none";
    s6text.style.display="none";
    iudtext.style.display="none";
    s7text.style.display="none";
    s8text.style.display="none";
    s9text.style.display="none";
    s10text.style.display="none";
    s11text.style.display="block";

}






function total(){
    document.getElementById('c1y').style.display="block";
    document.getElementById('comparep').style.display="none";
    document.getElementById('comparef').style.display="none";
}

function comparefb(){
    document.getElementById('c1y').style.display="none";
    document.getElementById('comparep').style.display="none";
    document.getElementById('comparef').style.display="block";
}
function comparepb(){
    document.getElementById('c1y').style.display="none";
    document.getElementById('comparep').style.display="block";
    document.getElementById('comparef').style.display="none";
}
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