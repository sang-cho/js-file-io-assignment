'use strict'

const fs = require('fs')


class Employee {
  constructor (name, title, salary) {
    this.name=name
    this.title=title
    this.salary=salary
  }
  get empoyleeName(){
    return this.name
  }
  set employeeName(name){
    return this.name=name
  }

  get employeetitle(){
    return this.title
  }
  set employeeTitle(title){
    return this.title=title
  }

  get employeeSalary(){
    return this.salary
  }
  set employeeSalary(salary){
    return this.salary=salary
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
