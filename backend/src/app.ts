import express, { Request, Response } from 'express';

import cors from 'cors';

import usersRouter from './routes/users.routes';
import areasRouter from './routes/area.routes';

const app = express();


app.use(cors());
app.use(express.json());



app.get("/", (_req: Request, res: Response) => {
    res.send('Hello word!!')
});

app.use("/api/users", usersRouter)

app.use("api/areas", areasRouter)


export { app }