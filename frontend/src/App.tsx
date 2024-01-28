import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage/HomePage';
import PageNotFound from './components/pageNotFound/PageNotFound';
import CompilerPage from './components/courses/compiler/Compiler';
import Navbar from './components/homePage/navbarSection';
import SignupSection from './components/homePage/signUp';
import VerifyEmailPage from './components/homePage/signUp/VerifyEmailPage';
import SigninSection from './components/signIn';
import ForgotPasswordPage from './components/signIn/forgetPassword';
import ResetPasswordPage from './components/signIn/resetPassword';
import { AuthProvider } from './components/AuthContext';
import DoneLessonPage from './components/courses/lessons/LessonDone';
import LessonOne from './components/courses/HTML/lessonHtml/LessonOne';
import HTMLCourse from './components/courses/HTML';
import QuizOne from './components/courses/HTML/quizHtml/QuizOne';
import LessonFour from './components/courses/HTML/lessonHtml/LessonFour';
import LessonFive from './components/courses/HTML/lessonHtml/LessonFive';
import LessonSix from './components/courses/HTML/lessonHtml/LessonSix';
import QuizTwo from './components/courses/HTML/quizHtml/QuizTwo';
import LessonNine from './components/courses/HTML/lessonHtml/LessonNine';
import LessonTen from './components/courses/HTML/lessonHtml/LessonTen';
import QuizThree from './components/courses/HTML/quizHtml/QuizThree';
import LessonTwo from './components/courses/HTML/lessonHtml/LessonTwo';
import LessonThree from './components/courses/HTML/lessonHtml/LessonThree';
import LessonEight from './components/courses/HTML/lessonHtml/LessonEight';
import LessonSeven from './components/courses/HTML/lessonHtml/LessonSeven';
import IndexCourse from './components/courses/CourseIndex';
import CSSCourse from './components/courses/CSS';
import LessonOneInCSS from './components/courses/CSS/lessonCss/LessonOne';
import LessonTwoInCSS from './components/courses/CSS/lessonCss/LessonTwo';
import LessonThreeInCSS from './components/courses/CSS/lessonCss/LessonThree';
import QuizOneInCss from './components/courses/CSS/quizCss/QuizOne';
import LessonFourInCSS from './components/courses/CSS/lessonCss/LessoFour';
import LessonFiveInCSS from './components/courses/CSS/lessonCss/LessonFive';
import LessonSixInCSS from './components/courses/CSS/lessonCss/LessonSix';
import LessonSevenInCSS from './components/courses/CSS/lessonCss/LessonSeven';
import LessonNineInCSS from './components/courses/CSS/lessonCss/LessonNine';
import LessonEightInCSS from './components/courses/CSS/lessonCss/LessonEight';
import LessonTenInCSS from './components/courses/CSS/lessonCss/LessonTen';
import QuizTwoInCss from './components/courses/CSS/quizCss/QuizTwo';
import QuizThreeInCss from './components/courses/CSS/quizCss/QuizThree';
import PythonCourse from './components/courses/Python/index';
import LessonOneInPython from './components/courses/Python/lessonPython/LessonOne';
import LessonTwoInPython from './components/courses/Python/lessonPython/LessonTwo';
import LessonThreeInPython from './components/courses/Python/lessonPython/LessonThree';
import LessonFourInPython from './components/courses/Python/lessonPython/LessonFour';
import LessonFiveInPython from './components/courses/Python/lessonPython/LessonFive';
import LessonTenInPython from './components/courses/Python/lessonPython/LessonTen';
import LessonNineInPython from './components/courses/Python/lessonPython/LessonNine';
import LessonEightInPython from './components/courses/Python/lessonPython/LessonEight';
import LessonSevenInPython from './components/courses/Python/lessonPython/LessonSeven';
import LessonSixInPython from './components/courses/Python/lessonPython/LessonSix';
import QuizOneInPython from './components/courses/Python/quizPython/QuizOne';
import QuizThreeInPython from './components/courses/Python/quizPython/QuizThree';
import QuizTwoInPython from './components/courses/Python/quizPython/QuizTwo';
import ReactCourse from './components/courses/React';
import QuizThreeReact from './components/courses/React/QuizReact/QuizThree';
import QuizTwoReact from './components/courses/React/QuizReact/QuizTwo';
import QuizOneReact from './components/courses/React/QuizReact/QuizOne';
import LessonOneReact from './components/courses/React/LessonReact/LessonOne';
import LessonTwoReact from './components/courses/React/LessonReact/LessonTwo';
import LessonThreeReact from './components/courses/React/LessonReact/LessonThree';
import LessonFourReact from './components/courses/React/LessonReact/LessonFour';
import LessonFiveReact from './components/courses/React/LessonReact/LessonFive';
import LessonSixReact from './components/courses/React/LessonReact/LessonSix';
import LessonSevenReact from './components/courses/React/LessonReact/LessonSeven';
import LessonEightReact from './components/courses/React/LessonReact/LessonEight';
import LessonNineReact from './components/courses/React/LessonReact/LessonNine';
import LessonTenReact from './components/courses/React/LessonReact/LessonTen';
import JSCourse from './components/courses/JavaScript';
import LessonOnejs from './components/courses/JavaScript/JSLesson/LessonOne';
import LessonTwojs from './components/courses/JavaScript/JSLesson/LessonTwo';
import LessonThreejs from './components/courses/JavaScript/JSLesson/LessonThree';
import LessonFourjs from './components/courses/JavaScript/JSLesson/LessonFour';
import LessonFivejs from './components/courses/JavaScript/JSLesson/LessonFive';
import LessonSixjs from './components/courses/JavaScript/JSLesson/LessonSix';
import LessonSevenjs from './components/courses/JavaScript/JSLesson/LessonSeven';
import LessonEightjs from './components/courses/JavaScript/JSLesson/LessonEight';
import LessonNinejs from './components/courses/JavaScript/JSLesson/LessonNine';
import LessonTenjs from './components/courses/JavaScript/JSLesson/LessonTen';
import QuizThreejs from './components/courses/JavaScript/QuizJS/QuizThree';
import QuizTwojs from './components/courses/JavaScript/QuizJS/QuizTwo';
import QuizOnejs from './components/courses/JavaScript/QuizJS/QuizOne';
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
import CertificatePage from './components/courses/certifcate/CertificatePage';
import { useAuth } from './components/AuthContext';
function App() {
  const { authenticated } = useAuth();
  
  return (
    <Router>
        <Navbar />
        <Routes>
        {!authenticated ?( <>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/signin" element={<SigninSection />} /> 
          <Route path="/compilers" element={<CompilerPage />} /> 
          <Route path="SignUp" element={<SignupSection />} /> 
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/VerifyEmailPage" element={<VerifyEmailPage />} /> 
          <Route path="*" element={<PageNotFound />} /> 
          </>):(<>
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path='/DoneLesson' element={<DoneLessonPage/>} />
          <Route path='/profile' element={<ProfilePage/>} />
          <Route path='/discuss' element={<Discuss/>} />
          <Route path='/discuss/New' element={<NewPost/>} />
          <Route path='/discuss/:postId' element={<PostComponent/>} />
          <Route path='/Blogs' element={<Blog/>} />
          <Route path='/Blog/:blogId' element={<BlogTopic/>} /> 
          <Route path="/Title" element={<CreateBlog />} />
          <Route path="/DevLoom/admin/addSection/:blogId" element={<AddSectionPage />} />
          <Route path="/DevLoom/admin/updateBlog/:blogId"element={<UpdateBlog/>} />
          <Route path="/DevLoom/admin/updateSectionInBlog/:blogId/:sectionNumber"element={<UpdateSection/>} />
          <Route path="/learn" element={<IndexCourse/>} />
          <Route path='/learn/Java/:courseId' element={<JavaCourse/>} />
          <Route path='/learn/Java/lesson/:LessonId' element={<LessonOneInJava/>} />
          <Route path='/learn/Java/quiz/:quizId' element={<QuizJava/>} />
          <Route path="/certificate/:projectName/:recipientName/:day/:month/:year" element={<CertificatePage/>} />
       

          <Route path='/learn/html/:courseId' element={<HTMLCourse/>} />
          <Route path="/learn/html/:LessonId/lesson1"element={<LessonOne/>}/>
          <Route path="/learn/html/:LessonId/lesson2"element={<LessonTwo/>}/>
          <Route path="/learn/html/:LessonId/lesson3"element={<LessonThree/>}/>
          <Route path="/learn/html/:quizId/Quiz1" element={<QuizOne />} />
          <Route path="/learn/html/:LessonId/lesson4" element={<LessonFour />} />
          <Route path="/learn/html/:LessonId/lesson5" element={<LessonFive />} />
          <Route path="/learn/html/:LessonId/lesson6" element={<LessonSix />} />
          <Route path="/learn/html/:quizId/Quiz2" element={<QuizTwo />} />
          <Route path="/learn/html/:LessonId/lesson7" element={<LessonSeven />} />
          <Route path="/learn/html/:LessonId/lesson8" element={<LessonEight />} />
          <Route path="/learn/html/:LessonId/lesson9" element={<LessonNine />} />
          <Route path="/learn/html/:LessonId/lesson10" element={<LessonTen />} />
          <Route path="/learn/html/:quizId/Quiz3" element={<QuizThree />} />
          <Route path='/learn/css/:courseId' element={<CSSCourse/>} />
          <Route path='/learn/css/:LessonId/lesson1' element={<LessonOneInCSS/>} />
          <Route path='/learn/css/:LessonId/lesson2' element={<LessonTwoInCSS/>} />
          <Route path='/learn/css/:LessonId/lesson3' element={<LessonThreeInCSS/>} />
          <Route path='/learn/css/:quizId/quiz1' element={<QuizOneInCss/>} />
          <Route path='/learn/css/:LessonId/lesson4' element={<LessonFourInCSS/>} />
          <Route path='/learn/css/:LessonId/lesson5' element={<LessonFiveInCSS/>} />
          <Route path='/learn/css/:LessonId/lesson6' element={<LessonSixInCSS/>} />
          <Route path='/learn/css/:quizId/quiz2' element={<QuizTwoInCss/>} />
          <Route path='/learn/css/:LessonId/lesson7' element={<LessonSevenInCSS/>} />
          <Route path='/learn/css/:LessonId/lesson9' element={<LessonNineInCSS/>} />
          <Route path='/learn/css/:LessonId/lesson8' element={<LessonEightInCSS/>} />
          <Route path='/learn/css/:LessonId/lesson10' element={<LessonTenInCSS/>} />
          <Route path='/learn/css/:quizId/quiz3' element={<QuizThreeInCss/>} />
          <Route path='/learn/python/:courseId' element={<PythonCourse/>} />
          <Route path='/learn/python/:LessonId/lesson1' element={<LessonOneInPython/>} />
          <Route path='/learn/python/:LessonId/lesson2' element={<LessonTwoInPython/>} />
          <Route path='/learn/python/:LessonId/lesson3' element={<LessonThreeInPython/>} />
          <Route path='/learn/python/:quizId/quiz1' element={<QuizOneInPython/>} />
          <Route path='/learn/python/:LessonId/lesson4' element={<LessonFourInPython/>} />
          <Route path='/learn/python/:LessonId/lesson5' element={<LessonFiveInPython/>} />
          <Route path='/learn/python/:LessonId/lesson6' element={<LessonSixInPython/>} />
          <Route path='/learn/python/:quizId/quiz2' element={<QuizTwoInPython/>} />
          <Route path='/learn/python/:LessonId/lesson7' element={<LessonSevenInPython/>} />
          <Route path='/learn/python/:LessonId/lesson8' element={<LessonEightInPython/>} />
          <Route path='/learn/python/:LessonId/lesson9' element={<LessonNineInPython/>} />
          <Route path='/learn/python/:LessonId/lesson10' element={<LessonTenInPython/>} />
          <Route path='/learn/python/:quizId/quiz3' element={<QuizThreeInPython/>} />
          <Route path='/learn/React/:courseId' element={<ReactCourse/>} />
          <Route path='/learn/React/:LessonId/lesson1' element={<LessonOneReact/>} />
          <Route path='/learn/React/:LessonId/lesson2' element={<LessonTwoReact/>} />
          <Route path='/learn/React/:LessonId/lesson3' element={<LessonThreeReact/>} />
          <Route path='/learn/React/:quizId/quiz1' element={<QuizOneReact/>} />
          <Route path='/learn/React/:LessonId/lesson4' element={<LessonFourReact/>} />
          <Route path='/learn/React/:LessonId/lesson5' element={<LessonFiveReact/>} />
          <Route path='/learn/React/:LessonId/lesson6' element={<LessonSixReact/>} />
          <Route path='/learn/React/:quizId/quiz2' element={<QuizTwoReact/>} />
          <Route path='/learn/React/:LessonId/lesson7' element={<LessonSevenReact/>} />
          <Route path='/learn/React/:LessonId/lesson8' element={<LessonEightReact/>} />
          <Route path='/learn/React/:LessonId/lesson9' element={<LessonNineReact/>} />
          <Route path='/learn/React/:LessonId/lesson10' element={<LessonTenReact/>} />
          <Route path='/learn/React/:quizId/quiz3' element={<QuizThreeReact/>} />
          <Route path='/learn/javaScript/:courseId' element={<JSCourse/>} />
          <Route path='/learn/javaScript/:LessonId/lesson1' element={<LessonOnejs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson2' element={<LessonTwojs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson3' element={<LessonThreejs/>} />
          <Route path='/learn/javaScript/:quizId/quiz2' element={<QuizOnejs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson4' element={<LessonFourjs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson5' element={<LessonFivejs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson6' element={<LessonSixjs/>} />
          <Route path='/learn/javaScript/:quizId/quiz2' element={<QuizTwojs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson7' element={<LessonSevenjs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson8' element={<LessonEightjs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson9' element={<LessonNinejs/>} />
          <Route path='/learn/javaScript/:LessonId/lesson10' element={<LessonTenjs/>} />
          <Route path='/learn/javaScript/:quizId/quiz3' element={<QuizThreejs/>} />
          <Route path='/profile/settings' element={<ModelSetting/>} />

          <Route path="/DevLoom/admin" element={<Admin/>} /> 
          <Route path="/DevLoom/admin/changePassword/:userId" element={<Update/>} /> 
          <Route path="/DevLoom/admin/updateUser/:userId" element={<UpdateUser/>} /> 
          <Route path="/DevLoom/admin/createCourse" element={<CreateCourse/>} /> 
          <Route path="/DevLoom/admin/createLesson/:courseId" element={<CreateLesson/>} /> 
          <Route path="/DevLoom/admin/updateLesson/:lessonId" element={<UpdateLesson/>} />
          <Route path="/DevLoom/admin/createQuiz/:courseId" element={<CreateQuiz/>} /> 
          <Route path="/DevLoom/admin/updateQuiz/:quizId" element={<UpdateQuiz/>} />  
          <Route path="/DevLoom/admin/createQustion/:lessonId" element={<CreateQustion/>} />
          <Route path="/DevLoom/admin/createQustionInQuiz/:quizId" element={<CreateQustionInQuiz/>} />
          <Route path="/DevLoom/admin/createTextSlide/:lessonId" element={<CreateTextSlide/>} />
          <Route path="/DevLoom/admin/updateQustion/:questionId" element={<UpdateQustion/>} />
          <Route path="/DevLoom/admin/updateTextSlide/:textSlideId" element={<UpdateTextSlide/>} />

          </>)}
        </Routes>
    </Router>
  );
}

export default App;
