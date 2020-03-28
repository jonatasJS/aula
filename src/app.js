/**
  Rota / Recurso
 */

/**
  * Métoos HTTP:
  *
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informacão no back-end
  * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetos:
 *
 * Query Parms: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Routs Parms: Parâmetros ultilizados para indentificar recursos
 * Request Body: Corpo da requisição, ultilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CounchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

const { errors } = require('celebrate');
const express = require('express');
const cors = require('cors');
const routes = require('./routes')
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
