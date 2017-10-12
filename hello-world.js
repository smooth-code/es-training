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

dateUtil.help()
