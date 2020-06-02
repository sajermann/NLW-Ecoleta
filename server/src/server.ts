import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuário');
  response.json([
    'Bruno',
    'Sajermann',
    'Marcia'
  ])
});

app.listen(3333);