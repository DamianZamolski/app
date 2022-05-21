import Koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import Router from '@koa/router';
import { MongoClient } from 'mongodb';
import { Pool } from 'pg';
import { Kafka } from 'kafkajs';

const kafka = new Kafka({ brokers: ['localhost:9092'], clientId: 'dz' });
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'dz' });

//const mongodb = new MongoClient('mongodb://localhost:27017');
//mongodb.connect();

const postgresql = new Pool({
  connectionString: 'postgresql://dz:dz@localhost:5432/dz',
});

const router = new Router();
router.post('champions', '/champions', async (context) => {
  await producer.send({
    topic: 'dz',
    messages: [{ value: context.request.body }],
  });
  context.body = '';
});
router.get('name', '/mongodb', async (context) => {
  //context.body = await mongodb
  //.db('dz')
  //.collection('champions')
  //.find()
  //.toArray();
});

router.get('name', '/postgresql', async (context) => {
  const { rows } = await postgresql.query('select * from champions');
  context.body = rows;
});

const middlewares = [cors(), body(), router.routes()];

const app = new Koa();
middlewares.forEach((middleware) => app.use(middleware));
app.listen(3000);

(async () => {
  await producer.connect();
  await consumer.connect();
  await consumer.subscribe({ topic: 'dz', fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(message.value?.toString());
    },
  });
})();
