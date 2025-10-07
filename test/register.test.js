const request = require('supertest');
const {expect} = require ('chai');
require('dotenv').config();

describe ('Usuários',() => {
    describe('/users/register', () => {
        it ('Criar usuário novo e retornar 201 + User válido', async () => {
            const novoUsuario = {
                username: `user_${Date.now()}`,  // para garantir que não vai dar conflito
                password: "123456",
                favorecidos: ["conta1"]
            } 

            const resposta = await request (process.env.BASE_URL_REST)
            .post('/users/register')
            .set('Content-Type', 'application/json')
            .send(novoUsuario)

            console.log(resposta.status, resposta.body);
            expect(resposta.status).to.equal(201);         
  
        });

    });
});