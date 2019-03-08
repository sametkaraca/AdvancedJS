//TODO: EPISODE 1 - CONSTRUCTOR & PROTOTYPE***

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

//TODO: EPISODE 2 - OBJECT.CREATE (PROTOTYPing)***

//First define an object as a prototype, then create a new object based on that very prototype


