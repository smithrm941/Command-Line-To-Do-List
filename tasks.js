#! /usr/local/bin/node

 const add = require('./commands/add')
 const list = require('./commands/list')
 const deleteTask = require('./commands/delete')
 const complete = require('./commands/complete')

const method = process.argv[2]

switch (method) {
  case 'add':
    add(process.argv[3])
    break;
  case 'list':
    list()
    break;
  case 'deleteTask':
    deleteTask(process.argv[3])
    break;
  case 'complete':
    complete(process.argv[3])
    break;
}
