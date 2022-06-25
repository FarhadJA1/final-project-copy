import '../src/assets/style/App.scss'
import Navigation from './components/Shared/Navigation';
import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Header from './components/Shared/Header';
import Finance from './pages/Finance';
import './assets/fonts/Ubuntu-Light.ttf';
import './assets/fonts/Ubuntu-Bold.ttf';
import Group from './pages/Group';
import Education from './pages/Education';
import Teacher from './pages/Teacher';
import PayType from './pages/PayType';
import Resource from './pages/Resource';
import Students from './pages/Students';
import Classroom from './pages/Classroom';
import Term from './pages/Term';
import Login from './pages/Login';
import Protection from './components/Shared/Protection';
import { useState, useEffect } from 'react';
import Employee from './pages/Employee';
function App() {
  
  let [user,setUser]=useState("");
  
  return (
    <Router>
      <div className="App">
        <div className='col-lg-2'>
        {(user=localStorage.getItem('token'))?<Navigation />:""}

        </div>
        <div className='col-lg-10'>
        {(user=localStorage.getItem('token'))?<Header />:""}

          <Routes>          
            <Route path='/login'  element={<Login user={user} setUser={setUser}/>} />
            <Route element={<Protection />}>
              <Route path='/' element={<Dashboard />} />
              <Route path='/reports' element={<Dashboard />} />
              <Route path='/finance' element={<Finance />} />
              <Route path='/groups' element={<Group />} />
              <Route path='/education' element={<Education />} />
              <Route path='/teachers' element={<Teacher />} />
              <Route path='/paytype' element={<PayType />} />
              <Route path='/resource' element={<Resource />} />
              <Route path='/resource/delete-resource' element={<Resource />} />
              <Route path='/students' element={<Students />} />
              <Route path='/classroom' element={<Classroom />} />
              <Route path='/term' element={<Term />} />
              <Route path='/employees' element={<Employee />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );

}

export default App;
