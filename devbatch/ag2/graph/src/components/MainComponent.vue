<template>
  <div id="dat1"></div>
</template>
<script>
import * as d3 from "d3";
export default {
  name: "MainComponent",
  mounted() {
      this.createSvg();
    },
  methods: {
    createSvg() {
      d3.json("data.json", function (data) {
          console.log(data);

        const margin = { top: 10, bottom: 30, left: 60, right: 30 },
          width = 460 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

        const svg = d3
          .select("#dat1")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform",
          "translate("+margin.left+","+margin.top+")");

        const yScale = d3
          .scaleBand()
          .domain([0,8])
          .range([0, height])
          .padding(0.4);
          svg.append("g")
          .call(d3.axisLeft(yScale));

        const xScale =d3
        .scaleBand()
        .domain(function(){return data})
        .range([0,width])
        svg.append("g")
        .attr("transform",
        "translate(0,"+height+")")
        .call(d3.axisBottom(xScale))

    svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function () { return xScale(data); } )
      .attr("cy", function () { return yScale(data); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")


        
      });
   }    
 },
};
</script>
<style scoped>
</style>