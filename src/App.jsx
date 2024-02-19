import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Featured";
import Navbar from "./components/nav/Navbar";
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import Commodity from "./components/commodities/Commodity";
import Home from "./components/home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Commodity />
        <Navbar />
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
