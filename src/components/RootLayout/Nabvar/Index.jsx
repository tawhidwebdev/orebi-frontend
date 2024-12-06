import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from "react-router";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from 'react-icons/fa6';
import { GrCart } from 'react-icons/gr';
import { LuUser } from "react-icons/lu";
import { MdOutlineCancel, MdOutlineLocalMall } from 'react-icons/md';
import { IoIosStarOutline } from 'react-icons/io';
import { BiLogOut } from 'react-icons/bi';
import { PiLogThin } from 'react-icons/pi';


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
  ];

  const [account, setAccount] = useState(false);
  // const handleAccount = ()=>{
  //   setAccount(!account)
  // }
   const userAccountRef = useRef(null)
   useEffect(()=>{
    window.addEventListener("click", (event)=>{
      if (userAccountRef.current.contains(event.target)) {
        setAccount(!account)
      }else{
        setAccount(false)
      }
    })
   }, [account])

  return (
    <section className='pt-10 pb-4 border-b-[0.5px] border-b-black border-opacity-30 '>
      <div className="container">
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='font-inter text-2xl font-bold leading-6 tracking-[0.72px] '>Exclusive</h1>
          </div>
          <div>
            <ul className='flex items-center justify-center gap-x-12'>
              {navItem?.map((nav) => (
                <li key={nav.id} className='menuUnderLine capitalize'>
                  <NavLink
                    to={`/${nav.item}`}
                    className={({ isActive, isPending }) =>
                      isPending ? "textOne16px" : isActive ? "text-green-600 textOne16px" : "textOne16px"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='basis-1/3 relative flex items-center justify-between gap-x-6'>
            <div>
              <input
                type="text"
                placeholder='What are you looking for?'
                className=' font-black_color font-poppins text-base font-normal leading-[18px] py-2 pl-3 pr-12 rounded bg-gray_white_color text-black_color' />
              <span className=' absolute top-1/2 -translate-y-1/2 left-[49%] font-bold text-black_color text-xl bg-transparent cursor-pointer'>
                <CiSearch />
              </span>
            </div>
            <div className='flex items-center gap-x-4'>
              <span className='cursor-pointer text-2xl text-black_color'>
                <FaRegHeart />
              </span>
              <span className='cursor-pointer text-2xl text-black_color addCardItem'>
                <GrCart />
              </span>
              <div className='relative'>
                <span
                 ref={userAccountRef}
                className='cursor-pointer text-xl text-white bg-red_color w-8 h-8 rounded-full flex items-center justify-center '>
                  <LuUser />
                </span>
                {account && (
                  <div className='w-[224px] bg-rgb_black_color absolute top-9 right-0 rounded pt-[18px] pr-3 pb-[10px]  pl-5 flex flex-col flex-wrap gap-y-4'>
                    <div className='flex items-center justify-start gap-x-4 text-white_color cursor-pointer transition-all  duration-200 hover:duration-200 hover:bg-white_color hover:text-text_black_color hover:p-2 hover:rounded hover:transition-all hover:text-center'>
                      <span className='text-xl'><LuUser /></span>
                      <h5 className='textTwo14px capitalize'>Manage My Account</h5>
                    </div>
                    <div className='flex items-center justify-start gap-x-4 text-white_color transition-all duration-200 cursor-pointer hover:duration-200 hover:bg-white_color hover:text-text_black_color hover:p-2 hover:rounded hover:transition-all hover:text-center'>
                      <span className='text-xl'><MdOutlineLocalMall /></span>
                      <h5 className='textTwo14px capitalize'>My Order</h5>
                    </div>
                    <div className='flex items-center justify-start gap-x-4 text-white_color transition-all duration-0 cursor-pointer hover:duration-200 hover:bg-white_color hover:text-text_black_color hover:p-2 hover:rounded hover:transition-all hover:text-center'>
                      <span className='text-xl'><MdOutlineCancel /></span>
                      <h5 className='textTwo14px capitalize'>My Cancellations</h5>
                    </div>
                    <div className='flex items-center justify-start gap-x-4 text-white_color transition-all duration-0 cursor-pointer hover:duration-200 hover:bg-white_color hover:text-text_black_color hover:p-2 hover:rounded hover:transition-all hover:text-center'>
                      <span className='text-xl'><IoIosStarOutline /></span>
                      <h5 className='textTwo14px capitalize'>My Reviews</h5>
                    </div>
                    <div className='flex items-center justify-start gap-x-4 text-white_color transition-all duration-0 cursor-pointer hover:duration-200 hover:bg-white_color hover:text-text_black_color hover:p-2 hover:rounded hover:text-center'>
                      <span className='text-xl'><BiLogOut /></span>
                      <h5 className='textTwo14px capitalize'>Logout</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nabvar
