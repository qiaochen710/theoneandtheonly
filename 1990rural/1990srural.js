
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
    normalScrollElements: '.p1',
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
            section1();
            fullpage_api.setAllowScrolling(true);  }  
        if(origin.index==1){
            section2();
            fullpage_api.setAllowScrolling(true);     }  
        if(origin.index==2){
            sectionthree(); 
           }  
        if(origin.index==3){
            sectionfour();
            fullpage_api.setAllowScrolling(true);       }  
        if(origin.index==4){
            
            sectionfive();   
    }  
        if(origin.index==5){
            section6();
            fullpage_api.setAllowScrolling(true);     }
        if(origin.index==6){
            section7();
        //     if(document.getElementById('p7-2').style.display="block"){
        //         sectionseven();}
        // else {
                fullpage_api.setAllowScrolling(true);           }
        if(origin.index==7){
            section8();
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

// let 古筝 = document.getElementById('古筝');
// const onMouseMove = (e) =>{
//     古筝.style.left = e.pageX *0.8 + 'px';
//     古筝.style.top = e.pageY* 0.8 + 'px';
//   }
//   document.addEventListener('mousemove', onMouseMove);

// function block(){

//     document.getElementById('古筝').style.display="block";
//     document.getElementById('pingpong').style.display="block";
//     document.getElementById('舞蹈鞋').style.display="block";
//     document.getElementById('算盘').style.display="block";
//     document.getElementById('书法').style.display="block";
//     document.getElementById('素描').style.display="block";
//     document.getElementById('国际象棋').style.display="block";
//     document.getElementById('新概念').style.display="block";
// }
// function none(){

//     document.getElementById('古筝').style.display="none";
//     document.getElementById('pingpong').style.display="none";
//     document.getElementById('舞蹈鞋').style.display="none";
//     document.getElementById('算盘').style.display="none";
//     document.getElementById('书法').style.display="none";
//     document.getElementById('素描').style.display="none";
//     document.getElementById('国际象棋').style.display="none";
//     document.getElementById('新概念').style.display="none";
// }


//////////////        1980        ///////////////


function s3yes(){
    document.getElementById('p4yes').style.display="block";
    document.getElementById('p4no').style.display="none";
    fullpage_api.moveSectionDown();
    document.getElementById('p5yes').style.display="block";
    // document.getElementById('baby').style.display="block";
    document.getElementById('p5no').style.display="none";
    
    
    // document.getElementById('s6button').style.display="block";
    document.getElementById('p6no').style.display="none";
    document.getElementById('p6yes').style.display="none";
    document.getElementById('p6nono').style.display="none";
    // document.getElementById('s5-1980').style.display="block";
    // document.getElementById('s6-1980').style.display="block";


}
function s3no(){

    document.getElementById('p4yes').style.display="none";
    document.getElementById('p4no').style.display="block";
    // document.getElementById('sadface').style.display="block";
    document.getElementById('p5yes').style.display="none";
    // document.getElementById('baby').style.display="none";
    document.getElementById('p5no').style.display="block";
    
    document.getElementById('p6nono').style.display="block";
    document.getElementById('p6no').style.display="none";
    document.getElementById('p6yes').style.display="none";
    document.getElementById('p7nono').style.display="block";
    document.getElementById('p7no').style.display="none";
    document.getElementById('p7yes').style.display="none";
    document.getElementById('p8yes').style.display="none";
    document.getElementById('p8no').style.display="none";
    // document.getElementById('s5-1980').style.display="none";
    fullpage_api.moveSectionDown();
}

function s5yes(){

    document.getElementById('p6yes').style.display="block";
    document.getElementById('p6no').style.display="none";
    document.getElementById('p6nono').style.display="none";
    document.getElementById('p7nono').style.display="none";
    // document.getElementById('p8nono').style.display="none";
    // fullpage_api.moveSectionDown();
    document.getElementById('p7yes').style.display="block";
    document.getElementById('p8yes').style.display="block";
    document.getElementById('p7no').style.display="none";
    document.getElementById('p8no').style.display="none";
    document.getElementById('p9').style.display="block";
    fullpage_api.moveSectionDown();
    // fullpage_api.setAllowScrolling(false, 'down');
}
function s5no(){
   
    document.getElementById('p6yes').style.display="none";
    document.getElementById('p6no').style.display="block";
    document.getElementById('p6nono').style.display="none";
    document.getElementById('p7nono').style.display="none";
    // document.getElementById('p8nono').style.display="none";
    // document.getElementById('s6button').style.display="block";
    fullpage_api.moveSectionDown();
    document.getElementById('p7no').style.display="block";
    document.getElementById('p8no').style.display="block";
    document.getElementById('p7yes').style.display="none";
    document.getElementById('p8yes').style.display="none";
    // fullpage_api.setAllowScrolling(false, 'down');
    document.getElementById('p9').style.display="block";
    // fullpage_api.moveSectionDown();
}

const shop=document.getElementById('shop');
const withmom=document.getElementById('withmomwrap');
function section1(){
    shop.style.opacity="0.1";
    withmom.style.opacity="1";
}

function section2(){
    shop.style.opacity="0.1";
    withmom.style.opacity="0.1";
}
function sectionthree(){
    shop.style.opacity="0.1";
    withmom.style.opacity="0.1";
    fullpage_api.setAllowScrolling(false, 'down');
}
function sectionfour(){
    shop.style.opacity="1";
    withmom.style.opacity="0.1";
    fullpage_api.setAllowScrolling(false, 'down');
}
function sectionfive(){
    shop.style.opacity="0.1";
    withmom.style.opacity="0.1";
    // fullpage_api.setAllowScrolling(false, 'down');
}
function section6(){
    shop.style.opacity="0.1";
    withmom.style.opacity="0.1";
}
function section7(){
    shop.style.opacity="0.1";
    withmom.style.opacity="0.1";
}
function section8(){
    withmom.style.opacity="0.1";
}

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