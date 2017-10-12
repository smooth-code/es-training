'use strict'

var date = new Date()

var dateUtil = {
  getEllapsedMinutes(date) {
    return date.getHours() * 60 + date.getMinutes()
  },
  getTime(date) {
    return date.getHours() + ':' + date.getMinutes()
  },
  help() {
    console.log('dateUtil')
    for (var i in dateUtil) {
      console.log('- ' + i)
    }
  },
}

Object.defineProperty(dateUtil, 'help', {
  enumerable: false,
})

function Hello(name) {
  this.name = name
}

Hello.prototype.say = function say() {
  return 'hello ' + this.name + '!'
}

function HelloDate() {
  Hello.apply(this, arguments)
}

HelloDate.prototype = Object.create(Hello.prototype)
HelloDate.prototype.constructor = HelloDate

HelloDate.prototype.say = function say() {
  var result = Hello.prototype.say.call(this)
  return (
    result +
    ' ' +
    dateUtil.getTime(date) +
    ' (' +
    dateUtil.getEllapsedMinutes(date) +
    ' min)'
  )
}

const helloDate = new HelloDate('world')
console.log(helloDate.say())
