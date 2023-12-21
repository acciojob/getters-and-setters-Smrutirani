//complete this code
class Person {
	 constructor(name, age) {
        this._name = name;
        this._age = age;
    }
	// Getter for name
    get name() {
        return this._name;
    }
    // Setter for age
    set age(age) {
        this._age = age;
    }
}

class Student extends Person {
	constructor(name, age, studentId) {
        super(name, age);
        this._studentId = studentId;
    }
	study() {
        console.log(`${this._name} is studying.`);
    }
}

class Teacher extends Person {
	constructor(name, age, subject) {
        super(name, age);
        this._subject = subject;
    }
	    teach() {
        console.log(`${this._name} is teaching.`);
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
