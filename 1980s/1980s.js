
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();

new fullpage('#fullpage1980',{
    autoScrolling: true,
    navigation:true,
    navigationPosition: 'right',
    css3: true,
    loopBottom: false,
    loopTop: false,
    normalScrollElements: '.p4page,.p5',
    scrollOverflow: true,
    parallax: true,
    parallaxOffset:65,
    // scrollingSpeed:900,
   
    // onLeave: function(section,origin, destination, direction){
	// 	//it won't scroll if the destination is the 3rd section
	// 	if(destination.index == 6){
	// 		return false;
	// 	}
    // },
    afterLoad: function( section, origin, destination, direction){
        var loadedSlide = this;
        console.log(origin.index)
        if(origin.index==0){
            fullpage_api.setAllowScrolling(true);  }  
        if(origin.index==1){
            sectiontwo();       }  
        if(origin.index==2){
            fullpage_api.setAllowScrolling(true);       }  
        if(origin.index==3){
            fullpage_api.setAllowScrolling(true);       }  
        if(origin.index==4){
            fullpage_api.setAllowScrolling(true);       }  
            // if(origin.index==5){
            //     fullpage_api.setAllowScrolling(false, 'down');      }

            
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
    
}) ;
window.addEventListener('scroll', function() {
    const page =document.querySelector('#fullpage1980');
    let scrollposition = window.pageYOffset;
    console.log(scrollposition);
})


//////////////        1980        ///////////////


function s2yes(){
    document.getElementById('p3-1').style.display="block";
    document.getElementById('p3-2').style.display="none";
    fullpage_api.moveSectionDown();
    document.getElementById('p4-1').style.display="block";
    document.getElementById('p4-2').style.display="none";
    document.getElementById('s5-1980').style.display="block";
    document.getElementById('s6-1980').style.display="block";


}
function s2no(){
    document.getElementById('p3-1').style.display="none";
    document.getElementById('p3-2').style.display="block";
    document.getElementById('p4-1').style.display="none";
    document.getElementById('p4-2').style.display="block";
    document.getElementById('s5-1980').style.display="none";
    fullpage_api.moveSectionDown();
}

function sectiontwo(){
    document.getElementById
    fullpage_api.setAllowScrolling(false, 'down');
}


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