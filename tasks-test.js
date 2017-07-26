const { expect } = require('chai')
const add = require('./commands/add')
// const list = require('./tasks.js').list;
// const deleteTask = require('./tasks.js').deleteTask;
// const complete = require('./tasks.js').complete;
const fs = require('fs')
const path = require('path')
const TASKFILEPATH = path.resolve(__dirname, './tasks.json')

// describe('toDoList', function() {
//   it("should add a task to the storage list", function(done){
//     add('walk the cat')
//
//     fs.readFile(TASKFILEPATH, 'utf8', (err, taskFile) => {
//       const storage = JSON.parse(taskFile)
//       console.log("heyyy:", storage)
//       expect(storage.taskStorage[storage.taskStorage.length - 1].name).to.eql('walk the cat')
//       // expect(storage.taskStorage.length)
//       done();
//     });
//   })
// })

//testing the above without existing tasks.json:
//Uncaught SyntaxError: Unexpected token u in JSON at position 0 then
//Uncaught TypeError: Cannot read property 'name' of undefined (storage is { taskId: 0, taskStorage: [] }) then
//passes (last "name" in taskStorage is 'walk the cat') ---> 3rd test is a charm.

//other stuff we've been trying
describe('toDoList', function() {
  before(function(){
    return add('walk the cat')
  })

  it("should add a task to the storage list", function(done){
    getFileContents(done)
  })
})

function getFileContents(done) {
  fs.readFile(TASKFILEPATH, 'utf8', (err, file) => {
    if (err) throw err
    console.log('some sort of message greetings', file)
    var storage = JSON.parse(file)

    console.log(storage)
    expect(storage.taskStorage[storage.taskStorage.length - 1].name).to.eql('walk the cat')
    done()
  })
}
