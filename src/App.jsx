import { useState } from 'react';

// Image
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Css
import './App.css';

// Icons
import { RiAccountPinBoxLine,RiCloseFill,RiMenu2Line,RiMoonFill,RiSunFill } from '@remixicon/react';

// Route
import { Route,Router, Routes } from 'react-router-dom';

// Component
import Navigation from './component/Navigation';
import Dashboard from './component/Dashboard';
import Internal from './component/Page/Internal';
import B2BInternal from './component/Page/B2BInternal';
import B2CInternal from './component/Page/B2CInternal';
import External from './component/Page/External';
import B2BExternal from './component/Page/B2BExternal';
import B2CExternal from './component/Page/B2CExternal';
import Prd from './component/Page/Prd';
import Specs from './component/Page/Specs';
import Software from './component/Page/Software';
import Hardware from './component/Page/Hardware';
import Online from './component/Page/Online';
import Dealership from './component/Page/Dealership';
import Notfound from './component/Page/Notfound';

function App() {
  
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  
  return (
    <div className='flex '>
    <Navigation openSidebar = {sidebar} />
    <div onClick={handleSidebar} className={`z-50 fixed lg:hidden top-[22px] w-[300px] left-[250px] ease-in-out duration-500 ${sidebar ? "-translate-0 " : "-translate-x-full lg:-translate-x-0"}`}> <RiCloseFill size={36} color='white' /></div>

    <main className='md:p-4 w-full rounded-md'>
    <div  className='flex rounded-md justify-between lg:justify-center items-center  p-3 mb-2 bg-white'>
        <div onClick={handleSidebar}  className='ease-in-out duration-500 lg:hidden '> <RiMenu2Line size={36} color='black' /></div>
        <div className='font-semibold  text-lg '>Lizomotor</div>
        <RiAccountPinBoxLine size={36} color='black' className='lg:hidden' />
    </div>
    <Routes>
      <Route path='/React-dashboard' element={<Dashboard />} />
      <Route path='/research/internal' element={<Internal />} />
      <Route path='/research/internal' element={<Internal />} />
      <Route path='/research/internal/b2b' element={<B2BInternal />} />
      <Route path='/research/internal/b2c' element={<B2CInternal />} />
      <Route path='/research/external' element={<External />} />
      <Route path='/research/external/b2b' element={<B2BExternal />} />
      <Route path='/research/external/b2c' element={<B2CExternal />} />
      <Route path='/planning/prd' element={<Prd />} />
      <Route path='/planning/specs' element={<Specs />} />
      <Route path='/designing/software' element={<Software />} />
      <Route path='/designing/hardware' element={<Hardware />} />
      <Route path='/sales-marketing/online' element={<Online />} />
      <Route path='/sales-marketing/dealership' element={<Dealership />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    </main>
    </div>
  )
}

export default App
