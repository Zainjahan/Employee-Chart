<template>
    <div></div>
</template>
<script>
import * as d3 from 'd3';
export default {
    mounted(){

d3.csv("amounts.csv").then(function(data) {
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

  data.forEach(function(d) {
    d.amounts = +d.amounts;
 

  
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.amounts; })]);

  
  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.name); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.amounts); })
      .attr("height", function(d) { return height - y(d.amounts); });

  
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  
  svg.append("g")
      .call(d3.axisLeft(y));
 });
});
    }
}
</script>
<style  scoped>

</style>