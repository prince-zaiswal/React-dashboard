import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {  NavLink } from 'react-router-dom';

// Icons
import { RiCloseFill, RiArrowDownSLine, RiDashboardLine, RiFileSearchLine, RiCalendarEventLine, RiShapesLine, RiLineChartLine } from "@remixicon/react";

// nav menu links
const navlinks = [
  {
    name: 'Dashboard',
    icon: RiDashboardLine,
    path: '/'
  },
  {
    name: 'Reaserch',
    icon: RiFileSearchLine,
    submenu: [
      {
        name: 'External',
        path: '/research/external',
        subitem: [
          {
            name: 'B2B',
            path: '/research/external/b2b',
            subMenuItem: ["Online", "Interview", "Public Data", "Health"]
          },
          {
            name: 'B2C',
            path: '/research/external/b2c'
          }
        ]
      },
      {
        name: 'Internal',
        path: '/research/internal',
        subitem: [{ name: 'B2B', path: '/research/internal/b2b' }, { name: 'B2C',path: '/research/internal/b2c' }]
      }
    ]
  },
  {
    name: 'Planning',
    icon: RiCalendarEventLine,
    submenu: [{ name: 'PRD',path: '/planning/prd'}, { name: 'Specs',path: '/planning/specs' }]
  },
  {
    name: 'Designing',
    icon: RiShapesLine,
    submenu: [{ name: 'Hardware',path: '/designing/hardware' }, { name: 'Software',path: '/designing/software' }]
  },
  {
    name: 'Sales/Marketing',
    icon: RiLineChartLine,
    submenu: [{ name: 'Online',path: '/sales-marketing/online' }, { name: 'Dealership',path: '/sales-marketing/dealership' }]
  },
]


function Navigation({openSidebar}) {
  
  const [active, setActive] = useState(0);       //  1st Level menu State
  const [subMenuActive, setSubMenuActive] = useState(null);     //  2nd Level menu State
  const [subMenuActiveItem, setSubMenuActiveItem] = useState(null);  //  3rd Level menu State

  // Menu Handler
  const handleitemClick = (menuIndex) => {
    setSubMenuActive(null);
    setActive(menuIndex === active ? null : menuIndex);
  }
  return (
    <nav className={`md:h-screen z-50  h-100 fixed top-0 left-0 bottom-0  lg:sticky overflow-y-auto overflow-x-hidden w-[300px] 2xl:w-1/5 ease-in-out duration-500 bg-[#001a4a] ${ openSidebar ? "-translate-0 " : "-translate-x-full lg:-translate-x-0"}`}>
      <div className='text-gray-100 border-b border-dashed border-slate-500 p-5'>
        <div className=' flex items-center  rounded-md'>
          <div><img src={logo} alt="" height={50} width={50} className='h-auto max-w-full' /></div>
          <h1 className='text-[20px]  ml-5 text-lg text-gray-200 font-bold'>Lizomotor</h1>

         
        </div>
      </div>

      <div className='flex flex-col mt-3 '>

        {navlinks.map((item, index) => (
          <div key={index}>
           { <NavLink id={index} to={item?.path}>  <div key={index} onClick={() => handleitemClick(index)} className={` font-medium flex mx-3 py-2.5 mt-1 px-2 justify-between items-center rounded-md cursor-pointer text-gray-400 hover:text-white hover:bg-[#f3e7e74b]  ${active == index ? "text-white bg-[#f3e7e74b]" : null} `}>
              <div className='flex items-center'><item.icon size={24} className='mr-3' /> <span className='text-[16px] w-[50px]'>{item?.name}</span> </div>
              {item.submenu && <div> <RiArrowDownSLine size={24} className={`ml-20 transition-all transform  ${active == index ? "rotate-180 " : null}`} />  </div>}
            </div></NavLink>}
            {item.submenu && active === index ? <div>
              {item.submenu.map((submenu, submenuIndex) => (
                <div className={`transition-all transform flex flex-col px-2 ps-8 mx-3 space-y-2 rounded-md cursor-pointer text-gray-400`}>
                  {<NavLink to={submenu?.path}> <div key={submenuIndex} onClick={() => { setSubMenuActiveItem(null); setSubMenuActive((submenuIndex === subMenuActive ? null : submenuIndex)) }} className='submenu flex items-center justify-between mt-4'>
                    <div className={` hover:before:bg-white   hover:text-white  ${subMenuActive == submenuIndex ? " before:bg-white text-white" : "before:bg-[#9ca3af]"}`}>{submenu?.name}</div>
                    {submenu.subitem && <span> <RiArrowDownSLine size={24} className={` transition-all transform  ${subMenuActive == submenuIndex ? "rotate-180 " : null}`} /> </span>}
                  </div></NavLink>}
                  {submenu.subitem && subMenuActive == submenuIndex && submenu.subitem.map((subsubMenu, subsubmenuIndex) => <div className={`subsubmenu transition-all transform flex flex-col ps-4 space-y-2 rounded-md cursor-pointer text-gray-400`}>
                  {<NavLink to={subsubMenu?.path}> <div key={subsubmenuIndex} onClick={() => setSubMenuActiveItem(subsubmenuIndex === setSubMenuActiveItem ? null : subsubmenuIndex)} className='submenu flex items-center justify-between mt-2'>
                      <div className={` hover:before:bg-white   hover:text-white  ${subsubmenuIndex == subMenuActiveItem ? " before:bg-white text-white" : "before:bg-[#9ca3af]"}`}>{ subsubMenu?.name}</div>

                    </div></NavLink>}
                  </div>)}
                </div>
              ))}
            </div> : null}
          </div>
        ))}

      </div>
    </nav>
  )
}
export default Navigation
