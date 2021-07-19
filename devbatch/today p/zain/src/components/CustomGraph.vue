<template>
  <div style="text-align: left">
    <h1>D3.js Barchart</h1>
    <div id="d3-container-graph" >
      <div row="md-2">
      <div col="md-6">
       <svg id="graph" viewBox="0 0 900 300" preserveAspectRatio="xMinYMin meet" width="900" height="300"></svg>
      </div>
      </div>
    </div>
    
  </div>
    
</template>
<script>
import * as d3 from "d3";
export default {
  name: "CustomGraph",
  mounted() {
    var margin = { top: 20, right: 20, bottom: 50, left: 70  },
      width = 900 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    
    var x = d3.scaleBand().range([0, width]).padding(0.1);
    var y = d3.scaleLinear().range([height, 0]);

   
    var svg = d3
      .select("#d3-container-graph")
      .append("svg")
      .select("#graph")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    
    d3.csv("sales.csv").then(function (data) {
     
      data.forEach(function (d) {
        d.sales = +d.sales;
      });

     
      x.domain(
        data.map(function (d) {
          return d.salesperson;
        })
      );
      y.domain([
        0,
        d3.max(data, function (d) {
          return d.sales;
        }),
      ]);

   
      svg
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
          return x(d.salesperson);
        })
        .attr("width", x.bandwidth())
        .attr("y", function (d) {
          return y(d.sales);
        })
        .attr("height", function (d) {
          return height - y(d.sales);
        });

    
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

     
      svg.append("g").call(d3.axisLeft(y));
    });
  },
};
</script>
<style scoped>
.bar {
  fill: gray;
}

*{
  box-sizing: border-box;
}
 
    

</style>