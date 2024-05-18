import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoomView = () => {
  const [roomData, setRoomData] = useState([]);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setRoomData(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };
    fetchRoomData();
  }, []);
  return (
    <div className='w-full h-screen'>
    <div className='flex justify-between w-full'>
      <div>
        <h1 className="text-zinc-700 text-[24px]">Room View</h1>
      </div>
      <div className='text-zinc-500 flex items-center text-[0.8rem] gap-2'>
        <i className="fa-solid fa-gauge"></i>
        Home <i className="fa-solid fa-greater-than text-xs font-medium"></i>Room View
      </div>
    </div>
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-3">
      {roomData.map((room, index) => (
        <div key={index} className={`h-fix w-fix text-white flex ${room.booking_status === 'booked' ? 'bg-red-500' : 'bg-green-500'}`}>
          <div className='h-[100%] w-[30%] bg-[rgba(0,0,0,0.2)] flex items-center justify-center'><i className="text-4xl text-white  fa-solid fa-bed"></i></div>
          <div className='px-1 py-1 w-[70%]'>
            <p className='font-bold text-[18px]'>UserName : {room.username}</p>
            <p className='font-bold text-[18px]'>Email : {room.email}</p>
            <p className='text-[14px] font-bold'>Guest name: {room.name}</p>
            {/* <p className='text-[14px]'>Rent:{room.rent_per_day}</p>
            <p className='text-[14px]'>Room Status: {room.roomstatus}</p>
            <p className='text-[14px]'>Booking Status: {room.booking_status}</p> */}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};
export default RoomView;