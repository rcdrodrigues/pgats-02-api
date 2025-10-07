const request = require('supertest');
const {expect} = require ('chai');
require('dotenv').config();

describe ('Usuários',() => {
    describe('/users/register', () => {
        let usernameBase;

        before (() => {
            usernameBase = `user_${Date.now()}`;
        });

        it ('Criar usuário novo e retornar 201 + User válido', async () => {
            const novoUsuario = {
                username: usernameBase,  
                password: "123456",
                favorecidos: ["conta1"]
            } 

            const resposta = await request (process.env.BASE_URL_REST)
            .post('/users/register')
            .set('Content-Type', 'application/json')
            .send(novoUsuario)

            

           //console.log(resposta.status, resposta.body);
            expect(resposta.status).to.equal(201);         
  
        });

        it('Quando usuário já existe retorna 400', async () => {
            const duplicado = {
                username: usernameBase,           
                password: '123456',
                favorecidos: ['conta1'],
      };

           const resposta = await request(process.env.BASE_URL_REST)
             .post('/users/register')
             .set('Content-Type', 'application/json')
             .send(duplicado);

      //console.log(resposta.status, resposta.body);
      expect(resposta.status).to.equal(400);
      expect(resposta.body).to.have.property('error'); 
      
    });

            
        });

            

    });
