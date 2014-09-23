$(document).ready(function(){

var courtWidth = 873;
var courtHeight = 819;

var container = d3.select(".court") // container is our outer svg element
  .append("svg")
    .attr('width', courtWidth)
    .attr('height', courtHeight);

// general update function
  // first JOINs data to 
var update = function(data) {
  // passes data into svg element
  var circles = d3.select('.court svg').selectAll('circle')
      .data(data)

      //JOIN
      circles.attr({
        class: 'shot',
        cy: 0,
        r: 0})
      .transition()
        .duration(2000)
        .attr({
          r: 6,
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


    // ENTER for creating elements
    circles.enter().append('circle')
      .attr({
        cy: 1200,
        class: 'shot',
        r: 0})
    .transition()
      .duration(2000)
      .attr({
        r: 6,
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

      circles.exit()
        .transition()
          .duration(1000)
          .attr({
            r: 20,
            opacity: 0
          })
      .remove()
  // EXIT
  //

}; //end update


update(allShots);


var findShotsByTeam = function(teamName, data) { //creates an array of one team's shots
  var teamShots = [];
  for (var i=0; i<data.length; i++) {
    if(data[i].team === teamName ) {
      teamShots.push(data[i]);
    }
  }
  return teamShots;
}

//filtering by period
var filterShotsByPeriod = function(period, data) {
  var results = [];
  for (var i=0; i<data.length; i++) {
    if(data[i].period === period ) {
      results.push(data[i]);
    }
  }  
  return results;
};

$('button.period').on('click', function(){
  var value = $(this).html();
  var period;
  if(value === "Q1") {
    period = 1
  } else if (value === "Q2") {
    period = 2
  } else if (value === "Q3") {
    period = 3
  } else if (value === "Q4") {
    period = 4
  } else if (value === "Overtime") {
    period = 5
  }
  console.log(period)
  update(filterShotsByPeriod(period, allShots))
});

$('button.bobcats').on('click', function(){
// loading shots for the Bobcats only
  update(findShotsByTeam('Charlotte Bobcats', allShots));
});

$('button.nets').on('click', function(){
// loading shots for the Nets only
  update(findShotsByTeam("Brooklyn Nets", allShots));
});

$('button.viewAll').on('click', function(){
// loading shots for the Nets only
  update(allShots);
});

$('.court').on('mouseover', 'circle', function(){
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
});

$('.court').on('mouseleave', 'circle', function(){ //mousing off circles inside .something
  $(this).attr('stroke-width', '0');
  $('.tooltip').css({"opacity":0, 'top':0});
});

});
