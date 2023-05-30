var fs = require('fs');

class Data {
  constructor(students, courses) {
    this.students = students;
    this.courses = courses;
  }
}

var dataCollection = null;

function initialize() {
  return new Promise((resolve, reject) => {
    fs.readFile('./data/students.json', 'utf8', function(err, studentDataFromFile) {
      if (err) {
        reject();
        return;}
      
      fs.readFile('./data/courses.json', 'utf8', function(err, courseDataFromFile) {
        if (err) {
          reject();
          return;}
        
        dataCollection = new Data(JSON.parse(studentDataFromFile), JSON.parse(courseDataFromFile));
        resolve();
      });
    });
  });
}

function getAllStudents() {
  return new Promise(function(resolve, reject) {
    if (dataCollection.students.length == 0) {
      reject();
    } else {
      resolve(dataCollection.students);
    }});
}

function getTAs() {
  return new Promise(function(resolve, reject) {
    var finalTAs = [];
    for (var i = 0; i < dataCollection.students.length; i++) {
    var student = dataCollection.students[i];
    if (student.TA == true) {
        finalTAs.push(student);
    }
    }

    if (finalTAs.length == 0) {
      reject();
    } else {
      resolve(finalTAs);
    }});
}

function getCourses() {
    return new Promise(function(resolve, reject) {
      if (dataCollection.courses.length == 0) {
        reject();
      } else {
        resolve(dataCollection.courses);
      }});
  }

  module.exports = {initialize,getAllStudents,getTAs,getCourses};
