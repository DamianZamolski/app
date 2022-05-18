import Koa from 'koa';
import cors from '@koa/cors';
import body from 'koa-body';
import Router from 'koa-router';

const router = new Router();
router.post('name', '/', async (ctx) => {
  console.debug(ctx.request);
  ctx.response.status = 200;
});

const app = new Koa();
app.use(cors()).use(body()).use(router.routes()).use(router.allowedMethods());
app.listen(3000);
