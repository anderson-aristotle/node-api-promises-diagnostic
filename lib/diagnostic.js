'use strict'

const fs = require('fs')

// 1.  In the comment below, explain three advantages of using promises
//     intead of callbacks.
/*
  Your answer here.
*/

// 2.  The following function sums the numbers in a file through a callback
// implementation. This function takes the name of a plain text file with
// one number per line, as in data/integers.txt.
//
// Change the function to return a new Promise that gets resolved with the sum
// of the numbers from the file.
//
// Blank lines should be ignored.
//
// However, if there is a line with non-numeric content (e.g. "oops"),
// the Promise returned should be rejected.
//
// Use the following as the new function signature
// const sumLines = (filename) => { }

// You do not need to invoke the promise chain or call .then, the test will
// do that for you, you only need to convert this function into one that
// can have .then chained onto it.
const sumLines = (filename, callback) => {
  fs.readFile(filename, { encoding: 'utf8' }, (err, lines) => {
    if (err) {
      console.log(err.stack)
    }
    let lno = 0
    const sum = lines.split('\n').reduce((prev, curr, i) => {
      lno = i
      return prev + (+curr)
    }, 0)
    const error = isNaN(sum) && new Error(`line ${lno}: not a number`)
    callback(error, sum)
  })
}

module.exports = {
  sumLines
}
