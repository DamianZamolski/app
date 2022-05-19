import Koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import Router from '@koa/router';
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
client.connect();

const router = new Router();
router.get('name', '/', async (context) => {
  context.body = await client.db('dz').collection('champions').find().toArray();
});

const middlewares = [cors(), body(), router.routes()];

const app = new Koa();
middlewares.forEach((middleware) => app.use(middleware));
app.listen(3000);
