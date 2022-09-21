const axios = require('axios')
const fs = require('fs')

async function getPage(url, filename) {
    console.log('Starting to load ' + url)
    let res = await axios.get(url)
    console.log('Ended loading url ' + url)
    await fs.writeFile(filename, res.data)
    console.log('Writing file to the disk: ' + filename)
}

async function addNumbersAsyncronously(a, b) {
    return a + b
}

async function writeTwoPageStatisticsToFile(url1, url2, filename ) {
    let res = await axios.get(res1)
    let res2 = await axios.get(res2)
    console.log(`Ended loading urls ${url1}, ${url2}`)
    const bitesInFile1 = url1.length
    const bitesInFile2 = url2.length
    await fs.writeFile(filename, `
    File ${url1} has ${bitesInFile1} bites
    File ${url2} has ${bitesInFile2} bites
    ` )
}

getPage('http://google.com', 'google3.html')
getPage('http://yahoo.com', 'yahoo.html')

writeTwoPageStatisticsToFile(
    'http://yahoo.com', 
    'http://google.com',
    'statistics2.txt'
)



console.log(addNumbersAsyncronously(2,3))
let calculatedPromise = addNumbersAsyncronously(2,3)
calculatedPromise
    .then((result)=> {
        console.log('Result is: ' + result)
        return new Promise(function(resolve, reject) {
            resolve(result * result)
        })
    })
    .then((result2) => {
        console.log("result2: " + result2 )
    })
    

async function compute() {
    const result = await addNumbersAsyncronously(4, 5)
    console.log('Second Result is: ' + result)
}

compute()

console.log('End of the Program reached')
