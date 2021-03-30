import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/login';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(router);
app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Hi there!</h1>
    </div>
  `);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
