'use strict';

/*
 * The Schedule Object
 * It's a way to add a schedule to each day of the week.
 */
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
};

Schedule.prototype = scheduleProto;

var sunday     =  new Schedule("Sunday","1pm","4pm");
var monday     =  new Schedule("Monday","8am","1pm","3pm","9pm");
var tuesday    =  new Schedule("Tuesday","8am","1pm","3pm","9pm");
var wednesday  =  new Schedule("Wednesday","8am","1pm","3pm","9pm");
var thursday   =  new Schedule("Thursday","8am","1pm","3pm","9pm");
var friday     =  new Schedule("Friday","9am","3pm");
var saturday   =  new Schedule("Saturday","1pm","4pm");

/*
 * app() is, you know, the whole thing.
 * First I set vars for things that make up the time,
 * then I turn the day returned into a word, like Monday, etc.
 * Then I add data to the HTML.
 */

function app() {
  var today   = new Date(),
      h       = today.getHours(),
      day     = today.getDay(),
      m       = today.getMinutes(),
      s       = today.getSeconds(),
      m       = checkTime(m),
      s       = checkTime(s),

      defaultView = '<h3>Sorry, Kid Care is closed.</h3>';

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

  /*
   * The following checks what day it is and changes layout accordingly
   */

  if(day === monday || tuesday || wednesday || thursday || friday) {
    if (h < 8 || h > 12 && h < 15 || h > 20) {
      $('.hero-unit').html(defaultView)
    } else {
      $('.hero-unit').css({
        "background": "green"
      })
    }
  }

  if(day === saturday) {
    if (h < 9 && h > 14) {
      $('.hero-unit').html(defaultView)
    } else {
      $('.hero-unit').css({
        "background": "green"
      })
    }
  }

  if(day === sunday) {
    if (h < 13 && h > 15) {
      $('.hero-unit').html(defaultView)
    } else {
      $('.hero-unit').css({
        "background": "green"
      })
    }
  }

  /*
   * Hats of to, ehem, W3C Docs for this clock functionality
   */

  var t = setTimeout( function () {
    app()
  }, 500);

  function checkTime(i) {
    if (i<10) {
      i = "0" + i
    };
    return i;
  }

  $('#clock').html(h+":"+m+":"+s)
  
};

app();