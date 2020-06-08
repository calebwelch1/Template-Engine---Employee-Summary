const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getID() {
    return this.id;
  }
  getRole() {
    return Employee;
  }
}
class Manager extends Employee {
  // when we extend a class we want to pass the arguments from the original class as well as those unique to the extension
  constructor(name, id, email, officeNumber) {
    //here we'd usually have this.name=name this.id=id etc. However just using super(name,id) does the same thing!
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
}
class Engineer extends Employee {
  constructor(name, id, email, githubUN) {
    super(name, id, email);
    this.githubUN = githubUN;
  }
  getGitHub() {
    return this.githubUN;
  }
  getRole() {
    return "Engineer";
  }
}
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
inquirer
  .prompt([
    {
      name: "EmployeeType",
      type: "list",
      prompt: "What employee type would you like to create?",
      choices: ["Manager", "Engineer", "Intern"],
    },
    {
      name: "EmployeeName",
      type: "input",
      prompt: "What is the Employee's name?",
    },
    {
      name: "EmployeeID",
      type: "Input",
      prompt: "What is the employee's ID?",
    },
    {
      name: "EmployeeEmail",
      type: "Input",
      prompt: "What is the employee's email?",
    },
    {
      name: "ManagerNum",
      type: "Input",
      prompt: "What is the Manager's room number?",
      when: EmployeeType.val() === "Manager",
    },
    {
      name: "EngineerGit",
      type: "Input",
      prompt: "What is the Engineer's github username?",
      when: EmployeeType.val() === "Engineer",
    },
    {
      name: "InternSchool",
      type: "input",
      prompt: "What is the Intern's School?",
      when: EmployeeType.val() === "Intern",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
