const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/*
* Método HTTP:
* 
* GET : utilizamos quando iremos buscar ou listar alguma informação do back-end 
* POST : Criar uma informação nos back-end
* PUT : Alterar uma informação no back-end
* DELETE : Deletar uma informação no back-end
*/

/**
 * Tipos de parametros
 * 
 * Query Params : Parametros nomeados enviados na rota após "?" geralmente servem para (Filtros, paginação)
 * Route Params : Parâmetros utilizados para identificar recursos
 * Request Body : Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.listen(3333);