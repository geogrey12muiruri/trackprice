import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
import Featured from "./components/featured/Featured";
import Navbar from "./components/nav/Navbar";
import Signin from './pages/SignIn'
import Signup from './pages/SignUp'
import Commodity from "./components/commodities/Commodity";
import Home from "./components/home/Home";
import DashboardComp from "./components/DashboardComp";
import MarketComponent from "./components/markets/MarketComponent";
import AveragePriceChart from "./components/charts/AveragePriceChart";
import DashUsers from "./components/DashUsers";
import Footer from "./components/footer/Footer";



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
          <Route path="dashboard" element={<DashboardComp />} />
          <Route path="/markets" element={<MarketComponent />} />
          <Route path="/average" element={<AveragePriceChart />} />
          <Route path="/user-dash" element={<DashUsers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
