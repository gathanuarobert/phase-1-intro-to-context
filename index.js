// Your code here
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(array){
    return array.map(array => createEmployeeRecord(...array))
}

function createTimeInEvent(employeeRecord, dateStamp){
    const [date, hour] = dateStamp.split(' ');

    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateStamp){
    const [date, hour] = dateStamp.split(' ');

    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, dateStamp){
   const timeInHour = timeInEvents
   const timeOutHour = timeOutEvents
   const hoursWorked = timeOutHour - timeInHour
   return hoursWorked
}

function wagesEarnedOnDate(employeeRecord, dateStamp){
    const hoursWorked = hoursWorkedOnDate(employeeRecord, dateStamp);
    const payRate = employeeRecord.payPerHour;

    const wagesEarned = hoursWorked * payRate;

    return wagesEarned;
}

function allWagesFor(employeeRecord) {
    const datesWorked = employeeRecord.timeInEvents.map(event => event.date);

    const totalWages = datesWorked.reduce((total, date) => {
        return total + wagesEarnedOnDate(employeeRecord, dateStamp);
    }, 0);

    return totalWages;
}

function calculatePayroll(employeeRecords) {
    const totalPayroll = employeeRecords.reduce((total, employeeRecord) => {
        const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
        const wages = datesWorked.reduce((wagesTotal, date) => {
            return wagesTotal + wagesEarnedOnDate(employeeRecord, dateStamp);
        }, 0);
        return total + wages;
    }, 0);

    return totalPayroll;
}