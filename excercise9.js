const axios = require('axios')
const fs = require('fs').promises

function getPage(url, filename) {
    console.log('Starting to load ' + url)
    let loadingPagePromise = axios.get(url)
    loadingPagePromise.then((res) => {
        console.log('Ended loading url ' + url)
        fs.writeFile(filename, res.data).then(() => {
            console.log('Writing file to the disk finished: ' + filename)
        })
    })  
}

function writeTwoPageStatisticsToFile(url1, url2, filename ) {
    axios.get(url1)
        .then((res) => {
            return axios.get(url2).then((res2)=> {
                return new Promise(function(resolve, reject) {
                    resolve({res, res2})
                })
            })
        })
        .then(({res, res2}) => {
            console.log(res)
            const bitesInFile1 = res.data.length
            const bitesInFile2 = res2.data.length
            fs.writeFile(filename, `
                File ${url1} has ${bitesInFile1} bites
                File ${url2} has ${bitesInFile2} bites
                ` )
        })
}

//getPage('http://google.com', 'google3.html')
//getPage('http://yahoo.com', 'yahoo.html')
console.log('End of the Program reached')

writeTwoPageStatisticsToFile(
    'http://yahoo.com', 
    'http://google.com',
    'statistics3.txt'
)

