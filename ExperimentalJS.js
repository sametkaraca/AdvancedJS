//TODO: EPISODE 1 - CONSTRUCTOR & PROTOTYPE***
/*
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
*/
//TODO: EPISODE 2 - OBJECT.CREATE (PROTOTYPing)***

//First we define an object as a prototype, then create a new object based on that very prototype.It is just a different than constructor
//Object.create builds an object that inherits directly from the one that we passed into the first argument
//The newly created object inherits from the constructor's prototype property in Constructor function
//Object.create makes complex inheritance structures simpler. It directly specifies which object should be a prototype.

/* var personProto = {
        calculateAge: function(){
                console.log(2019 - this.yearOfBirth)
        }
}

var John = Object.create(personProto)
John.name = "Samet"
John.yearOfBirth = "1990" */

//TODO: PASSING A FUNCTION AS AN ARGUMENT (It is a good practice to write moduler functions than a huge and complciated one )

/* var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn) {
        var arrRes = []
        for (let i = 0; i < arr.length; i++) {
                arrRes.push(fn(arr[i]))
        }
        return arrRes
}

function calculateAge(el){
        return 2019 - el
}

function isFullAge(el){
        return el >= 18
}

var ages = arrayCalc(years, calculateAge)
var fullAges = arrayCalc(ages, isFullAge)

console.log(ages)
console.log(fullAges) */

//calculateAge() functions is called meanwhile whereas calcualteAge alone is called later on (that is why it is calledback function). Isn't it awesome ! 

//TODO: FUNCTIONS RETURNING FUNCTIONS
/* 
function interviewQuestion(job) {
        if (job === "designer") {
                return function (name) {
                        console.log(name + " What is UX?")
                }
        } else if (job === "teacher") {
                return function (name) {
                        console.log(name + " What subject?")
                }
        } else {
                return function (name) {
                        console.log(name + " What do u do then chucky?")
                }
        }
}

var teacherQuestion = interviewQuestion("teacher")

teacherQuestion("John")

interviewQuestion("designer")("Mark") //We enter double parameters
 */

 //TODO:Immediately Invoked Function (IIF)

//(function() {console.log("I am IIF")})()

//TODO: Closures - An inner function has always access to the variables and parameters of its outer function, even after the aouter function has returned. 

function retirement(retirementAge){
        
        return function(yearOfBirth){
                
                var sentence = " years left until your retirement"
                var age = 2019 - yearOfBirth

                console.log((retirementAge - age) + sentence)
        }
}

var retirementUS = retirement(66)
var retirementUK = retirement(64)
var retirementDK = retirement(66)
var retirementNO = retirement(68)
var retirementTR = retirement(60)

retirementUS(1990)
retirement(80)(1990)

//Example of Closure 

function interviewQuestion(job){
        return function(name){
                if(job === "designer"){
                        console.log(name + " , Can you explain what is UX?")
                } else if (job === "musician") {
                        console.log("Could u play Bach?")
                } else {
                        console.log("Hello " + name + ", What do you do?")
                }
        }
}

interviewQuestion("musician")("John")

//TODO: Bind, Call and Apply

