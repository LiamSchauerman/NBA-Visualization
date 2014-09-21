$(document).ready(function(){

var courtWidth = 873;
var courtHeight = 819;

var container = d3.select(".something")
  .append("svg")
    .attr('width', courtWidth)
    .attr('height', courtHeight);

var removeShots = function(){
  console.log('Removing Shots');
    d3.selectAll('circle')
    .transition()
      .duration(100)
      .style('opacity', '0')
    .remove();
  console.log('Shots Removed');
}

//generage circle elements inside container
var generate = function(){
  for( var i = 0; i<150; i++) {
    container.append('circle');
  }
}

var newUpdate = function(data) {
d3.selectAll('circle')
  .data(data)
  .attr({
        r: 5,
        cx: function(d) {return d.x * 17.4;},
        cy: function(d) {if(d.y > 47) {d.y = 94 - d.y;} return courtHeight - (d.y * 17.4);},
        fill: function(d) { return d.result === 'made' ? 'green' : 'red'; },
        team: function(d) { return d.team },
        player: function(d) { return d.player },
        period: function(d) { if(d.period <5){return "Q"+d.period} else {return "OT"}  },
        minuteNum: function(d) { return d.minute },
        secondNum: function(d) { return d.second },
        minute: function(d) {return d.minute.toString();},
        second: function(d) {return d.second < 10 ? d.second.toString() : d.second;},
        assist: function(d) { return d.assist },
        distance: function(d) { return d.distance },
        result:  function(d) { return d.result }
      })
  .exit().remove();
}


//update the circle elements with data


/*
var update = function(data) {
  console.log('Updating Court');

  var randomX = Math.random()*47*17.4;
  var randomY = Math.random()*50*17.4;



  // DATA JOIN
  // Join new data with old elements, if any.
  var shots = d3.select('svg').selectAll('circle').data(data);

  // ENTER
  // Creating new elements as needed
  shots.enter().append('circle')
      .attr('class', 'shot')
      .attr('cx',randomX)
      .attr('cy',randomY)
    .transition()
      .duration(1000)
      .attr({
        r: 5,
        cx: function(d) {return d.x * 17.4;},
        cy: function(d) {if(d.y > 47) {d.y = 94 - d.y;} return courtHeight - (d.y * 17.4);},
        fill: function(d) { return d.result === 'made' ? 'green' : 'red'; },
        team: function(d) { return d.team },
        player: function(d) { return d.player },
        period: function(d) { if(d.period <5){return "Q"+d.period} else {return "OT"}  },
        minuteNum: function(d) { return d.minute },
        secondNum: function(d) { return d.second },
        minute: function(d) {return d.minute.toString();},
        second: function(d) {return d.second < 10 ? d.second.toString() : d.second;},
        assist: function(d) { return d.assist },
        distance: function(d) { return d.distance },
        result:  function(d) { return d.result }
      });
} //end update

*/
generate();
newUpdate(shotsFullGame);


var findShotsByTeam = function(teamName) {
  var teamShots = [];
  for (var i=0; i<shotsFullGame.length; i++) {
    if(shotsFullGame[i].team === teamName ) {
      // console.log(shotsFullGame[i])
      teamShots.push(shotsFullGame[i]);
    }
  }
  console.log(teamName);
  console.log(teamShots);
  return teamShots;
}


$('button.bobcats').on('click', function(){
// loading shots for the Bobcats only
  removeShots();
  generate();
  newUpdate(findShotsByTeam('Charlotte Bobcats'));
});

$('button.nets').on('click', function(){
// loading shots for the Nets only
  removeShots();
  generate();
  newUpdate(findShotsByTeam("Brooklyn Nets"));
});

$('.something').on('mouseover', 'circle', function(){
  console.log('mouseover');
  var player = $(this).attr('player');
  var assist = $(this).attr('assist');

  $(this).attr('stroke','yellow');
  $(this).attr('stroke-width', '4');
  var tool = $('.tooltip');
  var toolhtml = '<strong>'+player+'</strong>';
  if(assist.length >0 ) {
    toolhtml += '<br/> assisted by '+ assist;
  }
  toolhtml += '<br/>'+$(this).attr('period')+' '+$(this).attr('minute')+":"+$(this).attr('second');
  tool.html(toolhtml);
  var w = parseInt($('.tooltip').css('width'));
  var h = parseInt($('.tooltip').css('height'));
  var newY = ($(this).attr('cy')-40-h).toString()+'px';
  $('.tooltip')
    .css('opacity', 1)
    .css('top', newY)
    .css('left', ($(this).attr('cx') - (w*.5)).toString()+'px');
  //top will be $(this).cy +100
  // left will be cx -w/2
    // .css('top', '50px')
    // .css('left', '200px')

});

$('.something').on('mouseleave', 'circle', function(){
  $(this).attr('stroke-width', '0');
  $('.tooltip').css({"opacity":0, 'top':0});
});

});
