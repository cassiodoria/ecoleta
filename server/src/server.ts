import express from 'express'; 

const app = express();

app.get('/users', (request, response) => {
    response.json(
        [
            "Diego",
            "Cássio",
            "Pedro",
            "João",
            "Maria",
            "Amanda"
        ]
    );
})

app.listen(3333);