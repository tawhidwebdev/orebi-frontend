import React from 'react'

const Header = () => {
  return (
    <section className='bg-black_color p-3'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div></div>
          <div>
            <span className='text-white_color text-sm font-normal font-poppins leading-[21px]'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
          </div>
          <div>
            <select name="" id="" className='text-white_color text-sm font-normal font-poppins leading-[21px] bg-transparent'>
              <option value="#">English</option>
              <option value="#">Bangla</option>
              <option value="#">French</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
