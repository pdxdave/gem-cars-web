import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar, MobileNav, Error} from './components'

import {Home, About, Parts, SinglePart} from './pages'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MobileNav />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/parts" element={<Parts />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/parts/:id" element={<SinglePart />}/>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
