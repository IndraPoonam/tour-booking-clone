// import React { useState } from "react"


// const RecipeItem = () => {
//     const [query, Setquery] = useState('')
//     const images = [
//         { id:1,
//             image: 'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',
//           name:'Paratha'
//        },
//         { id:2,
//             image: 'https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png',
//          name:'Poha' },
//          {id:3,
//             image: 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png', 
//         name:'Thali' },
//         {id:4,
//             image: 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
//           name:'Birayani' },
//         {id:5,
//             image: 'https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png',
//          name:'Kachori' },
//         { id:6,
//             image: 'https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png',
//          name:'Dosa' },
//          {id:7,
//             image: 'https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png',
//           name:'cake' },
//         {id:8,
//             image: 'https://b.zmtcdn.com/data/dish_photos/6b8/65a47550757e4907bb055d49d7c816b8.jpg',
         
//          name:'cake' },
//         // { path: 'https://b.zmtcdn.com/data/dish_photos/c0a/02d1be99f403d1639db9f148c6675c0a.jpg', alt: 'Image 9',name:'' },
//       ];
//   return (
//     <div className='bg-slate-700' > 
//     <div className='flex justify-center pt-5'>
//     <input className='h-[8vh] text-2xl w-[25vw] rounded ' type="text" placeholder='Search' value={query} onChange={e=>Setquery(e.target.value)} /> 
//     </div>
//         <div className='h-fit w-full  grid grid-cols-3'>
//         {filteredData.map((value, index) =>
//             <div key={index}>
//                 <div className='h-[50vh] bg-indigo-200 w-[28vw] mt-8 ml-2 border border-blue-500 rounded'>
//                     <p className='text-black text-3xl pl-2 text-center font-semibold'>{value.id}</p>
//                     <img className='h-[20vh] w-[10vw] ml-[9rem]' src={value.image} alt="" />
//                     <p className='text-center text-2xl pt-2 font-semibold'>{value.name}</p>
//                    </div>
//             </div>

//         )}
//         </div>
//     </div>
//   )
// }

// export default RecipeItem