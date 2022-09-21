const axios = require('axios')
const fs = require('fs')

function getPage(url, filename, nextFunc) {
    console.log('Starting to load ' + url)
    axios.get(url, (res) => {
        console.log('Ended loading url ' + url)
        fs.writeFile(filename, data, () => {
            console.log('Writing file to the disk: ' + filename)
            nextFunc(res)
        })
    })
}

getPage('http://google.com', 'google3.html', () => {console.log('First getPage Finished')})
getPage('http://yahoo.com', 'yahoo.html', () => {console.log('Second getPage Finished')})

console.log('End of the Program reached')
