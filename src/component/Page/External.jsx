import React from 'react';

// data
import {B2bonline, B2breview, B2bpublicData, B2bhealth, B2conline, B2creview, B2cpublicData, B2chealth} from '../data/ExternalData.js';

// ChartsJs
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { Bar,Doughnut,Pie } from 'react-chartjs-2';

 // B2B Vs B2C  chart data 
 const B2cvsB2c = {
  labels: ['Online','Review','Public Data','Health'],
  datasets: [{
    label: 'B2B',
    data: [B2bonline.length, B2breview.length, B2bpublicData.length, B2bhealth.length],
    borderRadius: [5],
    backgroundColor: [
      '#20C997',
    ],
  }
    , {
    label: 'B2C',
    data: [B2conline.length, B2creview.length, B2cpublicData.length, B2chealth.length],
    borderRadius: [5],
    backgroundColor: [
      '#FF9999'
    ],
  }]
};

// B2B chart data 
const B2b = {
  labels: ['Online','Review','Public Data','Health'],
  datasets: [{
    label: 'B2B',
    data: [B2bonline.length, B2breview.length, B2bpublicData.length, B2bhealth.length],
    borderRadius: [3],
    backgroundColor: [
      '#20C997',
      '#FFD700',
      '#FF9999',
      '#9D38BD',
    ],
  }]
};

// B2C  chart data 
const B2c = {
  labels: ['Online','Review','Public Data','Health'],
  datasets: [{
    label: 'B2B',
    data: [B2conline.length, B2creview.length, B2cpublicData.length, B2chealth.length],
    borderRadius: [3],
    backgroundColor: [
      '#007BFF',
      '#FFC107',
      '#FD7E14',
      '#6F42C1',
    ],
  }]
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
      text: 'B2B vs B2C Feedback',
      position: 'bottom'
    }
  }
  , scales: {
    y: {
      grid: {
        display: true // Remove grid lines on the y-axis
      }
    },
    x: {
      grid: {
        display: true // Remove grid lines on the x-axis
      }
    }
  },
};

function External() {
  return (
    <div className='p-3 md:p-0'>
    <h2 className='font-medium text-xl text-black mt-5'>External</h2>
    <h3 className='font-medium text-gray-400 text-[14px]'>Reasearch - External</h3>
    <div className='flex md:space-x-4 flex-col md:flex-row md:space-y-0 md:items-center'>
          <div className='bg-white rounded-lg px-4 md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>B2B</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>B2B - Overview</h3>
            </div>
            <div className='w-full pb-3'>
              <Doughnut data={B2b}  />
            </div>
          </div>

          <div className='bg-white rounded-lg mt-4 md:mt-0 px-4 md:w-1/2'>
            <div className='py-4'>
              <h2 className='font-medium text-xl text-black'>B2C</h2>
              <h3 className='font-medium text-gray-400 text-[12px]'>B2C - Overview</h3>
            </div>
            <div className='w-full pb-3'>
              <Doughnut data={B2c}  />
            </div>
          </div>

        </div>

    {/*  Bar  */}
    <div className="bg-white rounded-lg p-4 mt-5 my-10 ">
      <div className='md:w-2/3 mx-auto'>
     <Bar data={B2cvsB2c} options={options} />
     </div>
    </div>
    {/*  Bar  */}

  </div>
  )
}

export default External
