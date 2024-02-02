import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Navbar from './components/homePage/navbarSection';
import SignupSection from './components/homePage/signUp';
import VerifyEmailPage from './components/homePage/signUp/VerifyEmailPage';
import SigninSection from './components/signIn';
import ForgotPasswordPage from './components/signIn/forgetPassword';
import ResetPasswordPage from './components/signIn/resetPassword';
import DoneLessonPage from './components/courses/lessons/LessonDone';
import HTMLCourse from './components/courses/HTML';
import IndexCourse from './components/courses/CourseIndex';
import CSSCourse from './components/courses/CSS';
import PythonCourse from './components/courses/Python/index';
import ReactCourse from './components/courses/React';
import JSCourse from './components/courses/JavaScript';
import ProfilePage from './components/profilePage/ProfilePage';
import ModelSetting from './components/profilePage/setting/ModelSetting';
import Admin from './components/admin/Admin';
import Update from './components/admin/changePassword/ChangePassword';
import UpdateUser from './components/admin/updateUser/UpadteUser';
import CreateCourse from './components/admin/course/CreateCourse';
import JavaCourse from './components/courses/Java';
import CreateLesson from './components/admin/lesson/CreateLesson';
import UpdateLesson from './components/admin/lesson/UpdateLesson';
import CreateQuiz from './components/admin/quiz/CreateQuiz';
import UpdateQuiz from './components/admin/quiz/UpdateQuiz';
import LessonOneInJava from './components/courses/Java/lessonJava/LessonOne';
import CreateQustion from './components/admin/question/CreateQustion';
import CreateTextSlide from './components/admin/TextSlide/CreateTextSlide';
import UpdateQustion from './components/admin/question/UpdateQustion';
import UpdateTextSlide from './components/admin/TextSlide/UpdateTextSlide';
import CreateQustionInQuiz from './components/admin/question/CreateQustionInQuiz';
import QuizJava from './components/courses/Java/quizJava/QuizJava';
import Discuss from './components/discuss/indexDiscuss';
import NewPost from './components/discuss/newPost/NewPost';
import PostComponent from './components/discuss/post/PostComponent';
import Blog from './components/blog/indexBlog';
import BlogTopic from './components/blog/Blog';
import CreateBlog from './components/admin/blog/createBlog';
import AddSectionPage from './components/admin/blog/createSection';
import UpdateBlog from './components/admin/blog/updateBlog';
import UpdateSection from './components/admin/blog/updateSection';
import Compiler from './components/compiler/Test';
import CompilerPage from './components/compiler/Compiler';
import SQlCourse from './components/courses/sql';
import LessonSQL from './components/courses/sql/lessonSql/LessonSQL';
import QuizSQL from './components/courses/sql/quizSql/QuizSQL';
import SendFeedBack from './components/feedBack/SendFeedBack';
import DisplayFeedBack from './components/admin/feedBack/displayFeedBack';
import CreateUser from './components/admin/createUser/CreateUser';
import CertificatePage from './components/courses/certifcate/CertificatePage';
import { useAuth } from './components/AuthContext';
import Leaderboard from './components/Leaderboard/Leaderboard';
import UpdateCourse from './components/admin/course/UpdateCourse';
import HTMLRoutes from './courseRouter/HTMLRoutes';
import CSSRoutes from './courseRouter/CSSRoutes';
import PythonRoutes from './courseRouter/PythonRoutes';
import JSRoutes from './courseRouter/JSRoutes';
import ReactRoutes from './courseRouter/ReactRoutes';
import { getlistCoures, getprofileInfo } from './api/userAction';
import Course from './components/courses/Course';
function App() {
  const [userIsAddict, setuserIsAddict] = React.useState(false);
  const { authenticated } = useAuth();  
  useEffect(() => {
    const fetchData = async () => {
      try {
          const profileInfo = await getprofileInfo(); 
          if (profileInfo) {
      
            if (profileInfo?.user?.role === 'admin') {
              setuserIsAddict(true);
            }
          }
      } catch (error) {
        console.error('Error fetching profile info:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <Router>
      
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} /> 
        <Route path="/VerifyEmailPage" element={<VerifyEmailPage />} />
        {!authenticated ?( <>
          <Route path="/signin" element={<SigninSection />} /> 
          <Route path="SignUp" element={<SignupSection />} /> 
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          </>):(<>
          <Route path='/leaderboard' element={<Leaderboard/>} />
          <Route path="/feedBack" element={<SendFeedBack />} /> 
          <Route path='/DoneLesson' element={<DoneLessonPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/discuss' element={<Discuss/>} />
          <Route path='/discuss/New' element={<NewPost/>} />
          <Route path='/discuss/:postId' element={<PostComponent/>} />
          <Route path='/Blogs' element={<Blog/>} />
          <Route path='/Blog/:blogId' element={<BlogTopic/>} /> 
          <Route path="/Title" element={<CreateBlog />} />
          <Route path="/Compiler" element={<CompilerPage/>} />
          <Route path="/learn" element={<IndexCourse/>} />
          <Route path='/learn/n/:courseId' element={<Course />}/>
          <Route path='/learn/nl/:LessonId' element={<LessonSQL/>} />
          <Route path='/learn/nq/:quizId' element={<QuizSQL/>} />  
          <Route path='/learn/Java/:courseId' element={<JavaCourse/>} />
          <Route path='/learn/Java/lesson/:LessonId' element={<LessonOneInJava/>} />
          <Route path='/learn/Java/quiz/:quizId' element={<QuizJava/>} />
          <Route path='/learn/SQL/:courseId' element={<SQlCourse/>} />
          <Route path='/learn/SQL/lesson/:LessonId' element={<LessonSQL/>} />
          <Route path='/learn/SQL/quiz/:quizId' element={<QuizSQL/>} />  
          <Route path='/learn/html/:courseId' element={<HTMLCourse/>} />
          <Route path="/learn/html/:LessonId/*" element={<HTMLRoutes/>}/>
          <Route path='/learn/css/:courseId' element={<CSSCourse/>} />
          <Route path='/learn/css/:LessonId/*' element={<CSSRoutes/>} />
          <Route path='/learn/python/:courseId' element={<PythonCourse/>} />
          <Route path='/learn/python/:LessonId/*' element={<PythonRoutes/>} />
          <Route path='/learn/React/:courseId' element={<ReactCourse/>} />
          <Route path='/learn/React/:LessonId/*' element={<ReactRoutes/>} />
          <Route path='/learn/javaScript/:courseId' element={<JSCourse/>} />
          <Route path='/learn/javaScript/:LessonId/*' element={<JSRoutes/>} />
          <Route path='/profile/settings' element={<ModelSetting/>} />
          <Route path="/DevLoom/Compiler" element={<Compiler/>} />
          <Route path="/certificate/:projectName/:recipientName/:day/:month/:year" element={<CertificatePage/>} />
          {userIsAddict&&(<>
          <Route path="/DevLoom/admin" element={<Admin/>} /> 
          <Route path="/DevLoom/admin/createUser" element={<CreateUser/>} /> 
          <Route path="/DevLoom/admin/AllFeedBack" element={<DisplayFeedBack/>} /> 
          <Route path="/DevLoom/admin/changePassword/:userId" element={<Update/>} /> 
          <Route path="/DevLoom/admin/updateUser/:userId" element={<UpdateUser/>} /> 
          <Route path="/DevLoom/admin/createCourse" element={<CreateCourse/>} />
          <Route path="/DevLoom/admin/updateCourse/:courseId" element={<UpdateCourse/>} /> 
          <Route path="/DevLoom/admin/createLesson/:courseId" element={<CreateLesson/>} /> 
          <Route path="/DevLoom/admin/updateLesson/:lessonId" element={<UpdateLesson/>} />
          <Route path="/DevLoom/admin/createQuiz/:courseId" element={<CreateQuiz/>} /> 
          <Route path="/DevLoom/admin/updateQuiz/:quizId" element={<UpdateQuiz/>} />  
          <Route path="/DevLoom/admin/createQustion/:lessonId" element={<CreateQustion/>} />
          <Route path="/DevLoom/admin/createQustionInQuiz/:quizId" element={<CreateQustionInQuiz/>} />
          <Route path="/DevLoom/admin/createTextSlide/:lessonId" element={<CreateTextSlide/>} />
          <Route path="/DevLoom/admin/updateQustion/:questionId" element={<UpdateQustion/>} />
          <Route path="/DevLoom/admin/updateTextSlide/:textSlideId" element={<UpdateTextSlide/>} />
          <Route path="/DevLoom/admin/addSection/:blogId" element={<AddSectionPage />} />
          <Route path="/DevLoom/admin/updateBlog/:blogId"element={<UpdateBlog/>} />
          <Route path="/DevLoom/admin/updateSectionInBlog/:blogId/:sectionNumber"element={<UpdateSection/>} />
          </>)}
          </>)}
        </Routes>
      
    </Router>
  );
}
export default App;