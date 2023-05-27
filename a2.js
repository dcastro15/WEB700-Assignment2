/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Dennis Castro Student ID: 122875222 Date: June 2, 2023
*
********************************************************************************/ 

let { initialize, getAllStudents, getTAs, getCourses } = require('./modules/collegeData');

initialize()
  .then(function() {

    getAllStudents()
      .then(function(students){
        console.log(`Successfully retrieved ${students.length} students`);
      })
      .catch(function(error){
        console.log(error);
      });


    getCourses()
      .then(function(courses){
        console.log(`Successfully retrieved ${courses.length} courses`);
      })
      .catch(function(error){
        console.log(error);
      });


    getTAs()
      .then(function(tas){
        console.log(`Successfully retrieved ${tas.length} TAs`);
      })
      .catch(function(error){
        console.log(error);
      });
  })
