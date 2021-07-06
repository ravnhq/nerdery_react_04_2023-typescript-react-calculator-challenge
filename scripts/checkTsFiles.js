const path = require('path')
const fs = require('fs')

const javascriptFiles = new Set()

const findJavascriptFiles = (startPath) => {
  const files = fs.readdirSync(startPath)

  for (let i = 0; i < files.length; i++) {
    let filename = path.join(startPath, files[i])

    let stat = fs.lstatSync(filename)

    if (stat.isDirectory()) {
      findJavascriptFiles(filename) //recurse
    } else if (filename.indexOf('.js') >= 0) {
      javascriptFiles.add(filename)
    }
  }
}

findJavascriptFiles(path.resolve(__dirname, '../src'))

if (javascriptFiles.size > 0) {
  console.error(`
Not all javascript files have been changed to typescript:

${[...javascriptFiles].join('\n')}
  `)
  process.exit(1)
}
