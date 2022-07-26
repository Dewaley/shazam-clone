import { MdOutlineLibraryMusic } from 'react-icons/md';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { SiShazam } from 'react-icons/si';
import { BiHeadphone } from 'react-icons/bi';
import { RiSearchLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';

const Home = () => {
  const [listening, setListening] = useState(false);

  return (
    <div className='text-white w-screen h-screen bg-slate-900 flex flex-col items-center gap-x-12 relative justify-center select-none'>
      <div className='flex justify-between text-3xl p-4 w-full absolute top-0'>
        <MdOutlineLibraryMusic className='cursor-pointer' />
        <HiOutlineChartSquareBar className='cursor-pointer' />
      </div>
      <div className='flex flex-col items-center gap-y-8'>
        <h1 className='flex items-center gap-x-1.5'>
          <BiHeadphone />
          Tap to Shazam
        </h1>
        <div className='bg-white rounded-full mb-12 cursor-pointer'>
          <SiShazam
            className='text-9xl text-gray-700'
            onClick={() => {
              setListening(!listening);
            }}
          />
        </div>
        <div className='w-12 h-12 rounded-full bg-gray-700 flex justify-center items-center text-xl cursor-pointer'>
          <RiSearchLine />
        </div>
      </div>
    </div>
  );
};

export default Home;
