const person = {
    firstName: "Virtu",
    lastName: "Yorgensen",

    //NEVER NEVER NEVER use arrow fun as the method function
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    //here we use full name as nested into shout name -> must must must have this structure to work.
    shoutName: function () {
        setTimeout(() => {console.log(this.fullName())}, 3000);
    },
};
