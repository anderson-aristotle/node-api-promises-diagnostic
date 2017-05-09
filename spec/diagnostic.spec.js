'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

const expect = chai.expect

chai.use(chaiAsPromised)

const diagnostic = require('../lib/diagnostic')

describe('Sum of lines in integers.txt', function () {
  it('should equal 88', function () {
    return expect(diagnostic.sumLines('data/integers.txt'))
      .to.eventually.equal(88)
  })
})

describe('Sum of lines in blanks.txt', function () {
  it('should equal 12', function () {
    return expect(diagnostic.sumLines('data/blanks.txt'))
      .to.eventually.equal(12)
  })
})

describe('Sum of lines in numbers.txt', function () {
  it('should equal 12.93', function () {
    return expect(diagnostic.sumLines('data/numbers.txt'))
      .to.eventually.equal(12.93)
  })
})

describe('Sum of lines in strings.txt', function () {
  it('should pass an error', function () {
    return expect(diagnostic.sumLines('data/strings.txt'))
      .to.eventually.be.rejectedWith(Error)
  })
})
