// 












import React from 'react'

const RoomView = () => {




  return (
    <div className='w-full h-screen'>
      <div className='flex justify-between  w-full'>
        <div>
          <h1 className="text-zinc-700 text-[24px]">Room View</h1>
        </div>
        <div className=' text-zinc-500 flex items-center text-[0.8rem] gap-2'>
          <i className="fa-solid fa-gauge"></i>
          Home <i className="fa-solid fa-greater-than text-xs font-medium"></i>Room View
        </div>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-3">
        <div className='h-[100px] w-[100%] text-white  flex  bg-[#DD4B39]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white  fa-solid fa-bed"></i></div>
          <div className='px-1 py-1 w-[70%]'>
            <p className='font-bold text-[18px]'>ROOM NO : 1</p>
            <p className='text-[14px]'>Rent: 500, Guest ID#:</p>
          </div>
        </div>
        <div className='h-[100px] w-[100%] text-white flex bg-[#00C0EF]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <p className='font-bold text-[18px]'>ROOM NO : 2</p>
            <p className='text-[14px]'>Rent: 500, Guest ID#:</p>
          </div>
        </div>
        {/* <div className='h-[100px] w-[100%] text-white flex bg-[#DD4B39]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <p className='font-bold text-[18px]'>ROOM NO : 3</p>
            <p className='text-[14px]'>Rent: 500, Guest ID#: 1</p>
          </div>
        </div> */}
        {/* <div className='h-[100px] w-[100%] text-white flex bg-[#00C0EF]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <p className='font-bold text-[18px]'>ROOM NO : 4</p>
            <p className='text-[14px]'>Rent: 500, Guest ID#:
            </p>
          </div>
        </div> */}
        {/* <div className='h-[100px] w-[100%] text-white flex  bg-[#00C0EF]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <p className='font-bold text-[18px]'>
              ROOM NO : 5</p>
            <p className='text-[14px]'>Rent: 500, Guest ID#:
            </p>
          </div>
        </div> */}
        {/* <div className='h-[100px] w-[100%] text-white flex bg-[#00C0EF]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='py-1 px-1'>
            <h1 className='text-[14px]'>AC TWINBED ROOM</h1>
            <p className='font-bold text-[18px]'>ROOM NO : 6</p>
            <p className='text-[14px]'>Rent: 1000, Guest ID#:</p>
          </div>
        </div> */}
        {/* <div className='h-[100px] w-[100%] text-white flex bg-[#00C0EF]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <h1 className='text-[14px]'>AC TWINBED ROOM</h1>
            <p className='font-bold text-[18px]'>ROOM NO : 7</p>
            <p className='text-[14px]'>Rent: 1000, Guest ID#:</p>
          </div>
        </div> */}
        {/* <div className='h-[100px] w-[100%] text-white flex bg-[#00C0EF]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <h1 className='text-[14px]'>DOUBLE BEDROOM C</h1>
            <p className='font-bold text-[18px]'>ROOM NO : 8</p>
            <p className='text-[14px]'>Rent: 1000, Guest ID#:</p>
          </div>
        </div> */}
        {/* <div className='h-[100px] w-[100%] text-white flex bg-[#00C0EF]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <h1 className='text-[14px]'>DOUBLE BEDROOM C</h1>
            <p className='font-bold text-[18px]'>ROOM NO : 9</p>
            <p className='text-[14px]'>Rent: 5000, Guest ID#:</p>
          </div>
        </div> */}
        {/* <div className='h-[100px] w-[100%] text-white flex bg-[#DD4B39]'>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i class="text-4xl text-white fa-solid fa-bed"></i></div>
          <div className='px-1 py-1'>
            <h1 className='text-[14px]'>DOUBLE BEDROOM C</h1>
            <p className='font-bold text-[18px]'>ROOM NO : 10</p>
            <p className='text-[14px]'>Rent: 1000, Guest ID#:</p>
          </div>
        </div> */}


      </div>
    </div>
  )
}

export default RoomView






