#! /usr/local/bin/node
 const add = require('./commands/add')

const method = process.argv[2]

switch (method) {
  case 'add':
    add(process.argv[3])
    break;
  default:
}
