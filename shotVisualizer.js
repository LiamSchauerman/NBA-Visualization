var courtWidth = 873;
var courtHeight = 819;

var container = d3.select(".something").append("svg")
		.attr('width', courtWidth)
		.attr('height', courtHeight);

var court = container.append('rect')
	.attr('width', courtWidth)
	.attr('height', courtHeight)
	.attr('class','court')
	.attr('opacity',0);

var Shot = function() {
this.x = 0;
this.y = 0;
this.node = container.append('circle')
              .attr('fill','purple')
              .attr('r',8.7)
              .attr('cx',this.x * 17.4)
              .attr('cy',this.y * 17.4)
              .attr('class','shot')
}


for(var i=0; i < shotsFullGame.length; i++) {
  new Shot();
}



d3.selectAll('.shot').data(shotsFullGame)
  .transition()
    .duration(2500)
    .attr('cx',function(d) {console.log(d.x); return d.x * 17.4;})
    .attr('cy',function(d) {console.log(d.y); if(d.y > 47) {d.y = 94 - d.y;} return courtHeight - (d.y * 17.4);})
    .attr('fill',function(d) {
      if(d.result === 'made') {
        return 'blue';
      } else {
        return purple;
      }});





