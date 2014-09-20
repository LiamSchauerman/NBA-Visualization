$(document).ready(function(){



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

var viewByTeam = function(teamName) {

}

// var Shot = function() {
// this.x = 0;
// this.y = 0;
// this.node = container.append('circle')
//               .attr('fill','purple')
//               .attr('r',8.7)
//               .attr('cx',this.x * 17.4)
//               .attr('cy',this.y * 17.4)
//               .attr('class','shot')
// }


// for(var i=0; i < shotsFullGame.length; i++) {
//   new Shot();
// }
var update = function(data) {

// DATA JOIN
// Join new data with old elements, if any.
var shots = container.selectAll('.shot').data(data);

// UPDATE
// Update old elements as needed.
  shots.attr("class", "shot");

// ENTER
// Creating new elements as needed
  shots.enter().append('circle')
      .attr('class', 'shot')
      .attr('cx',0)
      .attr('cy',0)
    .transition()
      .duration(1000)
      .attr({
        r: 8.7,
        cx: function(d) {return d.x * 17.4;},
        cy: function(d) {if(d.y > 47) {d.y = 94 - d.y;} return courtHeight - (d.y * 17.4);},
        fill: function(d) { return d.result === 'made' ? 'green' : 'red'; },
        player: function(d) { return d.player },
        period: function(d) { return d.period },
        minute: function(d) { return d.minute },
        second: function(d) { return d.second },
        assist: function(d) { return d.assist },
        distance: function(d) { return d.distance },
        result:  function(d) { return d.result }
      });

}
update(shotsFullGame)

$('circle').on('mouseover', function(){
  var player = $(this).attr('player');
  var assist = $(this).attr('assist');
  console.log(assist);
  console.log(assist.length);

  $(this).attr('stroke','yellow');
  $(this).attr('stroke-width', '4');
  var tool = $('.tooltip');
  var toolhtml = '<strong>'+player+'</strong>';
  if(assist.length >0) {
    toolhtml += '<br/> assisted by '+ assist;
  }
  tool.html(toolhtml);
  console.log(tool);
  var w = parseInt($('.tooltip').css('width'));
  console.log(w);
  $('.tooltip') // populating tooltip
    .css('opacity', 1)
    .css('top', '50px')
    .css('left', '200px')
    // .css('top', ($(this).attr('cy')+200).toString()+'px')
    // .css('left', ($(this).attr('cx') - (w*.5)).toString()+'px')

});

$('circle').on('mouseleave', function(){
  $(this).attr('stroke-width', '0');
  $('.tooltip').css("opacity", 0);
});


});
