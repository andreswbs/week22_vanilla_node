const fs = require('fs').promises

async function writeToFile() {
    await fs.writeFile('test1.html', 'hello World')
}

writeToFile()