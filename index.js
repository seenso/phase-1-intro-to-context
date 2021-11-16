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

function createTimeInEvent(empObj, dateStr) {
  const dateStamp = dateStr.slice(0, 10);
  const hourStamp = parseInt(dateStr.slice(11, 15));

  //returns employee record
  empObj.timeInEvents.push({type: "TimeIn", hour: hourStamp, date: dateStamp});
  return empObj;
};


function createTimeOutEvent(empObj, dateStr) {
  const dateStamp = dateStr.slice(0, 10);
  const hourStamp = parseInt(dateStr.slice(11, 15));

  //returns employee record
  empObj.timeOutEvents.push({type: "TimeOut", hour: hourStamp, date: dateStamp});
  return empObj;
};

function hoursWorkedOnDate(empObj, date) {};

function wagesEarnedOnDate(empObj, date) {};

function allWagesFor(empObj) {};

function calculatePayroll(array) {};