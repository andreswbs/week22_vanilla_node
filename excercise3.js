const fs = require('fs').promises

async function readFromFile() {
    const file = await fs.readFile('test.html')
    console.log(file.toString())
}
readFromFile()