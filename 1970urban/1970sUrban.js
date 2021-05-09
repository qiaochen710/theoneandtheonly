
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();

new fullpage('#fullpage1970',{
    autoScrolling: true,
    navigation:true,
    navigationPosition: 'right',
    css3: true,
    loopBottom: false,
    loopTop: false,
    normalScrollElements: '.p2',
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
window.addEventListener('scroll', function() {
    const page =document.querySelector('#fullpage1970');
    let scrollposition = window.pageYOffset;
    console.log(scrollposition);
})


//////////////        1980        ///////////////


// function s2yes(){
//     document.getElementById('p3-1').style.display="block";
//     document.getElementById('p3-2').style.display="none";
//     fullpage_api.moveSectionDown();
//     document.getElementById('s4-1970').style.display="block";
//     document.getElementById('s5-1970').style.display="block";

// }
// function s2no(){
//     document.getElementById('p3-1').style.display="none";
//     document.getElementById('p3-2').style.display="block";
//     document.getElementById('s4-1970').style.display="none";
//     document.getElementById('s5-1970').style.display="none";
//     fullpage_api.moveSectionDown();
// }


function hukou(){
    document.getElementById('hukou').style.display="block";
}
function hukouoff(){
    document.getElementById('hukou').style.display="none";
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



function hyear(){
    document.getElementById('choose1960').style.color="#aa3424";
    document.getElementById('wrapY').style.height="150px"; 
   
    // document.getElementById('arrow').style.transform="rotate(45 deg)";

}
function hloca(){
    document.getElementById('wrapL').style.height="60px";
    document.getElementById('chooseR').style.color="#aa3424";

}

function cyear(){
    document.getElementById('wrapY').style.height="0vh";
    document.getElementById('choose1960').style.color="#c5b8b2";
}
function cloca(){
    document.getElementById('wrapL').style.height="0vh";
    document.getElementById('chooseR').style.color="#c5b8b2";
}


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
   
    document.getElementById('instagram').style.display="none";
    document.getElementById('portfolio').style.display="none";
    document.getElementById('email').style.display="none";
    
}






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