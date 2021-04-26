
var canvas;
var ctx;
// var w=1000;
// var h=600;

setUpCanvas();





// function grid(){
//     ctx.beginPath();
//     ctx.moveTo()
// }

const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',(e)=>{
    cursor.style.left= e.pageX+ 'px';
    cursor.style.top= e.pageY+ 'px';
})
window.addEventListener('click',()=>{
    if (cursor.classList.contains('click')){
        cursor.classList.remove('click');
        void cursor.offsetWidth;
        cursor.classList.add('click');

    }else{
        cursor.classList.add('click');
    }
})

function isInputNumber(evt){
    var ch=String.fromCharCode(evt.which);
    if (!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}



///check place
function checkPlace(){
    var stories = document.getElementsByName('stories');
    $('#stories').find(stories).css('display','none');
    document.getElementById("datapage").style.display="none";
    formbar();
    
   var rural=document.getElementById('rural');
   var urban=document.getElementById('city');
    if (rural.checked){
        checkyearR();
    }

    if (city.checked){
        checkyearC();
    }
}


function checkyearR(){
    // var year = Number(birthyear);
   
    var birthyear= parseInt(document.getElementById('birthyear').value);
    console.log(birthyear);
    if( birthyear<1970) {
        showup1970(); 
        document.getElementById("itemyear").innerHTML=birthyear;
        

        }
        // else{
        // if(year>=1970, year<1980){
        //     circle();
        // }
    // }
} 

function formbar() {
    var x = document.getElementById("form");
    var y = document.getElementById('realityGenerator');
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "none";
      y.style.display = "block";
      
    }
    
  }

function openbar(){
    document.getElementById("form").style.width="350px";
    document.getElementById("form").style.display="block";
    document.getElementById("form").style.padding="35px";
    document.getElementById('menu').style.display="none";
}

function closebar(){
    document.getElementById("form").style.width="0";
    document.getElementById("form").style.padding="0";
    document.getElementById('menu').style.display="block";
    

}
function navigatorbutton(){
   document.getElementById('realityGenerator');
}

function opendata(){

    document.getElementById('datapage').style.display="block";
    // document.getElementById('menu').style.display="block";
    document.getElementById('stories').style.display="none";
    

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
var yb1970Youth=[bookcover,weave];
var yb1970Pregancy=[wedding];



function showup1970(){
    var x=document.getElementById('baby1960');
    var y=document.getElementById('s1960');
    var r=document.getElementById('ruralgraphics');
    // var n=document.getElementById('nextbabyface');
   
        x.style.display ="block";
        y.style.display ="block";    
        r.style.display ="block"; 
        // n.style.display="block";
  


    var yb1970Youthchoices = yb1970Youth [Math.floor(Math.random() * yb1970Youth .length)];
    yb1970Youthchoices();

    // wedding();
    moving();
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



// function babyfacenext(){
//     var n=document.getElementById('nextbabyface');
//     var x=document.getElementById('baby1960');
//     var y=document.getElementById('s1960');
//         x.style.display="none";
//         y.style.display="none";
//         n.style.display="none";
        
//         var yb1970Youthchoices = yb1970Youth [Math.floor(Math.random() * yb1970Youth .length)];
//         yb1970Youthchoices();
// }


function bookcover(){
    var birthyear= parseInt(document.getElementById('birthyear').value);
    var bookcoveryear = birthyear+ 8 ;
     document.getElementById("itemyearplus8").innerHTML=bookcoveryear;
     console.log(bookcoveryear);
     document.getElementById('plus8years').style.display="block";

}



function weave(){
    var birthyear= parseInt(document.getElementById('birthyear').value);
    var weaveyear = birthyear+ 12 ;
     document.getElementById("itemyearplus12").innerHTML=weaveyear;
     console.log(weaveyear);
     document.getElementById('plus12years').style.display="block";
     
}
// function yb1970youthnext(){
//     document.getElementById('plus8years').style.display="none";
//     document.getElementById('plus12years').style.display="none";
//     document.getElementById('plus20years').style.display="block";

   
//     var yb1970Pregancychoices = yb1970Pregancy [Math.floor(Math.random() * yb1970Pregancy .length)];
//     yb1970Pregancychoices();

// }

function wedding(){
    var birthyear= parseInt(document.getElementById('birthyear').value);
    var weddingyear = birthyear+ 20 ;
     document.getElementById("itemyearplus20").innerHTML=weddingyear;
     console.log(weddingyear);
     document.getElementById('plus20years').style.display="block";
}



// function weddingnext(){
//     document.getElementById('plus20years').style.display="none";
//     // document.getElementById('itemyearplus20').style.display="block";
//     document.getElementById('movingAfterWedding').style.display="block";
//     moving();
// }

function moving(){
    var birthyear= parseInt(document.getElementById('birthyear').value);
    var weddingyear = birthyear+ 20 ;
     document.getElementById("movingyear").innerHTML=weddingyear;
     console.log(weddingyear);
    //  document.getElementById('movingyear').style.display="block";
}
// function movingnext(){
//     document.getElementById('movingAfterWedding').style.display="none";
//     // document.getElementById('itemyearplus20').style.display="block";
//     document.getElementById('checkgender').style.display="block";
//     checkgender();

// }


// document.getElementById('movingAfterWedding').style.display="none";

// function textnext20(){
   
// }



dragElement(document.getElementById("baby1960"));

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


// ///////////////DATA/////////////////////







// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 50},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#data-population")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Read the data
d3.csv("datapopulation.csv",

  // When reading the csv, I must format variables:





  function(d){
    return { year: d3.timeParse("%Y")(d.year), 
    population : d.population, 
    fertility:d.fertility }
  },

  // Now I can use this dataset:
  function(data) {

    // Keep only the 90 first rows
    data = data.filter(function(d,i){ return i})

// d3.csv("datapopulation.csv", function(error, data) {
//     if (error) throw error;
  
//     // format the data
//     data.forEach(function(d) {
//         d.year = parseTime(d.year);
//         d.population = +d.population;
//         d.fertility = +d.fertility;
//     });

    // Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.year; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + (height+5) + ")")
      .call(d3.axisBottom(x).ticks(10).tickSizeOuter(0));

      
    // Add Y axis
    var y0 = d3.scaleLinear()
      .domain( [0, 1400 ])
      .range([ height, 0 ]);
    svg.append("g")
      .attr("transform", "translate(-5,0)")
      .call(d3.axisLeft(y0).tickSizeOuter(0));

    // second Y axis
    var y1 =d3.scaleLinear()
    .domain( [0, 10 ])
    .range([ height, 0 ]);
    svg.append("g")
      .attr("transform", "translate("+width+",0)")
      .call(d3.axisRight(y1).tickSizeOuter(0));

    // Add the popultion area
   svg.append("path")
      .datum(data)
      .attr("fill", "#8c7574")
      .attr("fill-opacity", .4)
      .attr("stroke", "none")
      .attr("d", d3.area()
        .x(function(d) { return x(d.year) })
        .y0(height)
        .y1(height)
        )
        .transition()
        .duration(1000)
        // .attr("y0", height )
        .attr("d", d3.area()
            .x(function(d) { return x(d.year) })
             .y0(height)
            .y1(function(d) { return y0(d.population); }))
       
        .delay(function(d,i) { return(i*10)})

    // Add the population line
   svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#9e8fba")
      .attr("stroke-width", 4)
      .attr("d", d3.line()
        .x(function(d) { return x(d.year) })
        .y(height))
      

        .transition()
        .duration(1000)
        .attr("d", d3.line()
            .x(function(d) { return x(d.year) })
            .y (function(d) { return y0(d.population); }))
        // .attr("y", y(function(d) { return y(d.population) }))
        .delay(function(d,i) { return(i*10)} )



    // Add the population dotted line
    svg.selectAll("myCircles")
      .data(data)
      .enter()
      .append("circle")
        .attr("fill", "#8c7574")
        .attr("stroke", "none")
        .attr("cx", function(d) { return x(d.year); })
        .attr("cy", function(d) { return height; })
        .attr("r", 3)
        .transition()
        // .delay(function(d,i) { return(i*100)})
        .duration(1000)
        
        .attr("cy", function(d) { return y0(d.population); })
        // .attr("y", y(function(d) { return y(d.population) }))
        
      



    // Add the fertility line
    svg.append("path")
    .datum(data)
   
    .attr("fill", "none")
    .attr("stroke", "#d1642b")
    .attr("stroke-width", 4)
    .attr("d", d3.line()
    .x(function(d) { return x(d.year) })
    .y( height ))


    .transition()
    .duration(1000)
    .attr("d", d3.line()
        .x(function(d) { return x(d.year) })
        .y (function(d) { return y1(d.fertility); }))
    // .attr("y", y(function(d) { return y(d.population) }))
    .delay(function(d,i) { return(i*10)} )

})


// function comparefertility(){
 
//     svg.append("path")
//     .datum(data)
//     .attr("fill", "none")
//     .attr("stroke", "#9e8fba")
//     .attr("stroke-width", 4)
//     .attr("d", d3.line()
//       .x(function(d) { return x(d.year) })
//       .y(height))
    

//       .transition()
//       .duration(1000)
//       .attr("d", d3.line()
//           .x(function(d) { return x(d.year) })
//           .y (function(d) { return y0(d.population); }))
//       // .attr("y", y(function(d) { return y(d.population) }))
//       .delay(function(d,i) { return(i*10)} )
// }


// function comparepopulation(){

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
    // canvas.style.border= "5px dotted orange";
    var myWidth=window.innerWidth;
    var myHeight=window.innerHeight ;
    ctx.canvas.width= myWidth;
    ctx.canvas.height= myHeight;
    
    
    
}

