import { ObjectId } from 'mongodb'
import { faker } from "@faker-js/faker"

//list of commands
// docker run --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:6.0-ubuntu2204
//docker exec -it mongo mongosh


describe('Find data', () => {

    context('usage of mongodb', () =>{
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })
    })

    context('UI & API request', () => {

        it('login by UI', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/users/authenticate',
                body: {username:"SuperAdmin",password:"Ukraine23"},
            }).then((response) => {
            const authToken = response.body.token
            Cypress.env('authTNext13', authToken)
            })
        })
        
        it('create Fake User', () => {
            let firstName = faker.person.firstName()
            let lastName = faker.person.lastName()
            let userName = faker.internet.userName()
            let passWord = faker.internet.password()
            cy.request({
                method: 'POST',
                url: 'http://localhost:3000/api/users/register',
                headers: {
                    Authorization: `Bearer ${Cypress.env('authTNext13')}`
                },
                body: {
                    firstName: firstName,
                    lastName: lastName,
                    password: passWord,
                    username: userName,      
                }
            }).then((request) =>{
                const fakeUserName = request.body.username
                Cypress.env('fake_username', fakeUserName)
            })
        })

        it('should check if the user is created', () => {

            const fakeUserName = Cypress.env('fake_username');
            // Make a request to get the list of users
            cy.request({
              method: 'GET',
              url: 'http://localhost:3000/api/users',
              headers: {
                authorization: `Bearer ${Cypress.env('authTNext13')}`
              },
            }).then((response) => {
              // Check if the user with the created username is in the list
              expect(response.status).to.equal(200);
              expect(response.body).to.be.an('array');
              const newUserExists = response.body.some((user) => user.username === fakeUserName);
              expect(newUserExists).to.exist;
              expect(newUserExists.username).to.equal(fakeUserName);
            });
          });    

        // it('create user', () => {
        //     cy.request({
        //         method: 'POST',
        //         url: 'http://localhost:3000/api/users/register',
        //         headers: {
        //             Authorization: `Bearer ${Cypress.env('authTNext13')}`
        //         },
        //         body: {
        //             firstName: 'ff4fxf2',
        //             lastName: 'sssxf42',
        //             username: 'fffxx4fsss2',
        //             password: 'abcx41f232',
        //         }
        //     })
        // })
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })
    })    
})    