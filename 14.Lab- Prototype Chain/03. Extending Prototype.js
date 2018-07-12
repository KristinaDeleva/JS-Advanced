function solve() {
    class Person{
        constructor(name, email){
            this.name = name
            this.email = email
        }

        toString(){
            let className = this.constructor.name
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name, email)
            this.course = course
        }

        toString(){
            let parentToString = super.toString().slice(0, -1)
            return parentToString + `, course: ${this.course})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email)
            this.subject = subject
        }

        toString(){
            let parentToString = super.toString().slice(0, -1)
            return parentToString + `, subject: ${this.subject})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}
let result = solve()
let Person = result.Person
let Student = result.Student
let Teacher = result.Teacher
let s = new Student("PEsho", "e@amv.bg", "Js")

function extendToClass(cl) {
    cl.prototype.species = "Human"
    cl.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ` + this.toString()
    }
}

extendToClass(Student)
console.log(s.toSpeciesString())
