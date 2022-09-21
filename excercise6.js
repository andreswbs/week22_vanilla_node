const axios = require('axios')
const fs = require('fs').promises

async function writeToFile(filename, data) {
    await fs.writeFile(filename, data)
}

async function getPage(url, filename) {
    let res = await axios.get(url)
    writeToFile(filename, res.data)
}

getPage('http://google.com', 'google3.html')
getPage('http://yahoo.com', 'yahoo.html')