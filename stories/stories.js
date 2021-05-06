
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();


// new fullpage('#fullpage1960',{
//     autoScrolling: true,
//     navigation:true,
//     css3: true,
//     // onLeave:(origin,destination,direction)=>{
//     //     const section = destination.item;
//     //     const title = section.querySelector("h1");
//     //     const tl = new TimelineMax({ delay: 0.5 });
//     // }
//     // scrollOverflow:true,
//     // scrollOverflowReset: true
//     // normalScrollElements: '.p5',
//     // parallax: true

//     onLeave: function(section,origin, destination, direction){
// 		//it won't scroll if the destination is the 3rd section
// 		if(destination.index == 6){
// 			return false;
// 		}
//     },
//     afterLoad: function( section, origin, destination, direction){
//         var loadedSlide = this;
//         console.log(origin.index)
//         if(origin.index==0){
//             sectionone();  }  
//         if(origin.index==1){
//             sectiontwo();       }  
//         if(origin.index==2){
//              sectionthree();       }  
//         if(origin.index==3){
//             sectionfour();       }  
//         if(origin.index==4){
//             sectionfive();       }  
//             // if(origin.index==5){
//             //     fullpage_api.setAllowScrolling(false, 'down');      }

            
//     },


// // $(document).on('click', '.button', function(){
// //     fullpage_api.moveSectionDown();
// //   });

// }) ;







function openmenu(){
    document.getElementById("menu-v").style.width="115vw";
    document.getElementById('home').style.display="none";
    document.getElementById('close').style.display="block";
    document.getElementById('theonlychild-v').style.display="block";
    document.getElementById('realityGenerator-v').style.display="block";
    document.getElementById('menudata-v').style.display="block";
    document.getElementById('menuabout-v').style.display="block";
    document.getElementById('email').style.display="block";
    document.getElementById('instagram').style.display="block";
    document.getElementById('portfolio').style.display="block";
    
}

function closemenu(){
    document.getElementById("menu-v").style.width="0";
    // document.getElementById("menu-v").style.display="none";
    document.getElementById('home').style.display="block";
    document.getElementById('close').style.display="none";

    document.getElementById('theonlychild-v').style.display="none";
    document.getElementById('realityGenerator-v').style.display="none";
    document.getElementById('menudata-v').style.display="none";
    document.getElementById('menuabout-v').style.display="none";
    document.getElementById('email').style.display="none";
    document.getElementById('instagram').style.display="none";
    document.getElementById('portfolio').style.display="none";
   
}


let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);





function openlocation1960(){
    document.getElementById('location1960s').style.display="block";
    // document.getElementById('form1960s').style.color="#c66144";
    document.getElementById("location1970s").style.display="none";
    document.getElementById("location1980s").style.display="none";
    document.getElementById("location1990s").style.display="none";
    // document.getElementById('form1970s').style.color="#000000";
    // document.getElementById('form1980s').style.color="#000000";
    // document.getElementById('form1990s').style.color="#000000";
    
}

function openlocation1970(){
    document.getElementById('location1960s').style.display="none";
    document.getElementById("location1970s").style.display="block";
    // document.getElementById('form1970s').style.color="#c66144";
    document.getElementById("location1980s").style.display="none";
    document.getElementById("location1990s").style.display="none";
    // document.getElementById('form1960s').style.color="#000000";
    // document.getElementById('form1980s').style.color="#000000";
    // document.getElementById('form1990s').style.color="#000000";
   
}
function openlocation1980(){
    document.getElementById('location1960s').style.display="none";
    document.getElementById("location1970s").style.display="none";
    document.getElementById("location1980s").style.display="block";
    // document.getElementById('form1980s').style.color="#c66144";
    document.getElementById("location1990s").style.display="none";
    // document.getElementById('form1960s').style.color="#000000";
    // document.getElementById('form1970s').style.color="#000000";
    // document.getElementById('form1990s').style.color="#000000";
    
}
function openlocation1990(){
    document.getElementById('location1960s').style.display="none";
    document.getElementById("location1970s").style.display="none";
    document.getElementById("location1980s").style.display="none";
    document.getElementById("location1990s").style.display="block";
    // document.getElementById('form1990s').style.color="#c66144";
    // document.getElementById('form1960s').style.color="#000000";
    // document.getElementById('form1980s').style.color="#000000";
    // document.getElementById('form1970s').style.color="#000000";
   
}



function openmenu(){
    document.getElementById("menu-v").style.width="115vw";
    document.getElementById('home').style.display="none";
    document.getElementById('close').style.display="block";
    document.getElementById('theonlychild-v').style.display="block";
    document.getElementById('realityGenerator-v').style.display="block";
    document.getElementById('menudata-v').style.display="block";
    document.getElementById('menuabout-v').style.display="block";
    
}

function closemenu(){
    document.getElementById("menu-v").style.width="0";
    // document.getElementById("menu-v").style.display="none";
    document.getElementById('home').style.display="block";
    document.getElementById('close').style.display="none";

    document.getElementById('theonlychild-v').style.display="none";
    document.getElementById('realityGenerator-v').style.display="none";
    document.getElementById('menudata-v').style.display="none";
    document.getElementById('menuabout-v').style.display="none";
   
}




var $=jQuery.noConflict();

//////////////////////////////////////////////1960
class Slideshow {

    constructor() {
      this.initSlides();
      this.initSlideshow();
    }
  
    // Set a `data-slide` index on each slide for easier slide control.
    initSlides() {
      this.container = $('[data-slideshow]');
      this.slides = this.container.find('img');
      this.slides.each((idx, slide) => $(slide).attr('data-slide', idx));
    }
  
    // Pseudo-preload images so the slideshow doesn't start before all the images
    // are available.
    initSlideshow() {
      this.imagesLoaded = 0;
      this.currentIndex = 0;
      this.setNextSlide();
      this.slides.each((idx, slide) => {
        $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
      });
    }
  
    // When one image has loaded, check to see if all images have loaded, and if
    // so, start the slideshow.
    loadImage() {
      this.imagesLoaded++;
      if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
    }
  
    // Start the slideshow.
    playSlideshow() {
      this.slideshow = window.setInterval(() => { this.performSlide() }, 1000);
    }
  
    // 1. Previous slide is unset.
    // 2. What was the next slide becomes the previous slide.
    // 3. New index and appropriate next slide are set.
    // 4. Fade out action.
    performSlide() {
      if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
  
      this.nextSlide.removeClass('next');
      this.prevSlide = this.nextSlide;
      this.prevSlide.addClass('prev');
  
      this.currentIndex++;
      if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
  
      this.setNextSlide();
  
      this.prevSlide.addClass('fade-out');
    }
  
    setNextSlide() {
      this.nextSlide = this.container.find(`[data-slide="${this.currentIndex}"]`).first();
      this.nextSlide.addClass('next');
    }
  
  }
  
  $(document).ready(function() {
    new Slideshow;
  });
  
//////////////////////////////////////////////1970
class Slideshow1970 {

    constructor() {
      this.initSlides();
      this.initSlideshow();
    }
  
    // Set a `data-slide` index on each slide for easier slide control.
    initSlides() {
      this.container = $('[data-slideshow1970]');
      this.slides = this.container.find('img');
      this.slides.each((idx, slide) => $(slide).attr('data-slide1970', idx));
    }
  
    // Pseudo-preload images so the slideshow doesn't start before all the images
    // are available.
    initSlideshow() {
      this.imagesLoaded = 0;
      this.currentIndex = 0;
      this.setNextSlide();
      this.slides.each((idx, slide) => {
        $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
      });
    }
  
    // When one image has loaded, check to see if all images have loaded, and if
    // so, start the slideshow.
    loadImage() {
      this.imagesLoaded++;
      if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
    }
  
    // Start the slideshow.
    playSlideshow() {
      this.slideshow = window.setInterval(() => { this.performSlide() }, 1000);
    }
  
    // 1. Previous slide is unset.
    // 2. What was the next slide becomes the previous slide.
    // 3. New index and appropriate next slide are set.
    // 4. Fade out action.
    performSlide() {
      if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
  
      this.nextSlide.removeClass('next');
      this.prevSlide = this.nextSlide;
      this.prevSlide.addClass('prev');
  
      this.currentIndex++;
      if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
  
      this.setNextSlide();
  
      this.prevSlide.addClass('fade-out');
    }
  
    setNextSlide() {
      this.nextSlide = this.container.find(`[data-slide1970="${this.currentIndex}"]`).first();
      this.nextSlide.addClass('next');
    }
  
  }
  
  $(document).ready(function() {
    new Slideshow1970;
  });
  ////////////////////////////////////////////////// 1980
  class Slideshow1980 {

    constructor() {
      this.initSlides();
      this.initSlideshow();
    }
  
    // Set a `data-slide` index on each slide for easier slide control.
    initSlides() {
      this.container = $('[data-slideshow1980]');
      this.slides = this.container.find('img');
      this.slides.each((idx, slide) => $(slide).attr('data-slide1980', idx));
    }
  
    // Pseudo-preload images so the slideshow doesn't start before all the images
    // are available.
    initSlideshow() {
      this.imagesLoaded = 0;
      this.currentIndex = 0;
      this.setNextSlide();
      this.slides.each((idx, slide) => {
        $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
      });
    }
  
    // When one image has loaded, check to see if all images have loaded, and if
    // so, start the slideshow.
    loadImage() {
      this.imagesLoaded++;
      if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
    }
  
    // Start the slideshow.
    playSlideshow() {
      this.slideshow = window.setInterval(() => { this.performSlide() }, 1000);
    }
  
    // 1. Previous slide is unset.
    // 2. What was the next slide becomes the previous slide.
    // 3. New index and appropriate next slide are set.
    // 4. Fade out action.
    performSlide() {
      if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
  
      this.nextSlide.removeClass('next');
      this.prevSlide = this.nextSlide;
      this.prevSlide.addClass('prev');
  
      this.currentIndex++;
      if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
  
      this.setNextSlide();
  
      this.prevSlide.addClass('fade-out');
    }
  
    setNextSlide() {
      this.nextSlide = this.container.find(`[data-slide1980="${this.currentIndex}"]`).first();
      this.nextSlide.addClass('next');
    }
  
  }
  
  $(document).ready(function() {
    new Slideshow1980;
  });

// /////////////////////////////////////////////////// 1990
class Slideshow1990 {

    constructor() {
      this.initSlides();
      this.initSlideshow();
    }
  
    // Set a `data-slide` index on each slide for easier slide control.
    initSlides() {
      this.container = $('[data-slideshow1990]');
      this.slides = this.container.find('img');
      this.slides.each((idx, slide) => $(slide).attr('data-slide1990', idx));
    }
  
    // Pseudo-preload images so the slideshow doesn't start before all the images
    // are available.
    initSlideshow() {
      this.imagesLoaded = 0;
      this.currentIndex = 0;
      this.setNextSlide();
      this.slides.each((idx, slide) => {
        $('<img>').on('load', $.proxy(this.loadImage, this)).attr('src', $(slide).attr('src'));
      });
    }
  
    // When one image has loaded, check to see if all images have loaded, and if
    // so, start the slideshow.
    loadImage() {
      this.imagesLoaded++;
      if (this.imagesLoaded >= this.slides.length) { this.playSlideshow() }
    }
  
    // Start the slideshow.
    playSlideshow() {
      this.slideshow = window.setInterval(() => { this.performSlide() }, 1000);
    }
  
    // 1. Previous slide is unset.
    // 2. What was the next slide becomes the previous slide.
    // 3. New index and appropriate next slide are set.
    // 4. Fade out action.
    performSlide() {
      if (this.prevSlide) { this.prevSlide.removeClass('prev fade-out') }
  
      this.nextSlide.removeClass('next');
      this.prevSlide = this.nextSlide;
      this.prevSlide.addClass('prev');
  
      this.currentIndex++;
      if (this.currentIndex >= this.slides.length) { this.currentIndex = 0 }
  
      this.setNextSlide();
  
      this.prevSlide.addClass('fade-out');
    }
  
    setNextSlide() {
      this.nextSlide = this.container.find(`[data-slide1990="${this.currentIndex}"]`).first();
      this.nextSlide.addClass('next');
    }
  
  }
  
  $(document).ready(function() {
    new Slideshow1990;
  });





  $(document).mousemove(function(e) {
    $(".img-container").css({
      left: e.pageX+ 50,
      top: e.pageY+50
    });
  });
  $(document).mousemove(function(e) {
    $(".img-1970").css({
      left: e.pageX+ 50,
      top: e.pageY
    });
  });
  $(document).mousemove(function(e) {
    $(".img-1980").css({
      left: e.pageX+ 50,
      top: e.pageY-350
    });
  });
  $(document).mousemove(function(e) {
    $(".img-1990").css({
      left: e.pageX+ 50,
      top: e.pageY-600
    });
  });

  function slide1960(){
      document.getElementById('img-container').style.display="block";
  }

  function closeslide1960(){
    document.getElementById('img-container').style.display="none";
}

function slide1970(){
    document.getElementById('img-1970').style.display="block";
}

function closeslide1970(){
  document.getElementById('img-1970').style.display="none";
}

function slide1980(){
    document.getElementById('img-1980').style.display="block";
}

function closeslide1980(){
  document.getElementById('img-1980').style.display="none";
}
function slide1990(){
    document.getElementById('img-1990').style.display="block";
}

function closeslide1990(){
  document.getElementById('img-1990').style.display="none";
}







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
    // canvas.style.border= "5px dotted orange";
    var myWidth=window.innerWidth ;
    var myHeight=window.innerHeight;
    ctx.canvas.width= myWidth;
    ctx.canvas.height= myHeight;
  
    
}