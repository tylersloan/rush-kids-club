"use strict";function Schedule(e,d,s,n,u){this.dayOfWeek=e,this.firstOpen=d,this.firstClose=s,this.secondOpen=n,this.secondClose=u}var scheduleProto={dayOfWeek:"",firstOpen:{},firstClose:{},secondOpen:{},secondClose:{}};Schedule.prototype=scheduleProto;var sunday=new Schedule("Sunday","13","16"),monday=new Schedule("Monday","8","13","16","21"),tuesday=new Schedule("Tuesday","8","13","16","21"),wednesday=new Schedule("Wednesday","8","13","16","21"),thursday=new Schedule("Thursday","8","13","16","21"),friday=new Schedule("Friday","8","13","16","21"),saturday=new Schedule("Saturday","9","15");