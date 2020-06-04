import express from 'express'; 

const app = express();
app.use(express.json());

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Busca uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Cria uma usuário
// GET  http://localhost:3333/users = Lista usuários
// GET  http://localhost:3333/users/5 = Busca dados do usuário com ID 5

// Resquest Param: Parâmetros que vem na própria rota que identificam um recurso
// Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação...
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = "Cássio"
// knex('users').where('name', 'Cássio').select('*')

const users = [
    'Diego',
    'Cássio',
    'Pedro',
    'João',
    'Maria',
    'Amanda'
];

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filtredUsers = search ? users.filter(user => user.includes(search)) : users;
    return response.json(filtredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    return response.json(users[id]);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email
    };
    
    return response.json(user);
});

app.listen(3333);