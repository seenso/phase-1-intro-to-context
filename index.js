// Your code here
function createEmployeeRecord(array) {
  return {
    firstName: array[0], //str
    familyName: array[1], //str
    title: array[2], //str
    payPerHour: array[3], //number type
    timeInEvents: [],
    timeOutEvents: []
  };
};

function createEmployeeRecords(array) {
  let employeeRecords = [];

  array.forEach(nestedArr => {
    let newRecord = createEmployeeRecord(nestedArr);
    employeeRecords.push(newRecord);
  });

  return employeeRecords; //arr of objs
};

function createTimeInEvent(empObj, date) {};


function createTimeOutEvent(empObj, date) {};

function hoursWorkedOnDate(empObj, date) {};

function wagesEarnedOnDate(empObj, date) {};

function allWagesFor(empObj) {};

function calculatePayroll(array) {};