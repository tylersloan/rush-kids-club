'use strict';

/* app() is, you know, the whole thing. */
(function app() {

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

      m = checkTime(m),
      s = checkTime(s);

  /* 5. Make human-readable variables out of 'day' and 'tomorrow'. You get it. */
  if (day === 0) { var tomorrow = monday;    }
  if (day === 1) { var tomorrow = tuesday;   }
  if (day === 2) { var tomorrow = wednesday; }
  if (day === 3) { var tomorrow = thursday;  }
  if (day === 4) { var tomorrow = friday;    }
  if (day === 5) { var tomorrow = saturday;  }
  if (day === 6) { var tomorrow = sunday;    }

  if (day === 0) { day = sunday;    }
  if (day === 1) { day = monday;    }
  if (day === 2) { day = tuesday;   }
  if (day === 3) { day = wednesday; }
  if (day === 4) { day = thursday;  }
  if (day === 5) { day = friday;    }
  if (day === 6) { day = saturday;  }

  /* 6. Tell the user what day it is */
  $('#js-day').html(day.dayOfWeek);

  /* Set variables to for easier writing */
  var fo = day.firstOpen;
  var fc = day.firstClose;
  var so = day.secondOpen;
  var sc = day.secondClose;
	
  function getTimeTil(arg) {
  	var minTilArg = (arg - h)*60;
  	var hrsTilArg  = ((minTilArg - m)/60).toFixed(2);
  	return hrsTilArg;
  }

  
  

  

  /* 8. Functions that create the page based on being open or closed  */
  function closeIt() {
    var nums = getTimeTil(so).split('.');
    var hours = nums[0];
    var mins = ('.' + nums[1])*60;
    var choose = function(selector, arg) {
      $(selector).html('in ' + hours + arg + mins.toFixed(0) + ' minutes.');
    };

    $('#icon-status').addClass('closed');
    if($('#icon-status').hasClass('open')) {
        $(this).removeClass('open');
    }
      
    $('.kc-is-open').hide();
    $('.kc-is-closed').show();

    if(h < fo) {
      // If current hour is less than first open, tell user when first open is.
      $('#js-next-open').html('today at ' + convertTime(fo));
    }

    if(h > fc) {
      // Morning shift has come and gone, but KC will open again at second open
  		if(getTimeTil(so) > .99 && getTimeTil(so) < 1.99) {
  			choose('#js-next-open', ' hour ');
  		} else if(getTimeTil(so) > .99) {
        choose('#js-next-open', ' hours ');
      } else {
        $('#js-next-open').html('in ' + (getTimeTil(so) * 60).toFixed(0) + ' minutes.');    
      }
    }
    
    if(h > sc) {
      // Second close has passed, so tell the user that KC will open again tomorrow at first open
      $('#js-next-open').html(tomorrow.dayOfWeek +  ' at ' + tomorrow.firstOpen + 'am.');
    }
  }

  /* 10. Print open time(s) and close time(s) in the browser */
  function openIt() {
      

      $('#icon-status').addClass('open');
      if($('#icon-status').hasClass('closed')) {
        $(this).removeClass('closed');
      }
      
      $('.kc-is-open').show();
      $('.kc-is-closed').hide();

      $('#js-first-open').html(convertTime(fo));
      $('#js-first-close').html(convertTime(fc));

      $('#js-second-open').html(convertTime(so));
      $('#js-second-close').html(convertTime(sc));

      if(h >= fo && h < fc) {
        // If current hour is less than first close, tell user how much time is left

        var nums = getTimeTil(fc).split('.');
        var hours = nums[0];
        var mins = ('.' + nums[1])*60;
        var choose = function(selector, arg) {
          $(selector).html(hours + arg + mins.toFixed(0) + ' minutes');
        };

        if(getTimeTil(fc) > .99 && getTimeTil(fc) < 1.99) {
          choose('#js-timeleft', ' hour ');
        } else if(getTimeTil(fc) > .99) {
          choose('#js-timeleft', ' hours ');
        } else {
          $('#js-timeleft').html('in ' + (getTimeTil(fc) * 60).toFixed(0) + ' minutes.');    
        }

        // $('#js-timeleft').html(getTimeTil(fc));

      }

      if(so === undefined && sc === undefined ) {
        // If KC is open at all in the afternoon, fill out the HTML
        $('.js-afternoon-schedule').remove()
        
      }

      if((convertTime(so) !== 'undefined' && convertTime(sc) !== 'undefined') && (h >= so && h < sc)) {
        if(h < sc) {
          // $('#js-timeleft').html(getTimeTil(sc)); <= this thing works do not throw away yet

          // If current hour is less than second close, tell user how much time is left
          if(getTimeTil(sc) > .99 && getTimeTil(sc) < 1.99) {

            console.log('and between .99 and 1.99')

            choose('#js-timeleft', ' hour ');
          }

          else if(getTimeTil(sc) > .99) {
            console.log('nums hours and mins: ' + nums, hours, mins + ' getTimeTil(sc): ' + getTimeTil(sc))

            choose('#js-timeleft', ' hours ');
          }

          else {
            console.log('and just else')

            // $('#js-timeleft').html('in ' + (getTimeTil(sc) * 60).toFixed(0) + ' minutes.');    
          }
        }
      } else {
        // If it isn't, leave it blank, for now
        $('#js-second-open').html();
        $('#js-second-close').html();
      }
  }

  /* 11. This is important. if() to check time open or close as appropriate */
  if ( (h >= fo && h < fc) || (h >= so & h < sc) ) {
    openIt();
  } else {
    closeIt();
  }

  /* 11. Tell the user what time it is. Why not? */
  // $('#clock').html(h + ':' + m);
})();