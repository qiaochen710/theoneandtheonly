
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
    // onLeave: function(section,origin, destination, direction){
	// 	//it won't scroll if the destination is the 3rd section
	// 	if(destination.index == 6){
	// 		return false;
		
    // },
    // offsetSections:true,
   
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
            document.getElementById('桑葚').style.opacity="0.1";
            document.getElementById('chair').style.opacity="0.1";
            document.getElementById('medicinecase').style.opacity="0.1";
            document.getElementById('docter').style.opacity="0";
            document.getElementById('iud').style.opacity="0.1";    
        sectionsix(); }
         

            
    },

}) ;
window.addEventListener('scroll', function() {
    const page =document.querySelector('#fullpage1960');
    let scrollposition = window.pageYOffset;
    console.log(scrollposition);
})


//////////////        1970        ///////////////
function keepbaby(){
   
    // document.getElementById('p6').style.display="none";
    document.getElementById('p3-1').style.display="block";
    document.getElementById('s3button-1').style.display="block";
    document.getElementById('p3-2').style.display="none";
    fullpage_api.moveSectionDown();
    document.getElementById('p5').style.display="block";
    document.getElementById('p4yes').style.display="none";
    document.getElementById('p4no').style.display="none";
    document.getElementById('s5-1970').style.display="block";
    document.getElementById('s6-1970').style.display="block";
    document.getElementById('s3button').style.display="none";
    document.getElementById('s4button').style.display="none";
    // document.getElementById('s7-1970').style.display="none";
    document.getElementById('p6ending').style.display="block";
    document.getElementById('s6text').style.display="block";
}
function medicalabortion(){
   
    // document.getElementById('p6').style.display="none";
    document.getElementById('p3-1').style.display="none";
    document.getElementById('p3-2').style.display="block";
    document.getElementById('s3button-1').style.display="none";

    fullpage_api.moveSectionDown();
    // document.getElementById('s5-1970').style.display="block";
    // document.getElementById('p4').style.display="none";
    document.getElementById('s3button').style.display="block";
    document.getElementById('s5-1970').style.display="block";
    document.getElementById('s6-1970').style.display="block";
    // document.getElementById('s7-1970').style.display="block";
    document.getElementById('p6ending').style.display="block";
    document.getElementById('s6text').style.display="block";


}

function s3no(){
    // document.getElementById('s4-1970').style.display="block";
    document.getElementById('p4yes').style.display="block";
    document.getElementById('p4no').style.display="none";
     document.getElementById('s5-1970').style.display="block";
    fullpage_api.moveSectionDown();
    document.getElementById('s4button').style.display="none";
    document.getElementById('p5').style.display="block";
    document.getElementById('p5-1').style.display="none";
    document.getElementById('p5-2').style.display="none";
    document.getElementById('p6').style.display="none";

    document.getElementById('桑葚').style.opacity="0.1";
    document.getElementById('chair').style.opacity="1";
    document.getElementById('medicinecase').style.opacity="0.1";
    document.getElementById('doctor').style.opacity="0";
    document.getElementById('iud').style.opacity="0.1";
}
function s3yes(){
    // document.getElementById('s4-1970').style.display="block";
    document.getElementById('p4yes').style.display="none";
    document.getElementById('p4no').style.display="block";
     document.getElementById('s5-1970').style.display="block";
     document.getElementById('s4button').style.display="block";
    fullpage_api.moveSectionDown();
   

}
function s3parent(){
    document.getElementById('p4-1').style.display="block";
    document.getElementById('p4-2').style.display="none";
    document.getElementById('p5').style.display="block";
    document.getElementById('p6').style.display="none";
    document.getElementById('s4button').style.display="none";
    fullpage_api.moveSectionDown();

    document.getElementById('桑葚').style.opacity="0.1";
    document.getElementById('chair').style.opacity="0.1";
    document.getElementById('medicinecase').style.opacity="1";
    document.getElementById('doctor').style.opacity="1";
    document.getElementById('iud').style.opacity="0.1";

}
function s3hospital(){
    document.getElementById('p4-1').style.display="none";
    document.getElementById('p4-2').style.display="block";
    document.getElementById('p5').style.display="block";
    document.getElementById('p6').style.display="none";
    document.getElementById('s4button').style.display="none";
    fullpage_api.moveSectionDown();

    
}

function s5parent(){
    document.getElementById('p5-1').style.display="block";
    document.getElementById('p5-2').style.display="none";
    document.getElementById('p6').style.display="block";
    fullpage_api.moveSectionDown();

    document.getElementById('桑葚').style.opacity="0.1";
    document.getElementById('chair').style.opacity="0.1";
    document.getElementById('medicinecase').style.opacity="1";
    document.getElementById('doctor').style.opacity="1";
    document.getElementById('iud').style.opacity="0.1";
}
function s5hospital(){
    document.getElementById('p5-1').style.display="none";
    document.getElementById('p5-2').style.display="block";
    document.getElementById('p6').style.display="block";
    fullpage_api.moveSectionDown();
}


function sectionone(){
    document.getElementById('桑葚').style.opacity="1";
    document.getElementById('chair').style.opacity="0.1";
    document.getElementById('medicinecase').style.opacity="0.1";
    document.getElementById('doctor').style.opacity="0";
    document.getElementById('iud').style.opacity="0.1";
    fullpage_api.setAllowScrolling(true);

}
function sectiontwo(){
    document.getElementById('桑葚').style.opacity="0.1";
    document.getElementById('chair').style.opacity="0.1";
    document.getElementById('medicinecase').style.opacity="0.1";
    document.getElementById('doctor').style.opacity="0";
    document.getElementById('iud').style.opacity="0.1";
    fullpage_api.setAllowScrolling(false, 'down');
}
function sectionthree(){
    fullpage_api.setAllowScrolling(false, 'down');
}
function sectionfour(){
    fullpage_api.setAllowScrolling(true);
}

function sectionfive(){
    document.getElementById('桑葚').style.opacity="0.1";
    document.getElementById('chair').style.opacity="0.1";
    document.getElementById('medicinecase').style.opacity="0.1";
    document.getElementById('doctor').style.opacity="0";
    document.getElementById('iud').style.opacity="1";
    fullpage_api.setAllowScrolling(true);
    
}
function sectionsix(){
    fullpage_api.setAllowScrolling(true);
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