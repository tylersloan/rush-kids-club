'use strict';

var d           = new Date(),
    firstOpen   = null,
    firstClose  = null,
    secondOpen  = null,
    secondClose = null,
    openTimes   = [],

    days      = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];



function everyMinute() {
// runs every 60 sec and runs on init.
  var hour          = d.getHours(),
      nextHour      = hour + 1,
      day           = d.getDay(),
      nextDay       = day + 1,
      currentMinute = d.getMinutes(),

      body          = $('body');

  console.log(hour + ':' + currentMinute, nextHour);

  var defaultView =
      '<div>' +
      '<h1>sorry kid care is closed.</h1>' +
      '</div>';

  // Sunday
  if( day === 0 ) {
    firstOpen  = 1,
    firstClose = 3,
    openTimes  = [firstOpen + '-' + firstClose],
    day        = "Sunday",
    nextDay    = "Monday";

    if( hour >= 13 && hour < 15 ) {
      console.log('it is open');
    } else { body.html(defaultView) }

    console.log(nextDay)
  }

  // monday through thursday
  if( day === 1 || day === 2 || day === 3 || day === 4 ) {
    firstOpen = 8,
    firstClose = 1,
    secondOpen = 4,
    secondClose = 9,
    openTimes = [firstOpen + '-' + firstClose, secondOpen + '-' + secondClose],
    day = "M-Th";

    if( hour >= 8 && hour < 13 || hour >= 16 && hour < 21 ) {
      console.log('it is open');
    }
  }

  // Friday
  if( day === 5 ) {
    firstOpen = 8,
    firstClose = 1,
    secondOpen = 4,
    secondClose = 7,
    openTimes = [firstOpen + '-' + firstClose, secondOpen + '-' + secondClose],
    day = "Friday";

    console.log('It is Friday and Kid Care opens at ' + firstOpen);

    if( hour >= 8 && hour < 13 || hour >= 16 && hour < 19 ) {
      body.css('background', 'green');
      console.log('it is open');
    }
  }

  // Saturday
  if( day === 6 ) {
    firstOpen = 9,
    firstClose = 3,
    openTimes = [firstOpen + '-' + firstClose],
    day = "Saturday";

    console.log('It is Saturday and Kid Care opens at ' + firstOpen);

    if( hour >= 8 && hour < 13 || hour >= 16 && hour < 19 ) {
      console.log('it is open');
    }
  }

  $('#js-opentimes').html(openTimes);
  $('#js-timeleft').html(60 - currentMinute)
  $('#js-day').html(day);

  if( secondOpen === null ) {
    secondOpen = nextDay;
  }

  console.log('It is ' + day + '. Kid Care is open from ' + firstOpen + '-' + firstClose + ' and ' + secondOpen + '-' + secondClose);
};

everyMinute();
setInterval(everyMinute, 60*1000);