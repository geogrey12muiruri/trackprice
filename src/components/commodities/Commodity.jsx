import React from 'react';
import Marquee from 'react-fast-marquee';
import Commodity1 from '../../assets/marquee/fish.png';  
import Commodity2 from '../../assets/marquee/bean.png';  
import Commodity3 from '../../assets/marquee/cattle.png';  
import Commodity4 from '../../assets/marquee/potato.png';  
import Commodity5 from '../../assets/marquee/sukumawiki.png';  

const Commodity = () => {
  return (
    <div className=" bg-white commodity-container overflow-hidden box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); " style={{ height: '150px' }}>
      <div className='title text-center'>
        <h1>trending commodities</h1>
      </div>
      <div>
      <div className='flex gap-4 '>
      <Marquee >
          <div className="commodity-item flex gap-4 mr-4">
            <div className='flex gap-4 p-4 mb-20 justify-center'>
              <img src={Commodity1} alt='commodity' className="commodity-image" style={{ width: '40px', height: '40px' }} />
              <div className="commodity-info text-sm font-bold">
                <h3>Fish</h3>
                <p>Market: Nairobi</p>
                <p className='text-green-400'>Price: 488.81 kshkg</p>
              </div>
            </div>
            <div className="separator-line bg-green-500 h-full w-px opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
          </div>
          {/* Repeat for other commodities */}
          <div
    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-green-400 opacity-100 dark:opacity-50"></div>
          <div className="commodity-item flex gap-8">
          <div className='flex gap-4 p-4 mb-20 justify-center'><img src={Commodity2} alt='commodity' className="commodity-image" style={{ width: '40px', height: '40px' }} /></div>
            
            <div className="commodity-info text-sm font-bold">
              <h3>Bean</h3>
              <p>Market: Nairobi</p>
              <p className='text-green-400'>Price: KES 215.90Ksh/Kg</p>
            </div>
          </div>
          <div
    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-green-400 opacity-100 dark:opacity-50"></div>
          <div className="commodity-item flex gap-4">
          <div className='flex gap-4 p-4 mb-20 justify-center'><img src={Commodity3} alt='commodity' className="commodity-image" style={{ width: '40px', height: '40px' }} /></div>
            
            <div className="commodity-info text-sm font-bold">
              <h3>Cattle</h3>
              <p>Market: Nairobi</p>
              <p className='text-green-400 '>Price: KES 591.03ksh/KG</p>
            </div>
          </div>
          <div
    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-green-400 opacity-100 dark:opacity-50"></div>
          <div className="commodity-item flex gap-4">
          <div className='flex gap-4 p-4 mb-20 justify-center'><img src={Commodity4} alt='commodity' className="commodity-image" style={{ width: '40px', height: '40px' }} /></div>
            
            <div className="commodity-info text-sm font-bold">
              <h3>Potato</h3>
              <p>Market: Nairobi</p>
              <p className='text-green-400'>Price: KES 74.31</p>
            </div>
          </div>
          <div
    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-green-400 opacity-100 dark:opacity-50"></div>
          <div className="commodity-item flex gap-4">
          <div className=' flex gap-4 p-4 mb-20 justify-center'> <img src={Commodity5} alt='commodity' className="commodity-image" style={{ width: '40px', height: '40px' }} /></div>
           
            <div className="commodity-info text-sm font-bold">
              <h3>Sukuma Wiki</h3>
              <p>Market: Gikomba 5</p>
              <p className='text-green-400'>Price: KES 54.44/KG</p>
            </div>
          </div>
          <div
    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-green-400 opacity-100 dark:opacity-50 "></div>
        </Marquee>
      </div>
        
      </div>
    </div>
  );
};

export default Commodity;
