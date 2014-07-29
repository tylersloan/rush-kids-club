'use strict';

var d           = new Date(),
    days        = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],
    daysLength  = days.length,
    defaultView = '<div><h1>sorry kid care is closed.</h1></div>';


var scheduleProto = {
  dayOfWeek: "",
  firstOpen: {},
  firstClose: {},
  secondOpen: {},
  secondClose: {}
};

function Schedule (dayOfWeek, firstOpen, firstClose, secondOpen, secondClose) {
  this.dayOfWeek   = dayOfWeek;
  this.firstOpen   = firstOpen;
  this.firstClose  = firstClose;
  this.secondOpen  = secondOpen;
  this.secondClose = secondClose;
}

Schedule.prototype = scheduleProto;

var sunday     =  new Schedule("Sunday","1pm","1pm","3pm","9pm");
var monday     =  new Schedule("Monday","8am","1pm","3pm","9pm");
var tuesday    =  new Schedule("Tuesday","8am","1pm","3pm","9pm");
var wednesday  =  new Schedule("Wednesday","8am","1pm","3pm","9pm");
var thursday   =  new Schedule("Thursday","8am","1pm","3pm","9pm");
var friday     =  new Schedule("Friday","9am","3pm");
var saturday   =  new Schedule("Saturday","1pm","4pm");

function everyMinute() {
// runs every 60 sec and runs on init.
  var hour           = d.getHours(),
      nextHour       = hour + 1,
      day            = d.getDay(),
      nextDay        = day + 1,
      currentMinute  = d.getMinutes(),
      minTilNextHour = 60 - currentMinute,

      body          = $('body');

  if (day === 0) { day = sunday    }
  if (day === 1) { day = monday    }
  if (day === 2) { day = tuesday   }
  if (day === 3) { day = wednesday }
  if (day === 4) { day = thursday  }
  if (day === 5) { day = friday    }
  if (day === 6) { day = saturday  }

  console.log(hour + ':' + currentMinute, minTilNextHour + " minutes until " + (nextHour - 12) + " oclock.");

  $('#js-day').html(day.dayOfWeek);

  $('#js-first-open').html(day.firstOpen);
  $('#js-first-close').html(day.firstClose);

  if(day.secondOpen != 'undefined' && day.secondClose != 'undefined') {
    $('#js-second-open').html(day.secondOpen);
    $('#js-second-close').html(day.secondClose);
  }

  // $('#js-timeleft').html(minTilNextHour)
};

everyMinute();
setInterval(everyMinute, 60*1000);