const axios = require('axios')
const fs = require('fs').promises

async function writeToFile(filename, data) {
    await fs.writeFile(filename, data)
}



async function getGooglePage() {
    const res = await axios.get('https://google.com')
    //console.log(res.data)
    writeToFile('google1.html', res.data)
}

getGooglePage()