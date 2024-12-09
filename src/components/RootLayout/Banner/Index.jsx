import React from 'react';
import { category } from '../../../../Data/data.js';
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <section className='pt-10 pb-36'>
      <div className='container'>
        <div className='flex'>
          <div className='bg-red-600 w-[23%]'>
            <ul>
              {category?.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.id} 
                    className="text-white hover:text-yellow-300"
                  >
                    {item.category}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='bg-blue-600 w-[77%]'>
            2
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;


