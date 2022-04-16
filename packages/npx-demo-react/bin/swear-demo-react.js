#! /usr/bin/env node
const shell = require('shelljs')
shell.exec('git clone https://github.com/soundsnick/swear-js swear-tmp-demo-react-npx')
shell.cd('./swear-tmp-demo-react-npx/packages/demo-react')
shell.exec('npm i')
shell.exec('npm run start')
