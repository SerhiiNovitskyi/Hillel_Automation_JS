import { create } from 'domain';
import fs from 'fs-extra'
import fetch from 'node-fetch';

// let arrN = []
// async function readJsonAndWriteName (path='./response_1694287579730 (1).json') {
//     let jsonData2 = await fs.readJson(path)

//     for (let element of jsonData2.data) {
//         arrN.push(element['first_name'])
//     }
//     console.log(arrN)
//     await fs.writeJson('names.json', JSON.stringify(arrN))
// }



// async function getDataReqres () {
//     let response = await fetch ('https://reqres.in/api/users?page=2&per_page=5')
//     let data = await response.json()
//     await fs.writeFile('responseRreqres.json', JSON.stringify(data))
// }

// getDataReqres()
// readJsonAndWriteName('responseRreqres.json')    


const dataUser ={
    "username": "TestName",
    "email": "testmail@mailinator.com",
    "password": "qwerty"
  }


async function createUser (data) {
    const response = await fetch ('https://reqres.in/api/user/register',
 {      method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}  
    })
    const dataR = await response.json()
    console.log(dataR)
  }
 createUser(dataUser)