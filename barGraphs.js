// Creating bar graphs

// var margin = {top: 20, right: 40, bottom: 10, left: 40}
//     width = 960,
//     height = 250 - margin.top - margin.bottom;

// var x = d3.scale.linear()
//     .range([0, width]);

// var format = d3.format(".1%")


// var y = d3.scale.ordinal()
//     .rangeRoundBands([0, height], .1);

// var xAxis = d3.svg.axis()
//     .scale(x)
//     .orient("top")
//     .tickSize(-height - margin.bottom)

// var svg = d3.select("#chart").append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .style("margin-left", -margin.left + "px")
//   .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// svg.append("g")
//     .attr("class", "x axis");


// var allNetsShots = getPlayerShotsByTeam('Brooklyn Nets', allShots)
// adding bars
// d3.select('#chart').append('svg')

// var barGraphUpdate = function(data){
// // JOIN
//   var bars;
//   bars = d3.select("#chart").selectAll("div")
//         .data(data)
//   console.log(data)

// //ENTER
//   bars.enter().append("div")
//   	.style({
//   		// x: margin.left + 'px',
//     	width: function(d) { return d.shotsMade * 30 + "px"; },
//       // height: '30px',
//       // backgroundcolor: 'steelblue'
//     })
//     .text(function(d) {return d.name})
//     .attr("class", 'bar')


// }; // end barGraphUpdate();


// barGraphUpdate(netsPlayersShots);

// var menu = d3.select("#menu select")
//     .on("change", change);

// d3.csv("states-age.csv", function(data) {
//   states = data;

  // var ages = d3.keys(states[0]).filter(function(key) {
  //   return key != "State" && key != "Total";
  // });

  // states.forEach(function(state) {
  //   ages.forEach(function(age) {
  //     state[age] = state[age] / state.Total;
  //   });
  // });

  // menu.selectAll("option")
  //     .data(ages)
  //   .enter().append("option")
  //     .text(function(d) { return d; });

  // menu.property("value", "18 to 24 Years");

  // redraw();
// });
/*
function redraw() {
  var age1 = menu.property("value"),
      top = states.sort(function(a, b) { return b[age1] - a[age1]; }).slice(0, 10);

  y.domain(top.map(function(d) { return d.State; }));

  var bar = svg.selectAll(".bar")
      .data(top, function(d) { return d.State; });

  var barEnter = bar.enter().insert("g", ".axis")
      .attr("class", "bar")
      .attr("transform", function(d) { return "translate(0," + (y(d.State) + height) + ")"; })
      .style("fill-opacity", 0);

  barEnter.append("rect")
      .attr("width", age && function(d) { return x(d[age]); })
      .attr("height", y.rangeBand());

  barEnter.append("text")
      .attr("class", "label")
      .attr("x", -3)
      .attr("y", y.rangeBand() / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .text(function(d) { return d.State; });

  barEnter.append("text")
      .attr("class", "value")
      .attr("x", age && function(d) { return x(d[age]) - 3; })
      .attr("y", y.rangeBand() / 2)
      .attr("dy", ".35em")
      .attr("text-anchor", "end");

  x.domain([0, top[0][age = age1]]);

  var barUpdate = d3.transition(bar)
      .attr("transform", function(d) { return "translate(0," + (d.y0 = y(d.State)) + ")"; })
      .style("fill-opacity", 1);

  barUpdate.select("rect")
      .attr("width", function(d) { return x(d[age]); });

  barUpdate.select(".value")
      .attr("x", function(d) { return x(d[age]) - 3; })
      .text(function(d) { return format(d[age]); });

  var barExit = d3.transition(bar.exit())
      .attr("transform", function(d) { return "translate(0," + (d.y0 + height) + ")"; })
      .style("fill-opacity", 0)
      .remove();

  barExit.select("rect")
      .attr("width", function(d) { return x(d[age]); });

  barExit.select(".value")
      .attr("x", function(d) { return x(d[age]) - 3; })
      .text(function(d) { return format(d[age]); });

  d3.transition(svg).select(".x.axis")
      .call(xAxis);
}*/

