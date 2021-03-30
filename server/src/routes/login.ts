import { Router, Response, Request } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post(
  '/login',
  (
    req: Request<unknown, unknown, { email: string; password: string }>,
    res: Response
  ) => {
    const { email, password } = req.body;
    res.send(`${email} ${password}`);
  }
);

export { router };
