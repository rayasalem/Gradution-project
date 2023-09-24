import Navbar from './component/Navbar/Navbar.jsx';
import Login from './component/login/Login';
import Signup from './component/signup/Signup.jsx';
import { Route, Routes } from 'react-router-dom';
import Blog from './component/blog/Blog';
import Catolog from './component/catolog/Catolog';
import Discuss from './component/discuss/Discuss';
import CodeBits from './component/codeBits/CodeBits.jsx';
import LeaderBorad from './component/leaderBorad/LeaderBorad.jsx';
import Profile from './component/Profile/Profile.jsx';
import HomePage from './component/homePage/HomePage.jsx';


function App() {
  return (
    <>
     <Navbar/>
     <div className='container'>
     <Routes>
     <Route path='/' element={ <HomePage/> }> </Route>
     <Route path='HomePage' element={ <HomePage/> }> </Route>
       <Route path='Signup' element={ <Signup/>}> </Route>
       <Route path='Login' element={<Login/>}> </Route>
       <Route path='LeaderBorad' element={<LeaderBorad/>}> </Route>
       <Route path='Blog' element={<Blog/>}> </Route>
       <Route path='Catolog' element={<Catolog/>}> </Route>
       <Route path='Discuss' element={<Discuss/>}> </Route>
       <Route path='CodeBits' element={<CodeBits/>}> </Route>
       <Route path='Profile' element={<Profile/>}> </Route>
       </Routes>
     </div>
    </>
  );
}

export default App;

