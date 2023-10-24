import express ,{Request,Response,NextFunction}from 'express'
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
app.use(`${baseurl}course`,indexRouter.courseRouter)
app.use(`${baseurl}lesson`,indexRouter.lessonRouter)
app.use(`${baseurl}user-bits-and-hearts`,indexRouter.bitsAndHeartsRouter)
app.use(`${baseurl}courses`,indexRouter.progressRouter)
app.use(`${baseurl}quiz`,indexRouter.quizRouter)
app.use(`${baseurl}quizTaker`,indexRouter.quizTakerRouter)
app.use(`${baseurl}question`,indexRouter.questionRouter)
app.use(`${baseurl}category`,indexRouter.categoryRouter)
app.use(`${baseurl}blog`,indexRouter.blogRouter)
app.use(`${baseurl}Discuss`,indexRouter.commentRouter)
app.use(`${baseurl}Discuss`,indexRouter.postRouter)



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