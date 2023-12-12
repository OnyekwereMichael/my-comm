import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Header from './PAGES/home';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Scheme from './PAGES/Scheme';
// import Signup from './PAGES/Signup';
import { AnimatePresence } from "framer-motion";




function App() {
  return (
 <div>
      <Router>
  <Navbar />
              <Routes>
                <Route path = "/" element={<Header/>}/> 
                <Route path = "/Scheme" element={<Scheme />}/> 
                {/* <Route path = "/Signup" element={<Signup />}/>  */}
                <Route path = "*" element={"PAGE NOT FOUND"}/> 
                </Routes>
     <Footer />
        </Router>
       
 </div>
 
  );
}

export default App;
