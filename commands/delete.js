const fs = require('fs')
const path = require('path')
const TASKFILEPATH = path.resolve(__dirname, '../tasks.json')

function deleteTask (taskId) {
  fs.readFile(TASKFILEPATH, 'utf8', (err, taskFileContents) => {
    const parsedObject = JSON.parse( taskFileContents )
    const taskArray = parsedObject.taskStorage
    let searchTerm = taskId,
        index = -1;
    for(let i = 0, len = taskArray.length; i < len; i++) {
      if (taskArray[i].id == searchTerm) {
          index = i;
          console.log('Deleted task ' + taskArray[i].id + ': ' + taskArray[i].name)
          taskArray.splice(i, 1)
          break;
      }
    }

    const updatedList = JSON.stringify(parsedObject)
    fs.writeFile(TASKFILEPATH, updatedList, (err) =>{
      if (err) throw err;
    })
  })
}

module.exports = deleteTask
