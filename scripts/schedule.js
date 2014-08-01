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