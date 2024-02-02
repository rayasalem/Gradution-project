import express ,{Request,Response,NextFunction}from 'express'
import * as dotenv from 'dotenv';
import connectDB from './db/connection';
import * as indexRouter from './routes/indexRouter'
import cors from 'cors';
const app = express()
const PORT=process.env.PORT
app.use(cors());
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
app.use(`${baseurl}question`,indexRouter.questionRouter)
app.use(`${baseurl}blog`,indexRouter.blogRouter)
app.use(`${baseurl}Discuss`,indexRouter.commentRouter)
app.use(`${baseurl}Discuss`,indexRouter.postRouter)
app.use(`${baseurl}userpost`,indexRouter.postRouter)
app.use(`${baseurl}textSlide`,indexRouter.textSlideRouter)
app.use(`${baseurl}Feed`,indexRouter.FeedBackRouter)
app.use(`${baseurl}ChatLesson`,indexRouter.chatRouter)
app.use(`${baseurl}Course`,indexRouter.EnrollmentRouter)

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