// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Deliveryitem from './Deliveryitem';

// function App() {
//   const images = [
//     { path: 'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png', alt: 'Image 1', name:'Paratha' //,owner:'Poonam'
//    },
//     { path: 'https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png', alt: 'Image 2' ,name:'Poha' },
//     { path: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png', alt: 'Image 3',name:'Thali' },
//     { path: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png', alt: 'Image 4', name:'Birayani' },
//     { path: 'https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png', alt: 'Image 5',name:'Kachori' },
//     { path: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png', alt: 'Image 6',name:'Dosa' },
//      { path: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png', alt: 'Image 7',name:'cake' },
//     // { path: 'https://b.zmtcdn.com/data/dish_photos/6b8/65a47550757e4907bb055d49d7c816b8.jpg', alt: 'Image 8',name:'' },
//     // { path: 'https://b.zmtcdn.com/data/dish_photos/c0a/02d1be99f403d1639db9f148c6675c0a.jpg', alt: 'Image 9',name:'' },
//   ];

//   return (
//     <div className="container mx-auto mt-8">
//       <h1 className="text-center text-5xl font-semibold mb-4 ">Inspiration for your first order</h1>
//     <div className='h- w-full'>  <Deliveryitem images={images}
//       //  names={names}
//       /></div>
//     </div>
//   );
// };

// export default App;

// https://script.google.com/macros/s/AKfycbywayQJZEdasWduOnmcO-OfJk6tiP-VhN0vYgxy2MznBIk_JoKj8Tf7Kerf3fWmlffU9Q/exec

import React from 'react'
import Navbar from './Component/Tour/Navbar'
import Background from './Component/Tour/Background'
import AxiosPost from './Component/AxiosUse/AxiosPost'
import AxiosGet from './Component/AxiosUse/AxiosGet'


function App() {
  return (
  <>
  {/* <Navbar/>
  <Background/> */}
  <AxiosPost/>
  {/* <AxiosGet/> */}
  </>
  )
}

export default App
