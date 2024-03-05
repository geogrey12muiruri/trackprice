import Carousel from "../carousel/Carousel"
import MyChart from "../charts/MyChart"
import MarketSnapshotChart from "../highlights/MarketSnapshotChart"
import Product from "../products/Product"


const Home = () => {
  return (
    <div>
      <Carousel /> 
      <Product />    
      <MyChart /> 
      <MarketSnapshotChart />
    </div>
  )
}

export default Home
