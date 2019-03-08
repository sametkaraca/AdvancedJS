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

var personProto = {
        calculateAge: function(){
                console.log(2019 - this.yearOfBirth)
        }
}

var John = Object.create(personProto)
John.name = "Samet"
John.yearOfBirth = "1990"

