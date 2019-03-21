'use strict'

const fs = require('fs')

// 1.  In the comment below, explain three advantages of using promises
//     intead of callbacks.
/*
 module code
*/

// 2.  The following function counts the number of lines in a file through a
// callback implementation. This function accepts the name of a plain text file
// as a string, and a callback function.

// Change the lineCounter function to return a new Promise that gets resolved
// with the number of lines from the file, instead of invoking the callback.

// You do not need to invoke the promise chain or call `.then`, the test will
// do that for you, you only need to convert this function into one that
// can have .then chained onto it.

const lineCounter = (inFile, callback) => {
  fs.readFile(inFile, 'utf8', (err, content) => {
    if (err) {
      callback(err)
      return
    }
    const Promise = new Promise(function (resolve, err) {
      const numLines = content.split('\n').length
      callback(null, numLines)
    })
  })
}

module.exports = {
  lineCounter
}
