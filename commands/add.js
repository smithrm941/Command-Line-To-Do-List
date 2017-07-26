const fs = require('fs')
const path = require('path')
const TASKFILEPATH = path.resolve(__dirname, '../tasks.json')


function add(name)  {
  const task = { name: name, complete: false }

  fs.readFile(TASKFILEPATH, 'utf8', (err, taskFile) => {
    if(err == null) {
        addTask(task, taskFile)
      } else if(err.code == 'ENOENT') {
        addIfEmpty(task)
      }
  });
}

function addIfEmpty(task) {
  const initTaskFileContent = JSON.stringify({taskId: 0, taskStorage: []})

  fs.writeFile(TASKFILEPATH, initTaskFileContent, 'utf8', (err) => {
    if (err) throw err;

    fs.readFile(TASKFILEPATH, 'utf8', (err, taskFileContents) => {
      addTask(task, taskFileContents)
    })
  });
}

function addTask(task, taskFile) {
  const parsed = JSON.parse(taskFile)

  parsed.taskId++
  task.id = parsed.taskId
  parsed.taskStorage.push(task)

  fs.writeFile(TASKFILEPATH, JSON.stringify(parsed), (err) => {
    if (err) throw err
    console.log(`Created task ${task.id}`)
  });
}

module.exports = add
