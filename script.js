// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// TODO: Get user input to create and return an array of employee objects

function collectEmployees() {
  const employees = [];

  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt("First Name:");
    const lastName = prompt("Last Name:");
    let salary = prompt("Employee's Salary:");

    // Convert salary to a number, default to 0 if not a valid number
    salary = Number.isNaN(salary) ? 0 : Number(salary);

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    addEmployee = confirm("Do you want to add another employee?");
  }
  console.log(employees);
  return employees;
}



// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Extract salaries from the employeesArray
  let total = 0
for (let i =0; i < employeesArray.length; i++) {
total += employeesArray [i].salary;
}

  // Calculate the average salary
  const averageSalary = total/employeesArray.length;

  // Display the average salary in the console
  console.log(`The average salary is: $${averageSalary}`);
}
//Select RabdomEmployee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length);
  const employee = employeesArray[index];
  console.log(`The name of the random employee is: ${employee.firstName} ${employee.lastName}`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
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
