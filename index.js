"use strict";

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    console.log(`${this.name} ${this.surname} `);
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    const currentDate = new Date().getFullYear();
    const course = currentDate - this.year;
    if (course >= 1 && course <= 5) {
      return `Your Course: ${course} `;
    } else {
      throw new RangeError("Invalid range Year");
    }
  }
  formatName() {
    return `${this.surname} ${this.name.charAt(0)}.`;
  }
}

class Group {
  constructor(name, students) {
    this.name = name;
    this.students = students;
  }
  showStudents() {
    if (this.students.length > 0) {
      return this.students
        .map(function (element) {
          return element.formatName();
        })
        .join(" | ");
    }
    throw new RangeError("Passed an empty array.");
  }
}
const user = new User("Pepe", "Ga")
const userUser = new Student("Elon", "Musk", 2021);
userUser.getFullName();
console.log(userUser.getCourse());

const group = new Group("Main group", [
  new Student("Sally ", "Lee", 2018),
  new Student("Murray ", "Patel", 2020),
  new Student("Ray  ", "Keith", 2020),
  new Student("Annie  ", "Bernard", 2018),
  new Student("Marta ", "Haney", 2018),
  new Student("Harrison ", "Fischer ", 2021),
  new Student("Audrey ", "Woodward", 2022),
  new Student("Ester ", "Michael", 2020),
]);
console.log(userUser.getCourse(user));
console.log(group.showStudents());

// Создайте класс Student (Студент), который будет наследоваться от класса User.
// Класс Student  должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод (наследуется от User), с помощью которого можно ввести/вывести одновременно имя и фамилию студента. Также класс  Student должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно (Date).
// Создайте класс Group, который будет иметь следующие свойства: name (название группы) и students (массив студентов). Класс должен иметь метод showStudents(), который выводит фамилию и имя каждого студента в виде Иванов И.

// Обязательно добавить сеттер для year (год поступления в вуз) - должен быть не более текущего и так чтобы студент учился не более 5 лет.
