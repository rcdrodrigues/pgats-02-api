const request = require ('supertest');
const {expect} = require ('chai');
require ('dotenv').config();
const postLogin = require ('../fixtures/postLogin.json');

describe ('Login', () => {
    describe ('POST /users/login', () => {
        const bodyLogin = {...postLogin}
        it ('Deve retornar 200 e um token em string com credenciar válidas', async () => {
            const resposta = await request (process.env.BASE_URL_REST)
            .post('/users/login')
            .set('Content-Type', 'application/json')
            .send(bodyLogin);

            console.log(resposta.status) 
            console.log(resposta.body)

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
            
        });
    });
});
