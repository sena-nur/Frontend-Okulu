// const person1 = {
//     name: "John",
//     age: 30,
//     langs: ["html", "css", "js"],
//     address : {
//         city: "New York",
//         country: "USA"
//     },
//     showInfos: function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.langs);
//         console.log(this.address);

//     }
// }

// console.log(person1);

function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
  //   this.showInfos = function () {
  //     console.log(this.name);
  //     console.log(this.age);
  //     console.log(this.langs);
  //   };

  Person.prototype.showInfos = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.langs);
  };
}

const person1 = new Person("John", 30, ["html", "css", "js"]);
console.log(person1);
person1.showInfos();

const person2 = new Person("Jane", 25, ["html", "css", "js"]);
console.log(person2);
person2.showInfos();

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const employee1 = new Employee("John", 30, ["html", "css", "js"], 5000);
console.log(employee1);
employee1.showInfos();
