import Router from 'koa-router';
import userRouter from './userRouter';

const router = new Router();
const viewRouter = new Router();

viewRouter.get('/404', async (ctx) => {
  await ctx.render('404', {
    title: 'haha'
  })
})
.get('/no_permission', async (ctx) => {
  await ctx.render('noPermission')
})

// 注册所有 api 路由
router.use('/api/v1', userRouter.routes(), userRouter.allowedMethods());

// 注册页面路由
router.use('/page', viewRouter.routes(), viewRouter.allowedMethods());

export default router;
