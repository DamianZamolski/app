import Koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import Router from '@koa/router';

const router = new Router();
router.get('name', '/', async (ctx) => {
  ctx.response.status = 200;
});

const middlewares = [cors(), body(), router.routes()];

const app = new Koa();
middlewares.forEach((middleware) => app.use(middleware));
app.listen(3000);
