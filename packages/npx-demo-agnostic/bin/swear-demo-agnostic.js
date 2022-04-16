#! /usr/bin/env node
const shell = require('shelljs')
shell.exec('git clone https://github.com/soundsnick/swear-js swear-tmp-demo-agnostic-npx')
shell.cd('./swear-tmp-npx/packages/demo-agnostic')
shell.exec('npm i')
shell.exec('npm run start')
shell.cd('../../../')
shell.exec('rm -rf swear-tmp-demo-agnostic-npx')
