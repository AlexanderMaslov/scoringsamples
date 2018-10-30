var $ = require('jquery');
var Person = require('./person');

alert("This is a test for our webpack autiomation");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();