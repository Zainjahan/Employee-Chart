<template>
  <div id="dat1"></div>
</template>
<script>
import * as d3 from "d3";
export default {
  mounted() {
    const headers = { "Content-Type": "application/json" };
    fetch("z.json", { headers })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const margin = { top: 50, bottom: 50, left: 50, right: 50 },
          width = 1120 - margin.left - margin.right,
          height = 400 - margin.top - margin.bottom;

        let roles=[];
        data.forEach((d)=>{
          d.roles.forEach((d1)=>{
            roles.push(d1.role);
          });
        });
        console.log(roles);

        
      let companies=[];
      data.forEach((d)=>{
        companies.push(d.company);
      });
      console.log(companies);


      let months=[];
      data.forEach((d)=>{
        d.roles.forEach((d2)=>{
           d2.months.forEach((d3)=>{
             months.push(d3.month.split('-')[0]);
           }
           );
        });
      });
      console.log(months);



        const svgWidth = width + margin.left + margin.right;

        const svg = d3
          .select("#dat1")
          .append("svg")
          .attr("width", svgWidth)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.left + "," + margin.top + ")"
          );

        const x0 = d3.scaleBand().domain(companies).range([60, svgWidth]);
        svg
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.top + "," + margin.right + ")"
          )
          .call(d3.axisBottom(x0));

        const x1 = d3.scaleBand().domain([months]).range([20,x0.bandwidth()]);

        svg
          .append("g")
          .attr(
            "transform",
            "translate(" + margin.bottom + "," + margin.top + ")"
          )
          .call(d3.axisBottom(x1).tickSizeInner(-300 + 300 + 290)

);


        const y1 = d3.scaleBand().domain([roles]).range([0, height]);

        svg
          .append("g")
          .attr(
            "transform",
            "translate(" + 100+ "," + 100 + ")"
          )
          .call(d3.axisLeft(y1));

        
        svg
          .selectAll(".company")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "company")
          .attr("x", (d) => {
            console.log(d.company);
            return x0(d.company);
          })
          
          .attr("y", 50)
      
        .attr("transform",(d,i)=>{
            const x=i*40;
            return "translate("+x+",10)";
        })
          .attr("width", x0.bandwidth())
          .attr("height", 70)
          .attr("fill", "#0000ff");

        svg
          .append("circle")
          .attr("cx", "100")
          .attr("cy", "80")
          .attr("r", "20")
          .style("fill", "red");

        svg
          .append("circle")
          .attr("cx", "140")
          .attr("cy", "110")
          .attr("r", "20")
          .style("fill", "teal");

        svg
          .append("circle")
          .attr("cx", "170")
          .attr("cy", "140")
          .attr("r", "20")
          .style("fill", "teal");

        

        svg.append("text").attr("x", 100).attr("y", 50).text("");
      });
  },
};
</script>
<style scoped>
</style>