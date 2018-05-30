fs = require('fs')

data = fs.readdirSync('/Users/jdshaw/Projects')
console.log("data:", data)
console.log("this comes after");