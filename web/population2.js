
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

// var yb1970Youth=[bookcover,weave];
// var yb1970Pregancy=[wedding];

var menu= document.getElementById('menu');

function showup1970(){
    // var x=document.getElementById('baby1960');
    
    var y=document.getElementById('s1960');
        y.style.display ="block";    
    
        menu.style.display="block";


    // var yb1970Youthchoices = yb1970Youth [Math.floor(Math.random() * yb1970Youth .length)];
    // yb1970Youthchoices();

    // wedding();
    // moving();
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


// function bookcover(){
//     var birthyear= parseInt(document.getElementById('birthyear').value);
//     var bookcoveryear = birthyear+ 8 ;
//      document.getElementById("itemyearplus8").innerHTML=bookcoveryear;
//      console.log(bookcoveryear);
//      document.getElementById('plus8years').style.display="block";

// }



// function weave(){
//     var birthyear= parseInt(document.getElementById('birthyear').value);
//     var weaveyear = birthyear+ 12 ;
//      document.getElementById("itemyearplus12").innerHTML=weaveyear;
//      console.log(weaveyear);
//      document.getElementById('plus12years').style.display="block";
     
// }
// function yb1970youthnext(){
//     document.getElementById('plus8years').style.display="none";
//     document.getElementById('plus12years').style.display="none";
//     document.getElementById('plus20years').style.display="block";

   
//     var yb1970Pregancychoices = yb1970Pregancy [Math.floor(Math.random() * yb1970Pregancy .length)];
//     yb1970Pregancychoices();

// }

// function wedding(){
//     var birthyear= parseInt(document.getElementById('birthyear').value);
//     var weddingyear = birthyear+ 20 ;
//      document.getElementById("itemyearplus20").innerHTML=weddingyear;
//      console.log(weddingyear);
//      document.getElementById('plus20years').style.display="block";
// }



// function weddingnext(){
//     document.getElementById('plus20years').style.display="none";
//     // document.getElementById('itemyearplus20').style.display="block";
//     document.getElementById('movingAfterWedding').style.display="block";
//     moving();
// }

// function moving(){
//     var birthyear= parseInt(document.getElementById('birthyear').value);
//     var weddingyear = birthyear+ 20 ;
//      document.getElementById("movingyear").innerHTML=weddingyear;
//      console.log(weddingyear);
    //  document.getElementById('movingyear').style.display="block";
// }
// function movingnext(){
//     document.getElementById('movingAfterWedding').style.display="none";
//     // document.getElementById('itemyearplus20').style.display="block";
//     document.getElementById('checkgender').style.display="block";
//     checkgender();

// }


// document.getElementById('movingAfterWedding').style.display="none";

// function textnext20(){
   
// }



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


// ////////////////////////////////////////////DATA///////////////////////////////////


///////////////////////////////////////////// CONTROL//////////////////////////////////
function totalcontral(){
    x=document.getElementById("total");
    y=document.getElementById("chinafertility");
    z=document.getElementById("chinapopulation");
    if (x.style.display === "block") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display="none";
      } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display="none";
        
      }
      
}

function comparefertility(){
    x=document.getElementById("total");
    y=document.getElementById("chinafertility");
    z=document.getElementById("chinapopulation");
    if (y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display="none";
      } else {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display="none";
        
      }
 }

function comparepopulation(){
    document.getElementById("total").style.display="none";
    document.getElementById("chinafertility").style.display="none";
    document.getElementById("chinapopulation").style.display="block";
 }
total();
chinapopulation();
chinafertility();
verticalgraph();
////////////////////////////////////////////// INFOGRAPHY/////////////////////////////
// set the dimensions and margins of the graph
function total(){
var margin = {top: 10, right: 100, bottom: 30, left: 50},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#total")
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

// d3.csv("datapopulation.csv", function(error, data) {
//     if (error) throw error;
  
//     // format the data
//     data.forEach(function(d) {
//         d.year = parseTime(d.year);
//         d.population = +d.population;
//         d.fertility = +d.fertility;
//     });
svg.append("rect")
.attr("width", "100%")
.attr("height", "100%")
.attr("fill", "#e4e3e0")
.attr("transform",
          "translate(-5, 5)");
    // //////////////////////////////Add X axis --> it is a date format
    var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.year; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + (height+5) + ")")
      .call(d3.axisBottom(x).ticks(10).tickSizeOuter(0));

      
    //////////////////////////////// Add Y axis
    var y0 = d3.scaleLinear()
      .domain( [0, 1400 ])
      .range([ height, 0 ]);
    svg.append("g")
      .attr("transform", "translate(-5,0)")
      .call(d3.axisLeft(y0).tickSizeOuter(0));

    /////////////////////////////// second Y axis
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


    // d3.select(".totalpopulation")
    // .data(data)
    // .on("click", function(d){
    //     // is the element currently visible ?
    //     var currentOpacity = d3.selectAll("myCircles").style("opacity")
    //     // Change the opacity: from 0 to 1 or from 1 to 0
    //     d3.select(fertilityline).transition().style("opacity", currentOpacity == 1 ? 0:1)
    //     d3.select(populationarea).transition().style("opacity", currentOpacity == 1 ? 0:1)
    //     d3.select(populationdots).transition().style("opacity", currentOpacity == 1 ? 0:1)
    //     d3.select(populationlines).transition().style("opacity", currentOpacity == 1 ? 0:1)
    //   })
    // console.log(currentOpacity)
 
        // Add a legend (interactive)
  
  
          
        })
}

function chinapopulation(){
    var margin = {top: 10, right: 100, bottom: 30, left: 50},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chinapopulation")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    svg.append("rect")
    .attr("width", "110%")
    .attr("height", "100%")
    .attr("fill", "#e4e3e0")
    .attr("stroke","#f9f9f9")
    .attr("transform",
          "translate(-5, -36)");
d3.csv("comparepopulation.csv", function(data) {

var groupPopulation= ["America", "Canada", "UK","Brazil","India","Korea","Japan","Vietnam","Niger","France","German","Afghan"]
   
// Reformat the data: we need an array of arrays of {x, y} tuples
    var dataPopulation= groupPopulation.map( function(grpName) { // .map allows to do something for each element of the list
        return {
          name: grpName,
          values: data.map(function(d) {
            return {year: d.year, value: +d[grpName]};
          })
        };
      });
      
   
    // color palette
   
    var myColor = d3.scaleOrdinal()
    
      .domain(dataPopulation)
      .range(d3.schemeSet2)
  
      var x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.year; }))
      .range([ 0, width ]);
    // svg.append("g")
    //   .attr("transform", "translate(0," + (height+5) + ")")
    //   .call(d3.axisBottom(x).ticks(10).tickSizeOuter(0));

      
    //////////////////////////////// Add Y axis
    var y0 = d3.scaleLinear()
      .domain( [0, 1400 ])
      .range([ height, 0 ]);
    svg.append("g")
      .attr("transform", "translate(-5,0)")
      .call(d3.axisLeft(y0).tickSizeOuter(0));

    /////////////////////////////// second Y axis
    // var y1 =d3.scaleLinear()
    // .domain( [0, 10 ])
    // .range([ height, 0 ]);
    // svg.append("g")
    //   .attr("transform", "translate("+width+",0)")
    //   .call(d3.axisRight(y1).tickSizeOuter(0));

          // Add the lines
    var line = d3.line()
    .x(function(d) { return x(+d.year) })
    .y (function(d) { return y0(d.value); })
    // .y( height )
  svg.selectAll("myLines")
    .data(dataPopulation)
    .enter()
    .append("path")
    .attr("class", function(d){ return d.name })
      .attr("d", function(d){ return line(d.values) } )
      .attr("stroke", function(d){ return myColor(d.name) })
      .style("stroke-width", 4)
      .style("fill", "none")

      .transition()
      .duration(1000)
          
      // .attr("y", y(function(d) { return y(d.population) }))
      .delay(function(d,i) { return(i*10)} )

    // // Add the points
    // svg
    //   // First we need to enter in a group
    //   .selectAll("myDots")
    //   .data(dataPopulation)
    //   .enter()
    //     .append('g')
    //     .style("fill", function(d){ return myColor(d.name) })
    //     .attr("class", function(d){ return d.name })
    //   // Second we need to enter in the 'values' part of this group
    //   .selectAll("myPoints")
    //   .data(function(d){ return d.values })
    //   .enter()
    //   .append("circle")
    //     .attr("cx", function(d) { return x(d.year  )})
    //     .attr("cy", function(d) { return y0(d.value) } )
    //     .attr("r", 2)
    //     .attr("stroke", "white")
    svg
    .selectAll("myLabels")
    .data(dataPopulation)
    .enter()
      .append('g')
      .append("text")
        .attr("class", function(d){ return d.name })
        .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; }) // keep only the last value of each time series
        .attr("transform", function(d) { return "translate(" + x(d.value.year) + "," + y0(d.value.value) + ")"; }) // Put the text at the position of the last point
        .attr("x",  width+20) // shift the text a bit more right
        .text(function(d) { return d.name; })
        .style("fill", function(d){ return myColor(d.name) })
        .style("font-size", 15)


    })
}


function chinafertility(){

    var margin = {top: 10, right: 100, bottom: 30, left: 50},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#chinafertility")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


    svg.append("rect")
    .attr("width", "100%")
    .attr("height", "110%")
    .attr("fill", "#e4e3e0")
    .attr("transform",
    "translate(-5, -5)");
    d3.csv("comparefertility.csv", function(data) {

        var groupFertility= ["America", "Canada", "UK","Brazil","India","Korea","Japan","Vietnam","Niger","France","German","Afghan"]
           
        // Reformat the data: we need an array of arrays of {x, y} tuples
            var dataFertility= groupFertility.map( function(grpName) { // .map allows to do something for each element of the list
                return {
                  name: grpName,
                  values: data.map(function(d) {
                      
                    return {year: d.year, value: +d[grpName]};
                  })
                };
              });
              
           
            // color palette
           
            var myColor = d3.scaleOrdinal()
            
              .domain(dataFertility)
              .range(d3.schemeSet2)
          
              var x = d3.scaleTime()
              .domain(d3.extent(data, function(d) { return d.year; }))
              .range([ 0, width ]);
            svg.append("g")
              .attr("transform", "translate(2," + (height+5) + ")")
              .call(d3.axisBottom(x).ticks(10).tickSizeOuter(0));
        
              
            //////////////////////////////// Add Y axis
            var y0 = d3.scaleLinear()
              .domain( [0, 1400 ])
              .range([ height, 0 ]);
            svg.append("g")
              .attr("transform", "translate(-5,0)")
              .call(d3.axisLeft(y0).tickSizeOuter(0));
        
            /////////////////////////////// second Y axis
            var y1 =d3.scaleLinear()
            .domain( [0, 10 ])
            .range([ height, 0 ]);
            svg.append("g")
              .attr("transform", "translate("+width+",0)")
              .call(d3.axisRight(y1).tickSizeOuter(0));
        
                  // Add the lines
            var line = d3.line()
            .x(function(d) { return x(+d.year) })
            .y(function(d) { return y1(+d.value) })
          svg.selectAll("myLines")
            .data(dataFertility)
            .enter()
            .append("path")
            .attr("class", function(d){ return d.name })
              .attr("d", function(d){ return line(d.values) } )
              .attr("stroke", function(d){ return myColor(d.name) })
              .style("stroke-width", 4)
              .style("fill", "none")
        console.log(dataFertility)
            // // Add the points
            svg
              // First we need to enter in a group
              .selectAll("myDots")
              .data(dataFertility)
              .enter()
                .append('g')
                .style("fill", function(d){ return myColor(d.name) })
                .attr("class", function(d){ return d.name })
              // Second we need to enter in the 'values' part of this group
              .selectAll("myPoints")
              .data(function(d){ return d.values })
              .enter()
              .append("circle")
                .attr("cx", function(d) { return x(d.year  )})
                .attr("cy", function(d) { return y1(d.value) } )
                .attr("r", 2)
                .attr("stroke", function(d){ return myColor(d.name) })
        //                 .on("mouseover", mouseover)
        //   .on("mousemove", mousemove)
        //   .on("mouseleave", mouseleave)
          ///////////////////////////controal visibility//////////////////////
          
        //   var Tooltip = d3.select("#data-population")
        //   .append("div")
        //   .style("opacity", 0)
        //   .attr("class", "tooltip")
        //   .style("background-color", "white")
        //   .style("border", "solid")
        //   .style("border-width", "2px")
        //   .style("border-radius", "5px")
        //   .style("padding", "5px")
      
        // // Three function that change the tooltip when user hover / move / leave a cell
        // var mouseover = function(d) {
        //   Tooltip
        //     .style("opacity", 1)
        //   d3.select(this)
        //     .style("stroke", "black")
        //     .style("opacity", 1)
        // }
        // var mousemove = function(d) {
        //   Tooltip
        //     .html(d.year+ "," + d.value)
        //     .style("left", (d3.mouse(this)[0]+70) + "px")
        //     .style("top", (d3.mouse(this)[1]) + "px")
        // }
        // var mouseleave = function(d) {
        //   Tooltip
        //     .style("opacity", 0)
        //   d3.select(this)
        //     .style("stroke", "none")
        //     .style("opacity", 0.8)
        // }
      
      
        // // add the squares
        // svg.selectAll()
        //   .data(data, function(d) {return d.group+':'+d.variable;})
        //   .enter()
        //   .append("rect")
        //     .attr("x", function(d) { return x(d.year) })
        //     .attr("y", function(d) { return y1(d.value) })
        //     .attr("rx", 4)
        //     .attr("ry", 4)
        //     // .attr("width", x.bandwidth() )
        //     // .attr("height", y.bandwidth() )
        //     .style("fill", function(d) { return myColor(d.name)} )
        //     .style("stroke-width", 4)
        //     .style("stroke", "none")
        //     .style("opacity", 0.8)
        //   .on("mouseover", mouseover)
        //   .on("mousemove", mousemove)
        //   .on("mouseleave", mouseleave)
    
         // Add a label at the end of each line
    svg
    .selectAll("myLabels")
    .data(dataFertility)
    .enter()
      .append('g')
      .append("text")
        .attr("class", function(d){ return d.name })
        .datum(function(d) { return {name: d.name, value: d.values[d.values.length - 1]}; }) // keep only the last value of each time series
        .attr("transform", function(d) { return "translate(" + x(d.value.year) + "," + y1(d.value.value) + ")"; }) // Put the text at the position of the last point
        .attr("x",  width+20) // shift the text a bit more right
        .text(function(d) { return d.name; })
        .style("fill", function(d){ return myColor(d.name) })
        .style("font-size", 15)


            
    // svg
    //   .selectAll("myLegend")
    //   .data(dataFertility)
    //   .enter()
    //     .append('g')
    //     .append("text")
    //       .attr('x', width+10)
    //       .attr('y', 30)
    //       .text("Compare")
    //       .style("fill", "#ffffff" )
    //       .style("font-size", 15)
    //     .on("click", function(d){
    //       // is the element currently visible ?
    //       currentOpacity = d3.selectAll("myLines").style("opacity")
    //       // Change the opacity: from 0 to 1 or from 1 to 0
    //       d3.selectAll("myLines").transition().style("opacity", currentOpacity == 1 ? 0:1)

    //     })
    })
}
//////////////////////////////////////vertical graph//////////////////////

function myResponsiveComponent(container,props){
  const {width, height} =props;

  let svg=container.selectAll('svg').data([null]);
    svg=svg.enter().append('svg')
            .merge(svg)
              .attr('width',width)
              .attr('height',height);




      const rect=svg.selectAll('rect').data([null]);
      rect
      .enter().append('rect')
      .attr('rx',100)
      .merge(rect)
        .attr('width', width)
          .attr('height',height);
          
}

function render(){
  myResponsiveComponent(d3.select('#verticalgraph'),{
    width: document.body.clientWidth,
    height: document.body.clientHeight
  });
}

render();
window.addEventListener('resize', render);






function verticalgraph(){
// set the dimensions and margins of the graph
var margin = {top: 30, right: 100, bottom: 30, left: 160},
    width= 800 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#verticalgraph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          
// Read the data

d3.csv("agedistribution.csv",
    
  // When reading the csv, I must format variables:
  function(d){
    return { year: d3.timeParse("%Y")(d.year), 
    femalepopulation:d.femalepopulation,
    totalpopulation : d.totalpopulation, 
    fertility:d.fertility }
  },function(data) {

 // //////////////////////////////Add X axis --> it is a date format
 var c2x = d3.scaleLinear()
 .domain([0,1500])
 .range([ width, 0 ]);
svg.append("g")
 .attr("transform", "translate(0,0)")
 .call(d3.axisTop(c2x).tickSizeOuter(0)
 .tickSize(-height - margin.bottom).ticks(15)
//  .tickFormat(formatTick)

 )
.call(g => g.select(".domain")
 .remove())
.call(g => g.selectAll(".tick:not(:first-of-type) line")
 .attr("stroke-opacity", 0.5)
 .attr("stroke-dasharray", "4,2"))
.call(g => g.selectAll(".tick text")
 .attr("x", 4)
 .attr("dy", -4))
 ;
//  function formatTick(d) {
//     const s = (d / 1e6).toFixed(0);
//     return this.parentNode.nextSibling ? `\xa0${s}` : `${s} million`;
//   }
//////////////////////////////// Add Y axis
var y = d3.scaleTime()
.domain(d3.extent(data, function(d) { return d.year; }))
.range([ 0, height ]);
svg.append("g")
.attr("transform", "translate(500,0)")
.call(d3.axisRight(y)
.ticks(10).tickSizeOuter(0));
  

        
        
/////////////////////////////// Add the population line////////////

  svg.append("path")
  .datum(data)
  .attr("fill", "none")
  .attr("stroke", "#9e8fba")
  .attr("stroke-width", 4)
  .attr("d", d3.line()
    .x(width)
    .y(function(d) { return y(d.year) }))

    .transition()
    .duration(1000)
    .attr("d", d3.line()
        .x(function(d) { return c2x(d.totalpopulation) })
        .y (function(d) { return y(d.year); }))
    // .attr("y", y(function(d) { return y(d.population) }))
    .delay(function(d,i) { return(i*10)} )
   
  ///////////////////////////// Add the popultion area//////////////
  svg.append("path")
      .datum(data)
      .attr("fill", "#9e8fba")
      .attr("fill-opacity", 1)
      .attr("stroke", "none")
      // .attr("opacity", "0.8")
      .attr("d", d3.area()
         .x0(width)
         .x1(width)
        //  .x1(width)
        .y(function(d) { return y(d.year) }))
        

        .transition()
        .duration(1000)
        // .attr("y0", height )
        .attr("d", d3.area()
        .x0(width)
        .x1(function(d) { return c2x(d.totalpopulation) })
        .y (function(d) { return y(d.year); }))
       
        .delay(function(d,i) { return(i*10)})  
  
 // ////////////////////////////female population///////////////////

svg.append("path")
.datum(data)
.attr("fill", "none")
.attr("stroke", "#d1adba")
.attr("stroke-width", 4)
.attr("d", d3.line()
  .x(width)
  .y(function(d) { return y(d.year) }))
  
  .transition()
  .duration(1000)
  .attr("d", d3.line()
      .x(function(d) { return c2x(d.femalepopulation) })
      .y (function(d) { return y(d.year); }))
  // .attr("y", y(function(d) { return y(d.population) }))
  .delay(function(d,i) { return(i*10)} )



///////////////////////////// Add the female popultion area//////////////
svg.append("path")
  .datum(data)
  .attr("fill", "#d1adba")
  .attr("fill-opacity", 1)
  .attr("stroke", "none")
  .attr("d", d3.area()
    .x0(width)
     .x1( width)
    .y(function(d) { return y(d.year); }))
    
    .transition()
    .duration(1000)
    // .attr("y0", height )
    .attr("d", d3.area()
    .x0(width)
    .x1(function(d) { return c2x(d.femalepopulation) })
    .y (function(d) { return y(d.year); }))
   
    .delay(function(d,i) { return(i*10)})   

    




})
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
    // canvas.style.border= "5px dotted orange";
    var myWidth=window.innerWidth;
    var myHeight=window.innerHeight ;
    ctx.canvas.width= myWidth;
    ctx.canvas.height= myHeight;
    
}