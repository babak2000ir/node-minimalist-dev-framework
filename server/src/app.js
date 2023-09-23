//env import & config
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

//import node
import path from 'node:path';
import { fileURLToPath } from 'node:url';

//import npm
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Koa();
const router = new Router();
app.use(bodyParser());

app.use(async (ctx, next) => {
    // Log the request to the console
    const timeStamp = `${(new Date()).toLocaleDateString('en-GB')} ${(new Date()).toLocaleTimeString('en-GB')}`;
    console.log(`${timeStamp} ${ctx.request.method} '${ctx.request.url}' ${JSON.stringify(ctx.request.body)}`);
    await next();
});

router.get('/', async (ctx) => {
    ctx.body = 'Now I\'m alive!';
});

router.get('/api', async (ctx) => {
    ctx.body = "Hello World!"
});

app.use(router.routes());

const port = process.env.port || 8080;
app.listen(port);
console.log(`Server is listening on port ${port}`);
