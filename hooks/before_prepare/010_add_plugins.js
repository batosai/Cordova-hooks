#!/usr/bin/env node

// Add Plugins
// v1.0

var fs       = require('fs'),
    plugins  = require('../../plugins.json'),
    execSync = require('execSync');
;

var path = process.argv[2] + /plugins/;

for(var plugin in plugins){
    if (!fs.existsSync(path + plugin)) {
        var result = execSync.run('ionic plugin add ' + plugins[plugin]);
        console.log(result);
    }
}
