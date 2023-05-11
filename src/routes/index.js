const authRouter = require('./auth');
const userRouter = require('./users');


function route(app) {
  
    app.use('/auth', authRouter);
    app.use('/users', userRouter);
}

module.exports = route;
