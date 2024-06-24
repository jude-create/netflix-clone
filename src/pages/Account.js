import React from 'react';
import SavedShows from '../components/SavedShows';

const Account = () => {
  return (
    <>
       <div className='w-full text-white'>
        <img 
        className='w-full h-[400px] object-cover'
        src='https://images.unsplash.com/photo-1512070679279-8988d32161be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80'
         alt='/'/>
         <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
         <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'> My Shows</h1>
         </div>
       </div>
     <SavedShows />
    </>
  );
};

export default Account
