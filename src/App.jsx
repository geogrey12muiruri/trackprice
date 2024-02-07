import Carousel from "./components/carousel/Carousel"
import Featured from "./components/featured/Featured"
import Navbar from "./components/nav/Navbar"
import Highlights from "./components/highlights/Highlights"
import Commodity from "./components/commodities/Commodity"



function App() {
  

  return (
    <div className="App">
    <Commodity />
      <Navbar />
      <Carousel />
      <Featured />
      <Highlights />
 
    </div>
  )
}

export default App
