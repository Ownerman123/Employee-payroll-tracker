// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
  

  // add an employee? then create and add with add function

  const CreateEmployee = function () {

    
    const SetSalary = function () {
      let sal;
      
     sal = Number(window.prompt("What is their salary?", ""));
     if(sal === 0){ sal = NaN;}
     while(isNaN(sal)) {
      sal = Number(window.prompt("please enter a numerical value", ""))
      if(sal === 0){ sal = NaN;}
    }
  
    return sal;
  
  
    }

    const newEmployee = {

    firstName: window.prompt("What is the employee's first name?", ""),
    lastName: window.prompt("What is the employee's last name?", ""),
    salary: SetSalary()  ,
    
  }

  
  if(newEmployee.salary === NaN){ newEmployee = Number(prompt("Please enter a numerical value", ""))}
  
  return newEmployee;

  }

  const addtoArray = function(){
    const newemp = CreateEmployee();

    if (newemp.salary === NaN){newemp.salary = Number(prompt("please enter a numerical value", ""))}

  employees.push(newemp);
  alert("Employee added")
   
  if(confirm("Add another Employee?")) {

    addtoArray();

  }else{alert("Employees added!")}

}

// ask if add another. if yes add function again if no 

   addtoArray();

  

  return employees;





}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
//ADD ALL OF THE EMPLOYEES.SALARY TOGETHER
let salaryTotal = 0;
  for(employee of employeesArray){

    salaryTotal += employee.salary;

  }

  salaryTotal = salaryTotal / employeesArray.length;

  console.log(`the average salary of all employees is $ ${salaryTotal}.`);


}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
 const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];

 console.log(`${randomEmployee.firstName} ${randomEmployee.lastName} is the winner of the drawing!`)

} 

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
