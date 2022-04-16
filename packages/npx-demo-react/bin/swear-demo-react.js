#! /usr/bin/env node
process.stdin.resume(); //so the program will not close instantly

const shell = require('shelljs')
shell.exec('git clone https://github.com/soundsnick/swear-js swear-tmp-npx')
shell.cd('./swear-tmp-npx/packages/demo-react')
shell.exec('npm i')
shell.exec('npm run start')

function exitHandler() {
    console.log('Cleaning up...');
    shell.cd('../')
    shell.exec('rm -rf swear-tmp-npx')
    process.exit()
}

//do something when app is closing
process.on('exit', exitHandler);

//catches ctrl+c event
process.on('SIGINT', exitHandler);

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler);
process.on('SIGUSR2', exitHandler);

//catches uncaught exceptions
process.on('uncaughtException', exitHandler);
