import React from 'react';
import { NavLink } from "react-router";

const Nabvar = () => {
  const navItem = [
    {
      id: 1,
      item: "home"
    },
    {
      id: 2,
      item: "contact"
    },
    {
      id: 3,
      item: "about"
    },
    {
      id: 4,
      item: "sing up"
    },
  ]

  return (
    <section className='pt-10 pb-4 border-b-[0.5px] border-b-black border-opacity-30 '>
      <div className="container">
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div>
              <h1 className='font-inter text-2xl font-bold leading-6 tracking-[0.72px] '>Exclusive</h1>
            </div>
            <div>
              <ul className='flex items-center justify-center gap-x-12 ml-[190px]'>
                {navItem?.map((nav) => (
                  <li key={nav.id} className='menuUnderLine'>
                    <NavLink
                      to={`/${nav.item}`}
                      className={({ isActive, isPending }) =>
                        isPending ? "textOne" : isActive ? "text-green-600 textOne" : "textOne"
                      }
                    >
                      {nav.item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='basis-1/2 bg-red-500'>
            <input
              type="text"
              placeholder='What are you looking for?'
              className=' font-black_color font-poppins text-xs font-normal leading-[18px] relative py-2 px-3 rounded-[4px]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nabvar
