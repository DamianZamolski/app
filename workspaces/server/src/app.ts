import Koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import Router from '@koa/router';
import { MongoClient } from 'mongodb';
import { Pool } from 'pg';

const mongodb = new MongoClient('mongodb://localhost:27017');
//mongodb.connect();

const postgresql = new Pool({
  connectionString: 'postgresql://dz:dz@localhost:5432/dz',
});

const router = new Router();
router.get('name', '/mongodb', async (context) => {
  context.body = await mongodb
    .db('dz')
    .collection('champions')
    .find()
    .toArray();
});

router.get('name', '/postgresql', async (context) => {
  const { rows } = await postgresql.query('select * from champions');
  context.body = rows;
});

const middlewares = [cors(), body(), router.routes()];

const app = new Koa();
middlewares.forEach((middleware) => app.use(middleware));
app.listen(3000);
