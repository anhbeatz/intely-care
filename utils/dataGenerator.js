module.exports = {
    generateRandomEmailAdress: function() {

        let email = "Auto_" + Math.random().toString().replace('0.', '') + "@gmail.com";
        return email;
    },
    generateRandomString: function() {
        let string = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        return string;
    }

}