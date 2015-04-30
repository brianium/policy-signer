#!/usr/bin/env node

var program = require('commander');
var fs = require('fs');
var signer = require('../');

var policyPath = '';
var keyValue = '';

program
  .version('1.0.0')
  .usage('<path> <key>')
  .arguments('<path> <key>')
  .action(function (path, key) {
    policyPath = path;
    keyValue = key;
  })
  .parse(process.argv);

if (!fs.existsSync(policyPath)) {
  console.error('Error: policy file does not exist');
  process.exit(1);
}

if (!keyValue) {
  console.error('Error: AWS key not provided');
  process.exit(1);
}

signer.signPolicy(policyPath, keyValue, function (err, encoded, signed) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('');
  console.log('Policy:');
  console.log(encoded);
  console.log('');

  console.log('Signed:');
  console.log(signed);
  console.log('');
});
