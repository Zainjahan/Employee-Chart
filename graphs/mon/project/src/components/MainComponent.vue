<template>
    <div id="dat1"></div>
</template>
<script>
import *as d3 from 'd3';
export default {
    mounted(){
        const headers={"Content-type":"application/json"};
        fetch("z.json",{headers})
        .then((response)=>response.json())
        .then((data)=>{
    data.forEach(function(d) {                              
    d.xGrliveArea =+d.xGrliveArea;                         
    d.ySalePrice= +d.ySalePrice;                                 
});
         console.log(data);

      var random= Math.random()*10;
      console.log(random);

     const margin={top:50,right:50,bottom:50,left:50},
        width=460-margin.left-margin.right,
        height=400-margin.top-margin.bottom;

        const svg=d3.selectAll("#dat1")
        .append("svg")
        .attr("width",width+margin.left+margin.right)
        .attr("height",height+margin.top+margin.bottom)
        .append("g")
        .attr("transform",
        "translate("+margin.left+","+margin.top+")");
            console.log(data);

            const x=d3.scaleLinear()
            .domain([0,10])
            .range([0,width]);
            svg.append("g")
            .attr("transform","translate(0,"+height+")")
            .call(d3.axisBottom(x));

            const y=d3.scaleLinear()
            .domain([0,10])
            .range([height,0]);
            svg.append("g")
            .call(d3.axisLeft(y));
      
            svg.select('.g-circle')
            .data(data)
            .enter()
            .append('g')
            .attr('class','g-circle')
            .append('circle')
            .attr('width',100)
            .attr('height',100)
            .attr('fill','#ff0000')
            .attr('x',5)
            .attr('y',5)
            
            

            

            svg.append('g')
            .selectAll("dot")
            .data(data)
             .enter()
             .append("circle")
             .attr("cx",function(d){return x(d.GrLiveArea);})
             .attr("cy",function(d){return y(d.SalePrice);})
             .attr("r",function(d){
                 console.log(d);
                 return Math.floor(Math.random()*10)+5;
                 })
                 .attr('r',40)
             .style("fill","red")
             .transition()
             .duration(2000)
             .attr('cx',550)
             .attr('r',80)
             .style("fill","red")
             
            
            svg.append('g')
            .selectAll("text")
            .data(data)
             .enter()
             .append("text")
             .attr("x",function(d){return x(d.GrLiveArea);})
             .attr("y",function(d){return y(d.SalePrice);})
             .style("fill","Blue")
             .text(function(d){return d.SalePrice})
             

        })
    }
}
</script>
<style scoped>

</style>