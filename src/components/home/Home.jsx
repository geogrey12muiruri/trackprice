import Carousel from "../carousel/Carousel"

import MarketSnapshotChart from "../highlights/MarketSnapshotChart"
import Product from "../products/Product"
import Trending from "../trends/Trending"


const Home = () => {
  const data = [
    {
      "Commodity": "Beans (Yellow-Green)",
      "Market": "Eldoret Main",
      "County": "Uasin-Gishu",
      "Wholesale(KES/kg)": 175.00,
      "Retail(KES/kg)": 200.00,
      "Supply(kg)": 3500.00
    },
    {
      "Commodity": "Dry Maize",
      "Market": "Eldoret Main",
      "County": "Uasin-Gishu",
      "Wholesale(KES/kg)": 50.00,
      "Retail(KES/kg)": 55.00,
      "Supply(kg)": 6300.00
    },
    {
      "Commodity": "Kales/Sukuma Wiki",
      "Market": "Eldoret Main",
      "County": "Uasin-Gishu",
      "Wholesale(KES/kg)": 30.00,
      "Retail(KES/kg)": 40.00,
      "Supply(kg)": 1200.00
    },
    {
      "Commodity": "Tilapia",
      "Market": "Eldoret Main",
      "County": "Uasin-Gishu",
      "Wholesale(KES/kg)": 310.00,
      "Retail(KES/kg)": 350.00,
      "Supply(kg)": 5500.00
    },
    {
      "Commodity": "Red Irish potato",
      "Market": "Gakoromone",
      "County": "Meru",
      "Wholesale(KES/kg)": 71.43,
      "Retail(KES/kg)": 200.00,
      "Supply(kg)": 1000.00
    },
    {
      "Commodity": "Beans (Yellow-Green)",
      "Market": "Nakuru Wakulima",
      "County": "Nakuru",
      "Wholesale(KES/kg)": 125.00,
      "Supply(kg)": 1090.00
    },
    {
      "Commodity": "Dry Maize",
      "Market": "Nakuru Wakulima",
      "County": "Nakuru",
      "Wholesale(KES/kg)": 54.17,
      "Supply(kg)": 7878.00
    },
    {
      "Commodity": "Kales/Sukuma Wiki",
      "Market": "Nakuru Wakulima",
      "County": "Nakuru",
      "Wholesale(KES/kg)": 17.00,
      "Supply(kg)": 6450.00
    },
    {
      "Commodity": "Beans (Yellow-Green)",
      "Market": "Nyamakima",
      "County": "Nairobi",
      "Wholesale(KES/kg)": 144.44,
      "Retail(KES/kg)": 180.00
    },
    {
      "Commodity": "Dry Maize",
      "Market": "Nyamakima",
      "County": "Nairobi",
      "Wholesale(KES/kg)": 77.30,
      "Retail(KES/kg)": 106.67
    }
  ]
  return (
    <div>
      <Carousel /> 
      <Trending data={data} />
      <Product />    
      
    </div>
  )
}

export default Home
