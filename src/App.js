import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About/About'
import Admin from './components/Admin'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Signup from './components/Auth/Signup'
import {AuthProvider} from './components/Auth/AuthProvider'
import ProtectedRoutes from './components/Auth/ProtectedRoutes'
import Apod from './components/Apod/Apod'
import Quote from './components/Quote/Quote'
import Journal from './components/Journal/Journal'
import Bored from './components/Bored/Bored'
import Archive from './components/Archive/Archive'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header/>
          <Navigation/>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/admin" element={<ProtectedRoutes/>}>
              <Route path="" element={<Admin/>}>
                <Route path="" element={<Quote/>}/>
              </Route>
              <Route path="apod" element={<Apod/>}/>
              <Route path="apod/archive" element={<Archive/>}/>
              <Route path="journal" element={<Journal/>}/>
              <Route path="bored" element={<Bored/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/logout" element={<Logout/>}/>
          </Routes>
        
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
