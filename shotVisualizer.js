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

  // JOIN
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

// returns all shots by team
var filterShotsByTeam = function(teamName, data) { 
 var teamShots = [];
  for (var i=0; i<data.length; i++) {
    if(data[i].team === teamName ) {
      teamShots.push(data[i]);
    }
  }
  return teamShots;
}

// returns all shots in period
var filterShotsByPeriod = function(period, data) {
  var results = [];
  for (var i=0; i<data.length; i++) {
    if(data[i].period === period ) {
      results.push(data[i]);
    }
  }  
  return results;
};

// returns all shots by a single player
var filterShotsByPlayer = function(player, data){
  var results = [];
  for (var i=0; i<data.length; i++) {
    if(data[i].player === player ) {
      results.push( data[i] );
    }
  }  
  return results;
}

// returns an array containing one object per player
var getShotDistribution = function(teamname, data){
  // get an array of objects, one object per player
  // {player1}
  // [{}, {}, {}, ]
  var team = filterShotsByTeam(teamname, data); 
  // create an object, adding player's names as keys
  var totalShots = 0;
  var allPlayers = {}; // this lets us group shots by player. this will be converted to an array below
  for( var i=0; i < team.length; i++ ){
    console.log('yeee');
    if( !allPlayers[team[i].player] ) { // creating a new property- happens when player is not in object
      allPlayers[team[i].player] = { name: team[i].player };
      if ( team[i].result === 'made' ) {
        allPlayers[team[i].player].shotsMade = 1;
        allPlayers[team[i].player].shotsMissed = 0;
      } else {
        allPlayers[team[i].player].shotsMade = 0;
        allPlayers[team[i].player].shotsMissed = 1;
      }
    } else { // player is already in object
      if ( team[i].result === 'made' ) {
        allPlayers[team[i].player].shotsMade++;
      } else {
        allPlayers[team[i].player].shotsMissed++;
      }
    }
  }
  var players = []; // converting object to array
  for (var key in allPlayers ) {
    players.push(allPlayers[key]);
  }
  return players
}

// BAR GRAPH SECTION

var barGraphUpdate = function(data){
// JOIN
  var bars;
  bars = d3.select("#chart").selectAll("div")
        .data(data)

// EXIT
  bars.exit()
    .style('opacity', 1)
    .transition()
      .duration(750)
    .style('opacity', 0)
    .remove()

  // UPDATE
  bars
    .style({
      width: function(d) { return (d.shotsMade+d.shotsMissed) * 40 + "px"; },
      backgroundcolor: 'green'
    })
    .select('div') // shots made
      .attr('class', 'madeShots')
      .style({
        width: function(d) { return d.shotsMade*40 + 'px' }
      })
    .select('div') // text about player and shots
      .attr('class','text')
      .text(function(d) {
        return d.name + ': ' + d.shotsMade+'/'+(d.shotsMissed+d.shotsMade);
      })

//ENTER
  bars.enter().append("div") // total shots
    .style({
      width: function(d) { return (d.shotsMade+d.shotsMissed) * 40 + "px"; },
    })
    .attr("class", 'bar')
    .append('div') // shots made
      .attr('class', 'madeShots')
      .style({
        width: function(d) { return d.shotsMade*40 + 'px' }
      })
    .append('div') // shots missed
      .attr('class','text')
      .text(function(d) {
        return d.name + ': ' + d.shotsMade+'/'+(d.shotsMissed+d.shotsMade);
      })


}; // end barGraphUpdate();
barGraphUpdate(getShotDistribution('Brooklyn Nets', allShots));




// CLICK EVENTS

// period buttons
$('button.period').on('click', function(){
  var period = $(this).data('period');
  update(filterShotsByPeriod(period, allShots))
});

// team buttons
$('button.bobcats').on('click', function(){
// loading shots for the Bobcats only
  $('#chart h1 span').html('Bobcats');
  update(filterShotsByTeam('Charlotte Bobcats', allShots));
  barGraphUpdate(getShotDistribution('Charlotte Bobcats', allShots));
});

$('button.nets').on('click', function(){
// loading shots for the Nets only
  $('#chart h1 span').html('Nets');
  update(filterShotsByTeam("Brooklyn Nets", allShots));
  barGraphUpdate(getShotDistribution('Brooklyn Nets', allShots));

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
