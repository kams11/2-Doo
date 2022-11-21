import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import About from "./Webpages/About";
import Navbar from "./Webpages/Component/Navbar";
import Contact from "./Webpages/Contact";
import Home from './Webpages/Home';
import Todo from "./Webpages/Todo";


function App() {
  return (
    <div className="App">
      <Router>  
       
        <Navbar/>
          
          <Routes>
            
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/todo" element={<Todo/>} />
             
          </Routes>
                
                <nav className="footer" display="flex" justify-content="flex-end"  style={{background:"blue", marginBottom:""}}>  
                  <Link to={"/"} style={{marginRight:"5px"}} >Home</Link>
                  <Link to={"/contact"} >Contact</Link>
                  <Link to={"/about"} style={{marginLeft:"5px"}}>About</Link>
                  </nav>
      </Router>
    </div>
  );
}

export default App;
