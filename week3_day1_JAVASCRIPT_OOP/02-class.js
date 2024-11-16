// class Employee {
//   constructor(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
//   // showInfosu prototype e yazar
//   showInfos() {
//     console.log("Name: ${this.name} Age: ${this.age} Salary: ${this.salary}");
//   }
// }

// const employee1 = new Employee("John", 30, 5000);
// console.log(employee1);
// employee1.showInfos();

// class Math {
//   cube(x) {
//     return x * x * x;
//   }

//   static cube2(x) {
//     return x * x * x;
//   }
// }

// const mathematik = new Math();
// console.log(mathematik.cube(3));
// console.log(Math.cube2(3));// static nesneyi değil classı kullanır.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfos() {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
}

const employee1 = new Employee("John", 30, 5000);
console.log(employee1);
employee1.showInfos();
