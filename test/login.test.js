const request = require ('supertest');
const {expect} = require ('chai');
require ('dotenv').config();

const postLogin = require ('../fixtures/postLogin.json');
const postNologin = require ('../fixtures/postNologin.json');

describe ('Login', () => {
    describe ('POST /users/login', () => {
        

        it ('Deve retornar 200 e um token em string com credenciais válidas', async () => {
            const bodyLoginValido = {...postLogin}
            const resposta = await request (process.env.BASE_URL_REST)
            .post('/users/login')
            .set('Content-Type', 'application/json')
            .send(bodyLoginValido);

            //console.log(resposta.status) 
            //console.log(resposta.body)

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
       

        });       
            

            it ('Deve retornar 400 quando usuário não existe', async () => {
                const bodyLoginInvalido = {...postNologin} 
                const resposta = await request (process.env.BASE_URL_REST)
                .post('/users/login')
                .set('Content-Type', 'application/json')
                .send(bodyLoginInvalido);

            //console.log(resposta.status) 
            //console.log(resposta.body)

                expect(resposta.status).to.equal(400);
                expect(resposta.body).to.have.property('error');
            
            
        });
    });
});
