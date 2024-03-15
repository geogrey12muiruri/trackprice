import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineUser, HiOutlineAnnotation, HiDocumentText } from 'react-icons/hi';
import { Button, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function DashboardComp() {
  const [commodities, setCommodities] = useState([]);
  const [totalCommodities, setTotalCommodities] = useState(0);
  const [recentCommodities, setRecentCommodities] = useState([]);

  useEffect(() => {
    // Fetch commodities data
    const fetchCommodities = async () => {
      try {
        const res = await fetch('/api/commodities');
        const data = await res.json();
        if (res.ok) {
          setCommodities(data.commodities);
          setTotalCommodities(data.totalCommodities);
          setRecentCommodities(data.recentCommodities);
        }
      } catch (error) {
        console.error('Error fetching commodities data:', error);
      }
    };

    fetchCommodities();
  }, []);

  return (
    <div className='p-3 md:mx-auto'>
      {/* Statistics */}
      <div className='flex-wrap flex gap-4 justify-center'>
        <div className='flex flex-col p-3 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-md shadow-md'>
          <div className='flex justify-between'>
            <div>
              <h3 className='text-gray-500 text-md uppercase'>Total Commodities</h3>
              <p className='text-2xl'>{totalCommodities}</p>
            </div>
            <HiDocumentText className='bg-lime-600  text-white rounded-full text-5xl p-3 shadow-lg' />
          </div>
        </div>
        {/* Add more statistics for other data if needed */}
      </div>

      {/* Recent Commodities */}
      <div className='flex flex-wrap gap-4 py-3 mx-auto justify-center'>
        <div className='flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800'>
          <div className='flex justify-between p-3 text-sm font-semibold'>
            <h1 className='text-center p-2'>Recent Commodities</h1>
            <Button outline gradientDuoTone='purpleToPink'>
              <Link to='/commodities'>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Commodity Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
            </Table.Head>
            {recentCommodities.map((commodity) => (
              <Table.Body key={commodity.id} className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>{commodity.name}</Table.Cell>
                  <Table.Cell>{commodity.category}</Table.Cell>
                  <Table.Cell>{commodity.price}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
