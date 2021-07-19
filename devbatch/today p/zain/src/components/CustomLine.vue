<template>
  <div>
    <div id="d3-container-line">
      <div row="md-2">
        <div col="md-6">
        <svg id="graph" viewBox="0 0 900 200" preserveAspectRatio="xMinYMin meet" width="600" height="200"></svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as d3 from "d3";

export default {
  name: "CustomLine",
  mounted() {
    var margin = { top: 20, right: 20, bottom: 50, left: 70 },
      width = 900 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

   
    var parseTime = d3.timeParse("%d-%b-%y");

  
    var x = d3.scaleTime().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

   
    var valueline = d3
      .line()
      .x(function (d) {
        return x(d.date);
      })
      .y(function (d) {
        return y(d.close);
      });

   
    var svg = d3
      .select("#d3-container-line")
      .append("svg")
      .select("#graph")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  
    d3.csv("data.csv").then(function (data) {
     
      data.forEach(function (d) {
        console.log(d)
        d.date = parseTime(d.date);
        d.close = +d.close;
      });

    
      x.domain(
        d3.extent(data, function (d) {
          return d.date;
        })
      );
      y.domain([
        0,
        d3.max(data, function (d) {
          return d.close;
        }),
      ]);

   
      svg
        .append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueline);

      // Add the x Axis
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // Add the y Axis
      svg.append("g").call(d3.axisLeft(y));
    });
  },
};
</script>
<style>
.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
  
}


</style>
