 class Person {
 	constructor(fullName, favColor) {
	 	this.name = fullName;
	 	this.favoriteColor = favColor;
 	}

 	greet() {
 		console.log("Hi there is, my name is " + this.name + 
 			"and my favorite color " + this.favoriteColor + ".");
 	}
 }

export default Person;