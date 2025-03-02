// Criar um aquuirvo packkage.json com ( npm init -y )

// Instalar biblioteca express ( npm i express )

// Rotas get = Listar , Post = Criar ,put = Editar varios , Patch = Editar Um  e delete = Deletar


import express from 'express'   // importanndo a biblieteca express
import { PrismaClient } from '@prisma/client'  // importanndo a biblieteca prisma

const prisma = new PrismaClient()   // avriavel do prisma



const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {    // Rota salavando os usuarios

  await prisma.user.create({
    data: {
      
      email: req.body.email,    // mandando informaçoes para o banco 
      name: req.body.name,
      age: req.body.age

    }

    })


    res.status(201).json(req.body)
})


app.get('/usuarios', (req, res)=> {    // Rota criando usuarios
    res.status(200).json(users)
})



app.listen(3000)



// 1 - Tipo de Rota / Método HTPP

// 2-  Endereço

// Criar nossa API de usuários

// Criar um usuário
// Listar todos usuário
// Editar todos usuário
// Deletar um usuário


// Automático node --watch server.js


// query params  :    servidor.com/usuarios?estado=bahia&cidade=salvador


// Route Params  :   servidor.com/usuarios22   => informação especifica


/* Bory Params {  

"nome": "Anderson", "id":37


} */

// 200 -> SUCESSO
// 400 -> ERRO CLIENTE
// 500 -> ERRO SERVIDOR


//   lignellidev    //  eelsZBVmapGgSiHR    MONGO DB

// usando bioblioteca prisma fazer coneção com o banco de dados 

// colocar o login e senha no env e depois do / colocar nome que dei no banco no caso USERS




// npx prisma studio