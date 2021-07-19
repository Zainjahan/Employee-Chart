<template>
   <div id="dat1"></div> 
</template>
<script>
import * as  d3 from "d3";
export default {
    name:'MainComponent',
    methods:{
        createsvg(){
            var data = [[5,3], [10,17], [15,4], [2,8]];
   
    const margin = {top: 20, right: 15, bottom: 60, left: 60},
      width = 960 - margin.left - margin.right,
       height = 500 - margin.top - margin.bottom;
    
    const x = d3.scale.linear()
              .domain([0,d3.max(data,function(d){return d[0];})])
              .range([0,width]);
    
    const y = d3.scale.linear()
    	      .domain([0,d3.max(data,function(d){return d[1];})])
    	      .range([height,0]);
 
    const chart = d3.select('body')
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    const main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')   
        
    
    const xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'main axis date')
	.call(xAxis);

    
    const yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'main axis date')
	.call(yAxis);

    const g = main.append("svg:g"); 
    
    g.selectAll("scatter-dots")
      .data(data)
      .enter().append("svg:circle")
          .attr("cx", function (d) { return x(d[0]); } )
          .attr("cy", function (d) { return y(d[1]); } )
          .attr("r", 8);

        }
    }
    
    }

</script>
<style scoped>

.main text {
    font: 10px sans-serif;	
}

.axis line, .axis path {
    shape-rendering: crispEdges;
    stroke: black;
    fill: none;
}

circle {
    fill: steelblue;
}
</style>