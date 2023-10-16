import express ,{Request,Response, NextFunction}from 'express'

import * as dotenv from 'dotenv';
import connectDB from './db/connection';
import * as indexRouter from './routes/indexRouter'
const app = express()
const PORT=process.env.PORT
app.use(express.json());
connectDB();
dotenv.config()
const baseurl=process.env.BASEURL
app.use(`${baseurl}auth`,indexRouter.authRouter)
app.use(`${baseurl}user`,indexRouter.userRouter)
app.use(`${baseurl}user`,indexRouter.courseRouter)
app.use(`${baseurl}user`,indexRouter.lessonRouter)
app.use('*',(req:Request,res:Response,)=>{
    res.status(404).json({message:"page not found"})
})


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
      console.error(err.stack); 
      res.status(err['cause']).json({ message: err.message, stack: err.stack });
    }
  });
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))