fs = require('fs')

function phoneNumber(err, data) {
    console.log('data:', data);
}

fs.readdirSync('/Users/jdshaw/', phoneNumber)

console.log("this comes after");