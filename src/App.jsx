
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/dentist/:id" element={<Detail/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/favs" element={<Favs/>}/>
            </Route>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
