#! /usr/local/bin/node

 const add = require('./commands/add')
 const list = require('./commands/list')
 const deleteTask = require('./commands/delete')
 const complete = require('./commands/complete')

const method = process.argv[2]
const argument = process.argv[3]

switch (method) {
  case 'add':
    add(argument)
    break;
  case 'list':
    list()
    break;
  case 'deleteTask':
    deleteTask(argument)
    break;
  case 'complete':
    complete(argument)
    break;
  default:
    throw new Error('Unknown command')
}
