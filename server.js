// Criar um aquuirvo packkage.json com ( npm init -y )

// Instalar biblioteca express ( npm i express )

// Rotas get = Listar , Post = Criar ,put = Editar varios , Patch = Editar Um  e delete = Deletar

import express from 'express'   // importanndo a biblieteca express

const app = express()
app.use(express.json());


app.get('/usuarios', (req, res)=> {
    res.send('OLá, mundo! ');
})

app.post('/usuarios', (req, res)=> {
    res.send('Usuário criado ');
})

app.listen(3000)





// 1 - Tipo de Rota / Método HTPP

// 2-  Endereço

// Criar nossa API de usuários

// Criar um usuário
// Listar todos usuário
// Editar todos usuário
// Deletar um usuário









