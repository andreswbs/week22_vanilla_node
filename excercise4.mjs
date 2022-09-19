import {promises as fs} from 'fs'

const readFromFile = async () => {
    const file = await fs.readFile('test.html')
    console.log(file.toString())
}
readFromFile()