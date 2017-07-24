const fs = require('fs')
const path = require('path')
const TASKFILEPATH = path.resolve(__dirname, '../tasks.json')

function list() {
  fs.readFile(TASKFILEPATH, 'utf8', (err, taskFileContents) => {
    const parsedObject = JSON.parse( taskFileContents )
    const taskArray = parsedObject.taskStorage
    console.log("ID Description")
    console.log("-- -----------")
    for (var i = 0; i < taskArray.length; i++) {
      console.log(`${taskArray[i].id}  ${taskArray[i].name}`)
    }
    console.log(`\n`)
    if(parsedObject.taskId !== 1) {
      console.log(`You have ${parsedObject.taskId} tasks`)
    } else {
      console.log(`You have 1 task`)
    }
  })
}

module.exports = list
