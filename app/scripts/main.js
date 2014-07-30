'use strict';

var today       = new Date(),
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
  var today   = new Date(),
      h       = today.getHours(),
      day     = today.getDay(),
      m       = today.getMinutes(),
      s       = today.getSeconds(),
      m       = checkTime(m),
      s       = checkTime(s);

  if (day === 0) { day = sunday    }
  if (day === 1) { day = monday    }
  if (day === 2) { day = tuesday   }
  if (day === 3) { day = wednesday }
  if (day === 4) { day = thursday  }
  if (day === 5) { day = friday    }
  if (day === 6) { day = saturday  }

  $('#js-day').html(day.dayOfWeek);

  $('#js-first-open').html(day.firstOpen);
  $('#js-first-close').html(day.firstClose);

  if(day.secondOpen != 'undefined' && day.secondClose != 'undefined') {
    $('#js-second-open').html(day.secondOpen);
    $('#js-second-close').html(day.secondClose);
  }

  var t = setTimeout( function () {
    everyMinute()
  }, 500);

  function checkTime(i) {
    if (i<10) {
      i = "0" + i
    };  // add zero in front of numbers < 10
    return i;
  }

  document.getElementById('clock').innerHTML = h+":"+m+":"+s;


};

everyMinute();
// setInterval(everyMinute, 5*1000);