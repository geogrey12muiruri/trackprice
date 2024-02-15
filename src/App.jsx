import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Featured";
import Navbar from "./components/nav/Navbar";

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
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
