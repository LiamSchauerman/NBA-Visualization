var container = d3.select('#halfCourt')
	.append('svg')
		.attr('width', 1455)
		.attr('height', 1365);
		// .attr('class', 'image')
var court = container.append('rect')
	.attr('width', 1455)
	.attr('height', 1365);
