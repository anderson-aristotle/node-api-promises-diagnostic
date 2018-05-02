'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

const expect = chai.expect

chai.use(chaiAsPromised)

const diagnostic = require('../lib/diagnostic')

describe('Count the number of lines in integers.txt', function () {
  it('should equal 11', function () {
    return expect(diagnostic.lineCounter('data/integers.txt'))
      .to.eventually.equal(11)
  })
})

describe('Count the number of lines in blanks.txt', function () {
  it('should equal 12', function () {
    return expect(diagnostic.lineCounter('data/blanks.txt'))
      .to.eventually.equal(12)
  })
})

describe('Count the number of lines in number.txt', function () {
  it('should equal 5', function () {
    return expect(diagnostic.lineCounter('data/numbers.txt'))
      .to.eventually.equal(5)
  })
})

describe('Count the number of lines in strings.txt', function () {
  it('should equal 6', function () {
    return expect(diagnostic.lineCounter('data/strings.txt'))
      .to.eventually.equal(6)
  })
})
