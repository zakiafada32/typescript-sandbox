import express from 'express';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controller/LoginController';
import './controller/RootController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['auth'] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('listening on port 3000');
});
