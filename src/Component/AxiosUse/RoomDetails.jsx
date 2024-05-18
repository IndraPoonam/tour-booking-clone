// import axios from 'axios';
// import React from 'react'
// import { useState, useEffect } from 'react';

// const RoomDetails = () => {

//   const [searchQuery, setSearchQuery] = useState('')

//   const [Visibility, setVisibility] = useState({});
//   const plusVisibility = (index) => {
//     setVisibility(textVisibility => ({
//       ...textVisibility,
//       [index]: !textVisibility[index]

//     }));
//   }

//   // const RoomType = [
//   //   "Ac twinbed Room",
//   //   "Double Bedroom Chalet",
//   //   "Single bed",

//   // ]
//   //////////////////////////////////////////////above code pandey ji//////////////////////
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://192.168.29.85:3000/room_details')
//       .then(response => {
//         setData(response.data); // Corrected to response.data
//         console.log("data", response);
//       })
//       .catch(error => {
//         console.error("Error fetching data", error);
//       });
//   }, []);


//   const [formData, setFormData] = useState({
//     roomNo: '',
//     Rent: '',
//     roomStatus: '',
//     bookingStatus: '',
//   });


//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://192.168.29.85:3000/room_details', {
//       room_no: formData.roomNo,
//       rent_per_day: formData.Rent,
//       room_type_id: 1,
//       roomstatus: formData.roomStatus,
//       booking_status: formData.bookingStatus,                         //dono work nhi kregi bcz of update
//       // roomstatus: 'clean',
//       // booking_status: 'booked'
//     })
//       .then((response) => {
//         console.log("POST request successful", response.data);
//         setFormData({
//           roomNo: '',
//           Rent: '',
//           // roomStatus: '',
//           // bookingStatus: ''
//         })
//         // Make a GET request to fetch updated data
//         axios.get('http://192.168.29.85:3000/room_details')
//           .then(response => {
//             setData(response.data);
//             console.log("Updated data", response.data);
//           })
//           .catch(error => {
//             console.error("Error fetching updated data", error);
//           });
//       })

//   };
//   //////////////////////////////////////////////////////////////////////////////

//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     setDropdownVisible(false);
//   };

//   const handleBlur = () => {
//     // Keep the dropdown open until an option is chosen
//     // Don't hide the dropdown when focus moves away
//     setDropdownVisible(true);
//   };

//   return (
//     <>
//       {/* first part  */}

//       <div className='lg:h-[172vh] lg:w-full w-full'>
//         <div className='md:flex justify-between'>
//           <div className='flex gap-2'>
//             <h1 className='lg:text-[24px] font-normal text-[#444444] lg:pl-4 '>Room Details</h1>
//           </div>
//           <div className=' '>
//             <p className=' text-[12px]  text-[#444444] pt-3 ]'><i class="fas fa-gauge"></i><b>Home</b> <i class="fas fa-chevron-right"></i>Room Details</p>
//           </div>
//         </div>
//         <div className='lg:h-[52vh] h-fit lg:w-[50%] w-11/12 bg-white rounded-sm border-4 border-t-[#00acd6] ml-4 mt-2 '>
//           <form onSubmit={handleSubmit} action="" className='border'>
//             <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}>
//               <div className='pt-3 pl-3'>
//                 <label className='text-[13px] text-[#333333]' htmlFor=""><b>Room Type</b></label>&nbsp;
//               </div>
//               <input
//                 className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Room Type'
//                 name="roomType"
//                 value={formData.roomType}
//                 onChange={handleInputChange}
//                 onFocus={() => setDropdownVisible(true)}
//                 onBlur={handleBlur}
//               />
//               {dropdownVisible && (
//                 <select
//                   className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                   value={formData.roomType}
//                   onChange={handleInputChange}
//                   name="roomType"
//                 >
//                   <option value="">Select Room status</option>
//                   <option value="1">1</option>
//                 </select>
//               )}
//             </div>
//             {/* ////////////////////////////////////////////////////////////////////////////14may */}
//             <div className={`pt-3 pl-3 transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}>
//               <span >
//                 <label className='text-[13px] font-semibold text-[#333333]' htmlFor=""><b>Room No</b></label>&nbsp;
//                 <label className='text-[13px] text-[#FF0000]' htmlFor="">*Required</label>
//               </span>
//               <input className='text-[13px] h-[34px] border border-[#d2d6de]  mt-2 pl-2 w-[97%] text-[#333333]'
//                 type="text"
//                 placeholder='Room No'
//                 value={formData.roomNo}
//                 onChange={(e) => setFormData({ ...formData, roomNo: e.target.value })}
//               />
//             </div>
//             <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}>
//               <div className='pt-3 pl-3'>
//                 <span >
//                   <label className='text-[13px] text-[#333333]' htmlFor=""><b>Rent (Per Day)</b></label>&nbsp;
//                   <label className='text-[13px] text-[#FF0000]' htmlFor="">*Required</label>
//                 </span>
//               </div>
//               <input className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Rent'
//                 value={formData.Rent}
//                 onChange={(e) => setFormData({ ...formData, Rent: e.target.value })}/>
//             </div>
//             {/* //////////////////////////////////////////////////////////// update room status and booking status */}
//             <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}>
//               <div className='pt-3 pl-3'>
//                 <label className='text-[13px] text-[#333333]' htmlFor=""><b>Room Status</b></label>&nbsp;
//               </div>
//               {/* <input className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Room status'
//                 value={formData.roomStatus}
//                 onChange={(e) => setFormData({ ...formData, roomStatus: e.target.value })}
//               /> */}
//               <input
//                 className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Room status'
//                 name="roomStatus"
//                 value={formData.roomStatus}
//                 onChange={handleInputChange}
//                 onFocus={() => setDropdownVisible(true)}
//                 onBlur={handleBlur}
//               />
//               {dropdownVisible && (
//                 <select
//                   className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                   value={formData.roomStatus}
//                   onChange={handleInputChange}
//                   name="roomStatus"
//                 >
//                   <option value="">Select Room status</option>
//                   <option value="dirty">dirty</option>
//                   <option value="clean">clean</option>

//                 </select>
//               )}

//             </div>
//             <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}>
//               <div className='pt-3 pl-3'>
//                 <label className='text-[13px] text-[#333333]' htmlFor=""><b>Booking Status</b></label>&nbsp;
//               </div>

//               <input
//                 className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Booking status'
//                 name="bookingStatus"
//                 value={formData.bookingStatus}
//                 onChange={handleInputChange}
//                 onFocus={() => setDropdownVisible(true)}
//                 onBlur={handleBlur}
//               />
//               {dropdownVisible && (
//                 <select
//                   className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                   value={formData.bookingStatus}
//                   onChange={handleInputChange}
//                   name="bookingStatus"
//                 >
//                   <option value="">Select booking status</option>
//                   <option value="available">available</option>
//                   <option value="booked">booked</option>
//                   <option value="reserved">reserved</option>
//                   <option value="maintenance">maintenance</option>
//                 </select>
//               )}
//             </div>
//             {/* //////////////////////////////////////////////////////// */}
//             <div className='mt-5 ml-3'>
//               <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                   Submit
//                 </span>
//               </button>
//               <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                   Reset
//                 </span>
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* second part */}

//         <div className="relative overflow-x-auto border-t-4  border-[#0089db] pt-5 mt-10">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="p-4">

//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   ID
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   ROOM Type
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Room No
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Rent
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Room Status
//                 </th>

//                 <th scope="col" className="px-6 py-3">
//                   Booking Status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* ////////////////////////////////////Api used/////////////////////////////////////////// */}
//               {data.map((item) => (
//                 <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                   <td className="w-4 p-4">

//                   </td>
//                   <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     {item.id}
//                   </th>
//                   <td className="px-6 py-4">
//                     {item.room_no}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.room_no}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.rent_per_day}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.roomstatus}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.booking_status}
//                   </td>
//                   <td className="px-6 py-4">

//                     <button className='bg-yellow-600  rounded-md h-[30px] w-[50px] mx-2 mt-2 text-white' >Edit</button>

//                   </td>
//                   <td class="px-6 py-4">
//                     <button className='bg-red-600  rounded-md h-[30px] w-[50px] mx-2 mt-2 text-white'>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </>
//   )
// }


// export default RoomDetails


// import axios from 'axios';
// import React from 'react'
// import { useState, useEffect } from 'react';

// const RoomDetails = () => {

//   const [searchQuery, setSearchQuery] = useState('')

//   const [Visibility, setVisibility] = useState({});
//   const plusVisibility = (index) => {
//     setVisibility(textVisibility => ({
//       ...textVisibility,
//       [index]: !textVisibility[index]

//     }));
//   }

//   // const RoomType = [
//   //   "Ac twinbed Room",
//   //   "Double Bedroom Chalet",
//   //   "Single bed",

//   // ]
//   //////////////////////////////////////////////above code pandey ji//////////////////////
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get('http://192.168.29.85:3000/room_details')
//       .then(response => {
//         setData(response.data); // Corrected to response.data
//         console.log("data", response);
//       })
//       .catch(error => {
//         console.error("Error fetching data", error);
//       });
//   }, []);


//   const [formData, setFormData] = useState({
//     roomNo: '',
//     Rent: '',
//     roomStatus: '',
//     bookingStatus: '',
//   });


//   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://192.168.29.85:3000/room_details', {
//       room_no: formData.roomNo,
//       rent_per_day: formData.Rent,
//       room_type_id: 1,
//       roomstatus: formData.roomStatus,
//       booking_status: formData.bookingStatus,                         //dono work nhi kregi bcz of update
//       // roomstatus: 'clean',
//       // booking_status: 'booked'
//     })
//       .then((response) => {
//         console.log("POST request successful", response.data);
//         setFormData({
//           roomNo: '',
//           Rent: '',
//           // roomStatus: '',
//           // bookingStatus: ''
//         })
//         // Make a GET request to fetch updated data
//         axios.get('http://192.168.29.85:3000/room_details')
//           .then(response => {
//             setData(response.data);
//             console.log("Updated data", response.data);
//           })
//           .catch(error => {
//             console.error("Error fetching updated data", error);
//           });
//       })

//   };
//   //////////////////////////////////////////////////////////////////////////////

// //   const [dropdownVisible, setDropdownVisible] = useState(false);

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({ ...formData, [name]: value });

// //     setDropdownVisible(false);
// //   };

// //   const handleBlur = () => {
// //     // Keep the dropdown open until an option is chosen
// //     // Don't hide the dropdown when focus moves away
// //     setDropdownVisible(true);
// //   };

// const [dropdownVisible, setDropdownVisible] = useState([]);

// const handleInputChange = (e, index) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });

//   // Update the visibility state based on the index of the input field
//   const newDropdownVisible = Array.from({ length: 3 }, (_, i) => i === index);
//   setDropdownVisible(newDropdownVisible);
// };

// const handleBlur = () => {
//   // Close all dropdowns when focus moves away from any input field
//   setDropdownVisible([false, false, false]);
// };


//   return (
//     <>
//       {/* first part  */}

//       <div className='lg:h-[172vh] lg:w-full w-full'>
//         <div className='md:flex justify-between'>
//           <div className='flex gap-2'>
//             <h1 className='lg:text-[24px] font-normal text-[#444444] lg:pl-4 '>Room Details</h1>
//           </div>
//           <div className=' '>
//             <p className=' text-[12px]  text-[#444444] pt-3 ]'><i class="fas fa-gauge"></i><b>Home</b> <i class="fas fa-chevron-right"></i>Room Details</p>
//           </div>
//         </div>
//         <div className=' h-fit lg:w-[50%] w-11/12 bg-white rounded-sm border-4 border-t-[#00acd6] ml-4 mt-2 '>
//           <form onSubmit={handleSubmit} action="" className='border'>
//             {/* <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}> */}
//               <div className='pt-3 pl-3'>
//                 <label className='text-[13px] text-[#333333]' htmlFor=""><b>Room Type</b></label>&nbsp;
//               </div>
//               {/* <input
//                 className='text-[13px] h-[34px]  w-[97%] border border-[#d2d6de] ml-3 mt-2 pl-2  text-[#333333]'
//                 type="text"
//                 placeholder='Room Type'
//                 name="roomType"
//                 value={formData.roomType}
//                 onChange={handleInputChange}
//                 onFocus={() => setDropdownVisible(true)}
//                 onBlur={handleBlur}
//               />
//               {dropdownVisible[0] && (
//                 <select
//                   className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                   value={formData.roomType}
//                   onChange={handleInputChange}
//                   name="roomType"
//                 >
//                   <option value="">Select Room status</option>
//                   <option value="1">1</option>
//                 </select>
//               )} */}
// <input
//   className='text-[13px] h-[34px]  w-[97%] border border-[#d2d6de] ml-3 mt-2 pl-2  text-[#333333]'
//   type="text"
//   placeholder='Room Type'
//   name="roomType"
//   value={formData.roomType}
//   onChange={(e) => handleInputChange(e, 0)} // Pass the index 0 for the first input
//   onFocus={() => setDropdownVisible([true, false, false])}
//   onBlur={handleBlur}
// />
// {dropdownVisible[0] && (
//   <select
//     className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//     value={formData.roomType}
//     onChange={(e) => handleInputChange(e, 0)} // Pass the index 0 for the dropdown
//     name="roomType"
//   >
//     <option value="">Select Room status</option>
//     <option value="1">1</option>
//   </select>
// )}


//             {/* </div> */}
//             {/* ////////////////////////////////////////////////////////////////////////////14may */}
//             <div className='pt-3 pl-3'>
//               <span >
//                 <label className='text-[13px] font-semibold text-[#333333] ' htmlFor=""><b>Room No</b></label>&nbsp;
//                 <label className='text-[13px] text-[#FF0000]' htmlFor="">*Required</label>
//               </span>
//               <input className='text-[13px] h-[34px] border border-[#d2d6de]  mt-2 pl-2 w-[97%] text-[#333333]'
//                 type="text"
//                 placeholder='Room No'
//                 value={formData.roomNo}
//                 onChange={(e) => setFormData({ ...formData, roomNo: e.target.value })}
//               />
//             </div>
//             {/* <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}> */}
//               <div className='pt-3 pl-3'>
//                 <span >
//                   <label className='text-[13px] text-[#333333]' htmlFor=""><b>Rent (Per Day)</b></label>&nbsp;
//                   <label className='text-[13px] text-[#FF0000]' htmlFor="">*Required</label>
//                 </span>
//               </div>
//               <input className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Rent'
//                 value={formData.Rent}
//                 onChange={(e) => setFormData({ ...formData, Rent: e.target.value })}/>
//             {/* </div> */}
//             {/* //////////////////////////////////////////////////////////// update room status and booking status */}
//             {/* <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}> */}
//               <div className='pt-3 pl-3'>
//                 <label className='text-[13px] text-[#333333]' htmlFor=""><b>Room Status</b></label>&nbsp;
//               </div>
//               {/* <input className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Room status'
//                 value={formData.roomStatus}
//                 onChange={(e) => setFormData({ ...formData, roomStatus: e.target.value })}
//               /> */}
//               {/* <input
//                 className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Room status'
//                 name="roomStatus"
//                 value={formData.roomStatus}
//                 onChange={handleInputChange}
//                 onFocus={() => setDropdownVisible(true)}
//                 onBlur={handleBlur}
//               /> */}

// <input
//   className='text-[13px] h-[34px] border border-[#d2d6de]  mt-2 pl-2 w-[97%] text-[#333333]'
//   type="text"
//   placeholder='Room status'
//   value={formData.roomStatus}
//   onChange={(e) => handleInputChange(e, 1)} // Pass the index 1 for the second input
//   onFocus={()=> setDropdownVisible([true,false,false])}
//   onBlur={handleBlur}
// />

//               {dropdownVisible[1] && (
//                 <select
//                   className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                   value={formData.roomStatus}
//                   onChange={(e) => handleInputChange(e,0)}
//                   name="roomStatus"
//                 >
//                   <option value="">Select Room status</option>
//                   <option value="dirty">dirty</option>
//                   <option value="clean">clean</option>

//                 </select>
//               )}

//             {/* </div> */}
//             {/* <div className={` transition-all duration-500  ${Visibility[0] ? 'hidden opacity-0' : 'block opacity-100 '}`}> */}
//               <div className='pt-3 pl-3'>
//                 <label className='text-[13px] text-[#333333]' htmlFor=""><b>Booking Status</b></label>&nbsp;
//               </div>

//               <input
//                 className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                 type="text"
//                 placeholder='Booking status'
//                 name="bookingStatus"
//                 value={formData.bookingStatus}
//                 onChange={handleInputChange}
//                 onFocus={() => setDropdownVisible(true)}
//                 onBlur={handleBlur}
//               />
//               {dropdownVisible[2] && (
//                 <select
//                   className='text-[13px] h-[34px] border border-[#d2d6de] ml-3 mt-2 pl-2 lg:w-[13vw] w-[40vw] text-[#333333]'
//                   value={formData.bookingStatus}
//                   onChange={handleInputChange}
//                   name="bookingStatus"
//                 >
//                   <option value="">Select booking status</option>
//                   <option value="available">available</option>
//                   <option value="booked">booked</option>
//                   <option value="reserved">reserved</option>
//                   <option value="maintenance">maintenance</option>
//                 </select>
//               )}
//             {/* </div> */}
//             {/* //////////////////////////////////////////////////////// */}
//             <div className='mt-5 ml-3'>
//               <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                   Submit
//                 </span>
//               </button>
//               <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
//                 <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
//                   Reset
//                 </span>
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* second part */}

//         <div className="relative overflow-x-auto border-t-4  border-[#0089db] pt-5 mt-10">
//           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//               <tr>
//                 <th scope="col" className="p-4">

//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   ID
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   ROOM Type
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Room No
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Rent
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Room Status
//                 </th>

//                 <th scope="col" className="px-6 py-3">
//                   Booking Status
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//                 <th scope="col" className="px-6 py-3">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* ////////////////////////////////////Api used/////////////////////////////////////////// */}
//               {data.map((item) => (
//                 <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//                   <td className="w-4 p-4">

//                   </td>
//                   <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     {item.id}
//                   </th>
//                   <td className="px-6 py-4">
//                     {item.room_no}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.room_no}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.rent_per_day}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.roomstatus}
//                   </td>
//                   <td className="px-6 py-4">
//                     {item.booking_status}
//                   </td>
//                   <td className="px-6 py-4">

//                     <button className='bg-yellow-600  rounded-md h-[30px] w-[50px] mx-2 mt-2 text-white' >Edit</button>

//                   </td>
//                   <td class="px-6 py-4">
//                     <button className='bg-red-600  rounded-md h-[30px] w-[50px] mx-2 mt-2 text-white'>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//     </>
//   )
// }


// export default RoomDetails