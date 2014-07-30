'use strict';

/*
 * The Schedule Object–
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

var sunday     =  new Schedule('Sunday',    '13','16');
var monday     =  new Schedule('Monday',    '8','13','16','21');
var tuesday    =  new Schedule('Tuesday',   '8','13','16','21');
var wednesday  =  new Schedule('Wednesday', '8','13','16','21');
var thursday   =  new Schedule('Thursday',  '8','13','16','21');
var friday     =  new Schedule('Friday',    '8','13','16','21');
var saturday   =  new Schedule('Saturday',  '9','15');

/* app() is, you know, the whole thing. */
function app() {
  /* 1. Make sure the app is running and re-running */
  setTimeout( function () {
    app();
  }, 500);

  /* 2. Funciton to add a 0 before the minutes or seconds digit if it's < 10 */
  function checkTime(i) {
    if (i<10) {
      i = '0' + i;
    }
    return i;
  }

  /* 3. Function to convert JS time into 12-hour time, then append 'am' or 'pm' */
  function convertTime(i) {
    if(i>12) {
      i = i - 12 + 'pm';
    } else {
      i = i + 'am';
    }
    return i;
  }

  /* 4. Set variables for things that make up the time, plus some others */
  var today   = new Date(),
      h       = today.getHours(),
      day     = today.getDay(),
      m       = today.getMinutes(),
      s       = today.getSeconds(),

      defaultView = '<h3>Sorry, Kid Care is closed.</h3>',
      kcIsOpen  = $('body').hasClass('kc-is-open'),

      m = checkTime(m),
      s = checkTime(s);

      // var tomorrow = day + 1;
      // console.log(day.dayOfWeek, tomorrow);


  /* 5. If KC is closed now, tell the user when KC will open again. Do this before #6 so we have acces to JS generated day digit still */
  // today.getDay() + 1
  if(kcIsOpen == false) {
    // get next open time.
    var tomorrow = day + 1;

    if (day === 0) { tomorrow = monday;    }
    if (day === 1) { tomorrow = tuesday;   }
    if (day === 2) { tomorrow = wednesday; }
    if (day === 3) { tomorrow = thursday;  }
    if (day === 4) { tomorrow = friday;    }
    if (day === 5) { tomorrow = saturday;  }
    if (day === 6) { tomorrow = sunday;    }


  }

  /* 6. I turn the day returned into a word, like Monday, etc. */
  var convertDay = (function () {
    if (day === 0) { day = sunday;    }
    if (day === 1) { day = monday;    }
    if (day === 2) { day = tuesday;   }
    if (day === 3) { day = wednesday; }
    if (day === 4) { day = thursday;  }
    if (day === 5) { day = friday;    }
    if (day === 6) { day = saturday;  }
  })();

  /* 7. Tell the user what day it is */
  $('#js-day').html(day.dayOfWeek);

  /* Set variables to for easier writing */
  var fo = day.firstOpen;
  var fc = day.firstClose;
  var so = day.secondOpen;
  var sc = day.secondClose;

  /* 8. Print open time(s) and close time(s) in the browser */
  $('#js-first-open').html(convertTime(fo));
  $('#js-first-close').html(convertTime(fc));

  if(day.secondOpen !== 'undefined' && day.secondClose !== 'undefined') {
    $('#js-second-open').html(convertTime(so));
    $('#js-second-close').html(convertTime(sc));
  }

  /* Function to put up the "We're Closed!" sign up */
  function closeIt () {
    $('body').removeClass('kc-is-open')
    $('.wrapper').html(defaultView);
  }

  /* 9. This is important. if() to check time and run closeIt() if necessary */
  if (h < fo || h >= fc && h < so || h > sc) {
    closeIt()
  }

  /* 10. Tell the user what time it is */
  $('#clock').html(h + ':' + m);
}

app();