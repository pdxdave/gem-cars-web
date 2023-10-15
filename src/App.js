import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar, MobileNav} from './components'

import {Home, About} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileNav />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
