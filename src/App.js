import Nav from "./componenets/Nav";
import Navcontent from "./componenets/Navcontent";
import About from "./componenets/About";
import Footer from "./componenets/Footer";
import Services from "./componenets/Services";
import Contact from "./componenets/Contact";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Navcontent />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
