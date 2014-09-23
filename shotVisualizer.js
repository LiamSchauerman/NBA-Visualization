$(document).ready(function(){

var courtWidth = 873;
var courtHeight = 819;

d3.select(".court") // container is our outer svg element
  .append("svg")
    .attr('width', courtWidth)
    .attr('height', courtHeight);

// general update function
  // first JOINs data to 
var update = function(data) {
  // passes data into svg element
  var circles;
  circles = d3.select('.court svg').selectAll('circle')
      .data(data)

      // EXIT
      circles.exit()
        .attr({
          r:5,
          opacity: 1
        })
        .transition()
          .duration(125)
          .attr({
            r: 6,
            opacity: 0
          })
      .remove()

      // UPDATE
      circles
        .attr({
          cx: function(d) {return d.x * 17.4;},
          cy: function(d) {if(d.y > 47) {d.y = 94 - d.y;} return courtHeight - (d.y * 17.4);},
          opacity: 1,
          r: 6,
          fill: function(d) { return d.result === 'made' ? 'green' : 'red'; },
        })
      .transition()
        .duration(125)
        .attr({
          cx: function(d) {
            var dx = d3.random.normal(0, 3);
            return (d.x * 17.4) + dx();
          },
          cy: function(d) {
            var dy = d3.random.normal(0, 3);          
            if(d.y > 47) {d.y = 94 - d.y;} 
            return courtHeight - (d.y * 17.4) + dy();
          },
          opacity: 1,
          r: 5,
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
        cx: function(d) {
          var dx = d3.random.normal(0, 3);
          return (d.x * 17.4) + dx();
        },
        cy: function(d) {
          var dy = d3.random.normal(0, 3);          
          if(d.y > 47) {d.y = 94 - d.y;} 
          return courtHeight - (d.y * 17.4) + dy();
        },
        class: 'shot',
        r: 6,
        fill: function(d) { return d.result === 'made' ? 'green' : 'red'; },
      })
    .transition()
      .duration(125)
      .attr({
        r: 5,
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

}; //end update


update(allShots);


// FUNCTIONS TO FILTER DATA

// filters by team
var findShotsByTeam = function(teamName, data) { 
 var teamShots = [];
  for (var i=0; i<data.length; i++) {
    if(data[i].team === teamName ) {
      teamShots.push(data[i]);
    }
  }
  return teamShots;
}

// filters by period
var filterShotsByPeriod = function(period, data) {
  var results = [];
  for (var i=0; i<data.length; i++) {
    if(data[i].period === period ) {
      results.push(data[i]);
    }
  }  
  return results;
};

// filter by player


// CLICK EVENTS

// period buttons
$('button.period').on('click', function(){
  var period = $(this).data('period');
  update(filterShotsByPeriod(period, allShots))
});

// team buttons
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

// tooltip mouse events
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

$('.court').on('mouseleave', 'circle', function(){ 
  $(this).attr('stroke-width', '0');
  $('.tooltip').css({"opacity":0, 'top':0});
});

}); // end ready block
