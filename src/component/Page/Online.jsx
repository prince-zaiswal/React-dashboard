import React from 'react'

// Sales / Marketing Data 
import { monthlyDataOnline } from '../data/SalesMarketing'
// ChartsJs
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Doughnut} from 'react-chartjs-2';

function Online() {
 
   // Extract sales and marketing spend data
   const months = monthlyDataOnline.map(data => data.month);
   const salesData = monthlyDataOnline.map(data => data.sales.revenue);
   const spendData = monthlyDataOnline.map(data => data.marketing.spend);
   const units = monthlyDataOnline.map(data => data.sales.units);

  //  unit
   const unitData ={
    labels: months,
    datasets: [
      {
        label: 'Sales Revenue',
        backgroundColor: ['#ff6384','#36a2eb','#ffce56','#4bc0c0','#9966ff','#ff9f40'],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderRadius: [5],
        borderWidth: 1,
        data: units
      }
    ]
   }
 
   // Define chart data
   const SalesData = {
     labels: months,
     datasets: [
       {
         label: 'Sales Revenue',
         backgroundColor: ['#ff6384','#36a2eb','#ffce56','#4bc0c0','#9966ff','#ff9f40'],
         borderColor: 'rgba(54, 162, 235, 1)',
         borderRadius: [5],
         borderWidth: 1,
         data: salesData
       },
       {
         label: 'Marketing Spend',
         backgroundColor: ['#ff6884','#36a4eb','#ffce26','#4bc1c0','#9969ff','#ff9f20'],
         borderColor: 'rgba(255, 99, 132, 1)',
         borderRadius: [5],
         borderWidth: 1,
         data: spendData
       }
     ]
   };

   // Charts Options settings
  const options = {
    elements: {
      bar: {
        borderWidth: 1,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        titleFont: {
          size: 14, // Set the tooltip title font size
        },
        bodyFont: {
          size: 14, // Set the tooltip body font size
        },
      },
      title: {
        display: true,
        text: 'Sales / Marketing Data',
        position: 'bottom'
      }
    }
    , scales: {
      y: {
        grid: {
          display: false // Remove grid lines on the y-axis
        }
      },
      x: {
        grid: {
          display: false // Remove grid lines on the x-axis
        }
      }
    },
  };


  return (
    <div className='p-3 md:p-0'>
      <h2 className='font-medium text-xl text-black mt-5'>Online</h2>
      <h3 className='font-medium text-gray-400 text-[14px]'>Sales/Marketing - Online</h3>

      {/*  Online sales  */}
      <div className="bg-white rounded-lg py-4 my-1">
        <div className=' md:space-x-4  md:space-y-0'>
          <div className=' px-4 border-gray-200 '>
            <div className=" py-4 ">
              <h1 className="text-3xl font-bold mb-8 text-center">Monthly Sales and Marketing Data</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {monthlyDataOnline.map((monthData, index) => (
                  <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-4">
                      <h2 className="text-xl font-semibold mb-2">{monthData.month}</h2>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div className="bg-green-100 p-4 rounded-md">
                          <h3 className="text-lg font-semibold mb-2">Sales</h3>
                          <p className="text-gray-700">Units: {monthData.sales.units}</p>
                          <p className="text-gray-700">Revenue: ${monthData.sales.revenue.toLocaleString()}</p>
                        </div>
                        <div className="bg-red-100 p-4 rounded-md">
                          <h3 className="text-lg font-semibold mb-2">Marketing</h3>
                          <p className="text-gray-700">Spend: ${monthData.marketing.spend.toLocaleString()}</p>
                          <p className="text-gray-700">Impressions: {monthData.marketing.impressions.toLocaleString()}</p>
                          <p className="text-gray-700">Leads Generated: {monthData.marketing['leads generated'].toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
      {/*  Online sales  */}

      <div className='flex md:space-x-4 mt-5 flex-col md:flex-row md:space-y-0 md:items-stretch'>
          <div className='bg-white rounded-lg px-4 md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>Online</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Total Online - Sales/Marketing</h3>
            </div>
            <div className='w-full'>
              <Doughnut data={SalesData} options={options}  />
            </div>
          </div>

          <div className='bg-white rounded-lg mt-4 md:mt-0 px-4 md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>Online</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>Total Units - Month on Month</h3>
            </div>
            <div className='w-full'>
              <Doughnut data={unitData} options={options} />
            </div>
          </div>

        </div>

    </div>
  )
}

export default Online
