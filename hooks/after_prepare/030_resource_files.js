#!/usr/bin/env node

// Add splash
// v1.0

var files = require('../../splashscreen.json');
var fs    = require('fs');
var path  = process.argv[2] + '/';

for(var file in files){
        fs.createReadStream(path + file).pipe(
            fs.createWriteStream(path + files[file])
        );
        console.log("copying " + path + file + " to " + path + files[file]);
}
