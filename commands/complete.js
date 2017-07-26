const fs = require('fs')
const path = require('path')
const TASKFILEPATH = path.resolve(__dirname, '../tasks.json')

function complete (taskId) {
  fs.readFile(TASKFILEPATH, 'utf8', (err, taskFileContents) => {
    const parsedObject = JSON.parse( taskFileContents )
    const taskArray = parsedObject.taskStorage
    var searchTerm = taskId,
        index = -1;
    for(var i = 0, len = taskArray.length; i < len; i++) {
      if (taskArray[i].id == searchTerm) {
          index = i;
          console.log('Completed task ' + taskArray[i].id + ': ' + taskArray[i].name)
          taskArray[i].complete = true;
          break;
      }
    }

    const updatedList = JSON.stringify(parsedObject)
    fs.writeFile(TASKFILEPATH, updatedList, (err) =>{
      if (err) throw err;
    })
  })
}

module.exports = complete
