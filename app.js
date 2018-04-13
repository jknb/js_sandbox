// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const dif = Date.now() - this.birthday.getTime();
        const ageDate = new Date(dif);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

