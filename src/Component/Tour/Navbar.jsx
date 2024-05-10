import React from 'react'

const Navbar = () => {
    return (
        <>

            <div className='h-20 w-full bg-slate-200 lg:fixed top-0 flex justify-between'>
                <div className='w-1/2 h-fit flex gap-4 text-center justify-center'>
                    <img className='w-[14rem] h-15 mt-5 ml-6' src='http://codexeco.com/hms/public/uploads/logo/d76e10d2292d1bfa9f000545009607c6_1640682030.png' />
                    <h1 className='font-bold text-3xl pt-5 text-orange-600 hidden md:flex'>Home</h1>
                    <h1 className='font-bold text-3xl pt-5 hidden md:flex'>About</h1>
                    <h1 className='font-bold text-3xl pt-5 hidden md:flex'>Contact</h1>
                </div>
                <div className='w-1/2 h-fit lg:flex gap-5 text-center justify-center hidden md:flex'>
                    <h1 className='font-bold text-2xl pt-7'><i className="fa-solid fa-circle-user text-green-600"></i>&nbsp;Log In</h1>
                    <h1 className='font-bold text-2xl pt-7'><i className="fa-solid fa-circle-arrow-right text-orange-600"></i>&nbsp;Sign Up</h1>
                </div>
                {/* <div ><i className="fa-solid fa-bars text-black text-3xl "></i></div> */}
                <div className='lg:hidden  px-5 py-5'>
                    <i className="fa-solid fa-bars text-black text-3xl  "></i>
                </div>


            </div>



        </>
    )
}

export default Navbar