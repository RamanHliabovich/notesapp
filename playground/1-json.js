const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)

data.name = 'Roma'
data.age = '21'

const final = JSON.stringify(data)
fs.writeFileSync('1-json.json', final)

