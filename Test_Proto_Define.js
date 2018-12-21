/*
Test Prototype - Definition File
*/

function person(first, last) {
    this.firstName = first;
    this.lastName = last;
	this.nationality = "English"; 
	this.name = function() {return this.firstName + " " + this.lastName;};
}