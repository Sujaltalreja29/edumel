import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter,Routes} from 'react-router-dom';

import HomeOne from './components/pages/Home01';
import HomeTwo from './components/pages/Home02';
import AboutMain from './components/pages/About';
import CourseOne from './components/pages/CourseOne';
import CourseTwo from './components/pages/CourseTwo';
import CourseThree from './components/pages/CourseThree';
import CourseFour from './components/pages/CourseFour';
import CourseList from './components/pages/CourseList';
import Curricular from './components/pages/Curricular';
import Achievements from './components/pages/Achievements';
import School from './components/pages/School';
import Olympiad from './components/pages/olympiad';
import Community from './components/pages/community';
import Sports from './components/pages/sports';
import CBSE from './components/pages/cbse';
import CourseDetails from './components/pages/CourseDetails';
import CourseDetailsTwo from './components/pages/CourseDetailsTwo';

import InstructorOne from './components/pages/InstructorPage';


import Login from './components/pages/Login';
import Register from './components/pages/Register';

import ContactPage from './components/pages/ContactPage';
import BlogPageOne from './components/pages/BlogPageOne';


function App() {

  return (
      <BrowserRouter>
          <Routes>

              <Route exact path={`${process.env.PUBLIC_URL + '/'}`} element={<HomeOne/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/home-2'}`} element={<HomeTwo/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/about'}`} element={<AboutMain/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/course-1'}`} element={<CourseOne/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/course-2'}`} element={<CourseTwo/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/curricular'}`} element={<Curricular/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/school'}`} element={<School/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/Achievements'}`} element={<Achievements/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/olympiad'}`} element={<Olympiad/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/community'}`} element={<Community/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/sports'}`} element={<Sports/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/cbse'}`} element={<CBSE/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/course-3'}`} element={<CourseThree/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/course-4'}`} element={<CourseFour/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/course-list'}`} element={<CourseList/>}/>
              
              <Route exact path={`${process.env.PUBLIC_URL + '/course-details/:id'}`} element={<CourseDetails/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/course-details-two/:id'}`} element={<CourseDetailsTwo/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/instructors'}`} element={<InstructorOne/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/login'}`} element={<Login/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/register'}`} element={<Register/>}/>

              <Route exact path={`${process.env.PUBLIC_URL + '/contact'}`} element={<ContactPage/>}/>
              <Route exact path={`${process.env.PUBLIC_URL + '/blog'}`} element={<BlogPageOne/>}/>

           </Routes>

      </BrowserRouter>
  );
}

export default App;

