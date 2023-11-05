
// import Mouse from "./mouse"
import 'react-bootstrap'
import Navbar from "./components/navbar.jsx"
import Footer from "./components/Footer.jsx";
import Home from './components/Home/home.jsx';
import About from './components/About-Us/About.jsx';
import Blog from './components/blogs/Blog.jsx';
import Feature from './components/features/Feature.jsx';
import Contact from './components/Contact-Us/Contact.jsx';
import Career from './components/Career/Career.jsx';
import './App.css'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link  
}   
from 'react-router-dom'; 
function App() {

  return (
    <>
      {/* <Mouse/> */}
      <Router>
      
       <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/feature' element={<Feature/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/' element={<Home/>}/>


       {/* <Navbar/>
        <Home/> */}
        
       </Routes>
       
       <Footer/>
      </Router>
     
    </>
  )
}

export default App
