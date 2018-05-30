var fs = require('fs');

fs.readdir('/Users/jdshaw/Projects/nodeJsApps/app1', (err, data)=>{
    console.log(data)
})