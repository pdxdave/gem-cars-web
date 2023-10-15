import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar, MobileNav} from './components'

import {Home, About, Parts} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileNav />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/parts" element={<Parts />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
