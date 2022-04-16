#! /usr/bin/env node
const shell = require('shelljs')
shell.exec('git clone https://github.com/soundsnick/swear-js swear')
shell.cd('./swear/packages/demo-react')
shell.exec('npm i')
shell.exec('npm run start')