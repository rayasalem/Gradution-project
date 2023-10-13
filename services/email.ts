import express from 'express';
import dotenv from 'dotenv';
import connectToDatabase from '../DB/connection';
import indexRouter from './routes/indexRouter';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASEURL || '';

app.use(express.json());
connectToDatabase();

app.use(`${baseUrl}/auth`, indexRouter.authRouter);
app.use(`${baseUrl}/user`, indexRouter.userRouter);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.use((err, req, res, next) => {
  console.error(err); // Log the error
  res.status(err.cause || 500).json({ message: err.message, stack: err.stack });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
