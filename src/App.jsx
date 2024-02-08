import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Featured";
import Navbar from "./components/nav/Navbar";
import Highlights from "./components/highlights/Highlights";
import Commodity from "./components/commodities/Commodity";
import Home from "./components/home/Home";
import Data from "./components/data/Data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Commodity />
        <Navbar />
        <Data />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/highlights" element={<Highlights />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
