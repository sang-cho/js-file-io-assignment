'use strict'

const fs = require('fs')


class Employee {
  constructor (name, title, salary) {
    this.name=name
    this.title=title
    this.salary=salary
  }
  
  promote(title, salary){
    this.title=title
    this.salary=salary
  }

  static parseFromFilePath(path){
      let stuff=JSON.parse(fs.readFileSync(path))
      let leEmployeeName=stuff.name
      let leEmployeeTitle=stuff.title
      let leEmployeeSalary=stuff.salary
      let leEmployee=new Employee(leEmployeeName,leEmployeeTitle,leEmployeeSalary)
      return leEmployee
    }
}


// TODO ???

module.exports = {
  Employee
}
