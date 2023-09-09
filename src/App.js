import './App.css';
import {Route, Routes} from 'react-router-dom';
import HomePgae from './pages/home/HomePgae';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ProfilePage from './pages/profile/ProfilePage';
import Navbar from './components/navbar/Navbar';
function App() {

  return (
    <div className="App">

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePgae/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/profile:id' element={<ProfilePage/>}></Route>
      </Routes>
    
      
    </div>
  );
}

export default App;
