'use strict';

/*
 * The Schedule Object
 * It's a way to add a schedule to each day of the week.
 */
var scheduleProto = {
  dayOfWeek: '',
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

var sunday     =  new Schedule('Sunday','1pm','4pm');
var monday     =  new Schedule('Monday','8am','1pm','3pm','9pm');
var tuesday    =  new Schedule('Tuesday','8am','1pm','3pm','9pm');
var wednesday  =  new Schedule('Wednesday','8','13','16','21');
// var wednesday  =  new Schedule('Wednesday','8am','1pm','3pm','9pm');
var thursday   =  new Schedule('Thursday','8am','1pm','3pm','9pm');
var friday     =  new Schedule('Friday','9am','3pm');
var saturday   =  new Schedule('Saturday','1pm','4pm');

/*
 * app() is, you know, the whole thing.
 * First I set vars for things that make up the time,
 * then I turn the day returned into a word, like Monday, etc.
 * Then I add data to the HTML.
 */

function app() {
  /*
   * Hats of to, ehem, W3C Docs for this clock functionality
   */

  setTimeout( function () {
    app();
  }, 500);

  function checkTime(i) {
    if (i<10) {
      i = '0' + i;
    }
    return i;
  }

  function convertTime(i) {
    if(i>12) {
      i = i - 12 + 'pm';
    } else {
      i = i + 'am';
    }
    return i;
  }

  var today   = new Date(),
      h       = today.getHours(),
      day     = today.getDay(),
      m       = today.getMinutes(),
      s       = today.getSeconds(),

      defaultView = '<h3>Sorry, Kid Care is closed.</h3>';

  var m = checkTime(m),
      s = checkTime(s);

  if (day === 0) { day = sunday;    }
  if (day === 1) { day = monday;    }
  if (day === 2) { day = tuesday;   }
  if (day === 3) { day = wednesday; }
  if (day === 4) { day = thursday;  }
  if (day === 5) { day = friday;    }
  if (day === 6) { day = saturday;  }

  // today.getDay() + 1

  $('#js-day').html(day.dayOfWeek);

  var fo = convertTime(day.firstOpen);
  var fc = convertTime(day.firstClose);
  var so = convertTime(day.secondOpen);
  var sc = convertTime(day.secondClose);

  $('#js-first-open').html(fo);
  $('#js-first-close').html(fc);

  if(day.secondOpen !== 'undefined' && day.secondClose !== 'undefined') {
    $('#js-second-open').html(so);
    $('#js-second-close').html(sc);
  }

  /*
   * The following checks what day it is and changes layout accordingly
   */

  function closeIt () {
    $('body').removeClass('kc-is-open')
    $('.wrapper').html(defaultView);
  }

  if(day === monday || tuesday || wednesday || thursday || friday) {
    if (h < 8 || h > 12 && h < 15 || h > 20) {
      closeIt
    }
  }

  if(day === saturday) {
    if (h < 9 && h > 14) {
      closeIt
    }
  }

  if(day === sunday) {
    if (h < 13 && h > 15) {
      closeIt
    }
  }

  $('#clock').html(h+':'+m+':'+s);
  
}

app();