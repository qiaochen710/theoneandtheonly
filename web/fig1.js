var canvas;
var ctx;
var w=1000;
var h=600;

setUpFig1();

// chart
chart = {
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .style("overflow", "visible");
  
    svg.append("g")
        .call(xAxis);
  
    svg.append("g")
        .call(yAxis);
  
    const path = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
      .selectAll("path")
      .data(data.series)
      .join("path")
        .style("mix-blend-mode", "multiply")
        .attr("d", d => line(d.values));
  
    svg.call(hover, path);
  
    return svg.node();
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





function setUpFig1(){
    canvas= document.querySelector("#fig1");
    ctx= canvas. getContext("2d")
    canvas.style.border= "5px dotted gray";
    canvas.width= 0.4* w;
    canvas.height=0.4* h;  
    
    
}

