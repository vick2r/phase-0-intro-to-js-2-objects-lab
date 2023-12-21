// Write your solution in this file!
const employee = {
    name: "Man Go",
    streetAddress: "Home Lane",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee, 
        [key]:value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let employee2 = {...employee};
    delete employee2[key];
    return employee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}