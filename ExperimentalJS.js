//TODO: EPISODE 1 ***

//Constructor
var Person = function (name, yearOfBirth, job) {
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
}

//This is not an optimized solution if we would have hundreds of functions. Therefore, we need to use Inheritence (Prototype).  
Person.prototype.calculateAge = function () {
        console.log(2019 - this.yearOfBirth)
}

Person.prototype.field = "IT"

var John = new Person("Samet", 1990, "Web Developer") //Instantiation of Object (new creates and empty object)
var Samet = new Person("John", 1987, "Mobile App Developer") //Instantiation of Object (this points out newly created objects)

John.calculateAge()
console.log(John.field) //We populate constructor variables from outside via prototype













/* 
FUNCTION QUESTION(QUESTION, ANSWERS, CORRECT) {
        THIS.QUESTION = QUESTION
        THIS.ANSWERS = ANSWERS
        THIS.CORRECT = CORRECT
}

VAR QUESTION1 = NEW QUESTION("IS JS THE COLLEST LANGUAGE IN THE WORLD?", ["YES", "NO"], 0)

VAR QUESTION2 = NEW QUESTION("WHAT IS THE NAME OF THE TEACHER?", ["JOHN", "MIKE", "JONAS"], 2)

VAR QUESTION3 = NEW QUESTION("HOW TO DESCRIBE THIS COURSE?", ["GOOD", "BAD", "UGLY"], 1)

//TODO: PUT THEM IN A RANDOM ORDER
VAR QUESTIONS = [QUESTION1, QUESTION2, QUESTION3]

VAR R = MATH.FLOOR(MATH.RANDOM() * QUESTIONS.LENGTH) */