const fs = require('fs')
const path = require('path')
const TASKFILEPATH = path.resolve(__dirname, '../tasks.json')

function list() {
  const task = {}
  fs.readFile(TASKFILEPATH, 'utf8', (err, taskFile) => {
    if(err == null) {
        listExists()
      } else if(err.code == 'ENOENT') {
        noListYet()
      }
  });
}

function noListYet() {
  console.log("ID Description")
  console.log("-- -----------")
  console.log(`You have 0 tasks`)
}

function listExists () {
  fs.readFile(TASKFILEPATH, 'utf8', (err, taskFileContents) => {
    const parsedObject = JSON.parse( taskFileContents )
    const taskArray = parsedObject.taskStorage
    const incompleteTasks = [];
    console.log("ID Description")
    console.log("-- -----------")
    for (var i = 0; i < taskArray.length; i++) {
      if(taskArray[i].complete === false){
        console.log(`${taskArray[i].id}  ${taskArray[i].name}`)
        incompleteTasks.push(taskArray[i])
      }
    }
    console.log(`\n`)
    if(incompleteTasks.length !== 1) {
      console.log(`You have ${incompleteTasks.length} tasks`)
    } else {
      console.log(`You have 1 task`)
    }
  })
}
module.exports = list
