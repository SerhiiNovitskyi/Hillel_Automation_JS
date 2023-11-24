// const fs = require('fs-extra');
import fs from 'fs-extra'
let arrN = []
async function readJsonAndWriteName (path='./response_1694287579730 (1).json') {
    let jsonData2 = await fs.readJson(path)

    for (let element of jsonData2.data) {
        arrN.push(element['first_name'])
    }
    console.log(arrN)
    await fs.writeJson('names.json', JSON.stringify(arrN))
}

readJsonAndWriteName()