var container = d3.select('body')
	.append('svg')
		.attr('width', 1600)
		.attr('height', 1400);

var court = container.append('rect')
	.attr('width', 1455)
	.attr('height', 1365)
	.attr('fill','blue');
	.attr('class','court');

var Shot = function() {
this.x = 10;
this.y = 10;
this.node = container.append('circle')
              .attr('fill','blue')
              .attr('r',14.55)
              .attr('cx',this.x * 29.1)
              .attr('cy',this.y * 29.1)
              .attr('class','shot')
}


for(var i=0; i < shotsFullGame.length; i++) {
  new Shot();
}

d3.selectAll('shot').data(shotsFullGame)
  .transition()
    .duration(2500)
    .attr('cx',function(d) {return d.x;})
    .attr('cy',function(d) {return d.y;});





