import Carousel from "../carousel/Carousel"
import MyChart from "../charts/MyChart"
import MarketSnapshotChart from "../highlights/MarketSnapshotChart"


const Home = () => {
  return (
    <div>
      <Carousel />     
      <MyChart /> 
      <MarketSnapshotChart />
    </div>
  )
}

export default Home
