
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();

new fullpage('#fullpage1990',{
    autoScrolling: true,
    navigation:true,
    navigationPosition: 'right',
    css3: true,
    loopBottom: false,
    loopTop: false,
    normalScrollElements: '.p1, #p6-1,#p6yes',
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
            fullpage_api.setAllowScrolling(true);     }  
        if(origin.index==2){
            fullpage_api.setAllowScrolling(true);   }  
        if(origin.index==3){
            fullpage_api.setAllowScrolling(true);       }  
        if(origin.index==4){
            fullpage_api.setAllowScrolling(true);  }  
        if(origin.index==5){
            fullpage_api.setAllowScrolling(true);     }
        if(origin.index==6){
     
                fullpage_api.setAllowScrolling(true);           }
        if(origin.index==7){
            // if(document.getElementById('p8lastpage').style.display="block"){
            //        sectioneight();}
            // else {
                    fullpage_api.setAllowScrolling(true);   }      

            
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
    const page =document.querySelector('#fullpage1990');
    let scrollposition = window.pageYOffset;
    console.log(scrollposition);
})

// let ?????? = document.getElementById('??????');
// const onMouseMove = (e) =>{
//     ??????.style.left = e.pageX *0.8 + 'px';
//     ??????.style.top = e.pageY* 0.8 + 'px';
//   }
//   document.addEventListener('mousemove', onMouseMove);


function hyear(){
    // document.getElementById('choose1960').style.color="#c5b8b2";
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
    // document.getElementById('arrow').style.transform="rotate(-135 deg)";

    // document.getElementById('wrapY').style.display="none";
}
function cloca(){
    document.getElementById('wrapL').style.height="0vh";
    document.getElementById('chooseR').style.color="#c5b8b2";
}




function block(){

    document.getElementById('??????').style.display="block";
    document.getElementById('pingpong').style.display="block";
    document.getElementById('?????????').style.display="block";
    document.getElementById('??????').style.display="block";
    document.getElementById('??????').style.display="block";
    document.getElementById('??????').style.display="block";
    document.getElementById('????????????').style.display="block";
    document.getElementById('?????????').style.display="block";
}
function none(){

    document.getElementById('??????').style.display="none";
    document.getElementById('pingpong').style.display="none";
    document.getElementById('?????????').style.display="none";
    document.getElementById('??????').style.display="none";
    document.getElementById('??????').style.display="none";
    document.getElementById('??????').style.display="none";
    document.getElementById('????????????').style.display="none";
    document.getElementById('?????????').style.display="none";
}


//////////////        1980        ///////////////


function s3yes(){
    document.getElementById('p4yes').style.display="block";
    document.getElementById('p4no').style.display="none";
    fullpage_api.moveSectionDown();
    document.getElementById('p5-1').style.display="block";
    document.getElementById('baby').style.display="block";
    document.getElementById('p5-2').style.display="none";
    // document.getElementById('s5button-1').style.display="block";
    // document.getElementById('s5button').style.display="none";
    
    document.getElementById('s6button').style.display="block";
    document.getElementById('p6no').style.display="none";
    document.getElementById('p6yes').style.display="none";
    // document.getElementById('s6button').style.display="none";
    // document.getElementById('s5-1980').style.display="block";
    // document.getElementById('s6-1980').style.display="block";


}
function s3no(){

    document.getElementById('p4yes').style.display="none";
    document.getElementById('p4no').style.display="block";
    document.getElementById('sadface').style.display="block";
    document.getElementById('p5-1').style.display="none";
    document.getElementById('baby').style.display="none";
    document.getElementById('p5-2').style.display="block";
    // document.getElementById('s5button').style.display="block";
    // document.getElementById('s5button-1').style.display="none";
    // document.getElementById('s6button').style.display="block";
    // document.getElementById('s5-1980').style.display="none";
    fullpage_api.moveSectionDown();
}

function s5yes(){
    document.getElementById('p6-1').style.display="none";
    document.getElementById('p6-2').style.display="none";
    document.getElementById('p6yes').style.display="block";
    document.getElementById('p6no').style.display="none";
    fullpage_api.moveSectionDown();
    document.getElementById('s6button').style.display="block";
    // fullpage_api.setAllowScrolling(false, 'down');
}
function s5no(){
    document.getElementById('p6-1').style.display="none";
    document.getElementById('p6-2').style.display="none";
    document.getElementById('p6yes').style.display="none";
    document.getElementById('p6no').style.display="block";

    document.getElementById('p7-1').style.display="none";
    document.getElementById('p7-2').style.display="none";
    document.getElementById('p7yes').style.display="none";
    document.getElementById('p7no').style.display="block";
    document.getElementById('p8lastpage').style.display="none";
    document.getElementById('p8').style.display="block";
    document.getElementById('s9-1990').style.display="block";
    // document.getElementById('s6button').style.display="block";
    fullpage_api.moveSectionDown();
    // fullpage_api.setAllowScrolling(false, 'down');
}
function s5yes1(){
    document.getElementById('p6-1').style.display="none";
    document.getElementById('p6-2').style.display="block";
    document.getElementById('p6yes').style.display="none";
    document.getElementById('p6no').style.display="none";
    // document.getElementById('s6button').style.display="none";

    document.getElementById('p7-1').style.display="none";
    document.getElementById('p7-2').style.display="block";
    document.getElementById('p7yes').style.display="none";
    document.getElementById('p7no').style.display="none";
    document.getElementById('s8-1990').style.display="none";
    document.getElementById('s9-1990').style.display="none"
    fullpage_api.moveSectionDown();
}
function s5no1(){
    document.getElementById('p6-1').style.display="block";
    document.getElementById('p6-2').style.display="none";

    document.getElementById('p6yes').style.display="none";
    document.getElementById('p6no').style.display="none";
    // document.getElementById('s6button').style.display="none";
    document.getElementById('p7-1').style.display="block";
    document.getElementById('p7-2').style.display="none";
    document.getElementById('p7yes').style.display="none";
    document.getElementById('p7no').style.display="none";
    document.getElementById('s8-1990').style.display="block";
    document.getElementById('p8lastpage').style.display="block";
    document.getElementById('p8').style.display="none";
    document.getElementById('s9-1990').style.display="none"
    fullpage_api.moveSectionDown();
}
function s6yes(){
    document.getElementById('p7-1').style.display="none";
    document.getElementById('p7-2').style.display="none";
    document.getElementById('p7yes').style.display="block";
    document.getElementById('p7no').style.display="none";
    document.getElementById('p8lastpage').style.display="block";
    document.getElementById('s8-1990').style.display="block";
    document.getElementById('p8lastpage').style.display="block";
    document.getElementById('p8').style.display="none";
    document.getElementById('s9-1990').style.display="none"
    fullpage_api.moveSectionDown();
}
function s6no(){
    document.getElementById('p7-1').style.display="none";
    document.getElementById('p7-2').style.display="none";
    document.getElementById('p7yes').style.display="none";
    document.getElementById('p7no').style.display="block";
    document.getElementById('p8lastpage').style.display="none";
    document.getElementById('p8').style.display="block";
    document.getElementById('s9-1990').style.display="block";
    fullpage_api.moveSectionDown();
}

// function sectionthree(){
//     fullpage_api.setAllowScrolling(false, 'down');
// }

// function sectionseven(){
//     fullpage_api.setAllowScrolling(false, 'down');
// }
// function sectioneight(){
//     fullpage_api.setAllowScrolling(false, 'down');
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
    var myWidth=window.innerWidth ;
    var myHeight=window.innerHeight;
    ctx.canvas.width= myWidth;
    ctx.canvas.height= myHeight;
  
    
}