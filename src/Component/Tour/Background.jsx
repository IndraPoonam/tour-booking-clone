import { useState } from "react"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Background = () => {
    const [selectedLocation, setSelectedLocation] = useState("All India");      //location
    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const [startDate, setStartDate] = useState(new Date());                    //date booking
    const [endDate, setEndDate] = useState(null);

    const [isOpen, setIsOpen] = useState(false);                      //guests
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleAdultsChange = (value) => {
        if (value >= 1) {
            setAdults(value);
            setIsOpen(false); 
        }
    };
    const handleChildrenChange = (value) => {
        if (value >= 0) {
            setChildren(value);
            setIsOpen(false); 
        }
    };

  

        return (
            <form  className="bg-white">
                <div className='lg:h-[120vh] lg:w-full h-[90vh] bg-[url("https://as1.ftcdn.net/v2/jpg/06/27/24/52/1000_F_627245200_pWXJvWLuvghB0jmA5MkQpNHbyjVfeEqd.jpg")] 
               bg-no-repeat bg-center bg-cover overflow-hidden  flex justify-center items-center'>

                    <div className="text-center">
                        <div className='font-bold text-black lg:text-5xl text-[2rem]'>Welcome To Travel Gate And Tours Nigerian Ltd!</div>
                        {/* <div className='font-bold text-black m-auto'>pearl islnad hotel & resort</div> */}
                        <div className='lg:h-20  lg:w-[60rem] h-auto w-11/12 lg:flex m-auto lg:rounded-none mt-10 rounded-3xl'>
                            <div className='text-black bg-white lg:h-20 lg:w-1/2  h-[4rem] w-full border border-3 border-blue-700'>
                                <p className="text-center lg:mt-3 mt-2" name="Location"><i class="fa-solid fa-location-dot"></i>Location</p>
                                <select value={selectedLocation} onChange={handleLocationChange} className="ml-14 w-[9rem] mr-2 border border-red-500">
                                    <option value="All India">All India</option>
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Puducherry">Puducherry</option>
                                </select>

                            </div>
                            {/* ================================================================================== */}
                            <div className='text-black bg-white lg:h-auto h-[4rem] lg:w-fit w-full  border border-3 border-blue-700 p-4 flex flex-col md:flex-row items-center justify-center'>
                                <div className="flex  items-center justify-center md:mr-4 mb-2 md:mb-0">
                                    <i className="fa-solid fa-calendar-days"></i>
                                    <p className="text-center" name="From">From</p>
                                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} minDate={new Date()} className="text-center bg-gray-400 w-[6rem] " />

                                    <p className="text-center" name="To"> To</p>
                                    <DatePicker selected={endDate} onChange={date => setEndDate(date)} minDate={startDate} className="text-center   bg-gray-400 w-[6rem]" />
                                </div>
                            </div>

                            {/* ================================================================================================= */}
                            <div className='text-black bg-white lg:h-auto h-[4rem] w-full border border-3 border-blue-700'>
                                <p className="text-center" name="Guests">Guests</p>
                                 <div className="flex justify-center items-center">
                                    <div className="relative">
                                        <div className="text-center" onClick={toggleDropdown}>
                                            <i className="fa-regular fa-user cursor-pointer"></i>&nbsp;
                                            {adults} Adult{adults > 1 ? 's' : ''} - {children} Child{children !== 1 ? 'ren' : ''}&nbsp;
                                            <i className={`fa-solid fa-caret-${isOpen ? 'up' : 'down'} cursor-pointer`}></i>
                                        </div>
                                        {isOpen && (
                                            <div className="absolute top-full left-0 bg-white border border-gray-300 p-2">
                                                <div className="flex justify-between">
                                                    <div>
                                                        <label>Adults:</label>
                                                        <input type="number" value={adults} onChange={(e) => handleAdultsChange(parseInt(e.target.value))} />
                                                    </div>
                                                    <div>
                                                        <label>Children:</label>
                                                        <input type="number" value={children} onChange={(e) => handleChildrenChange(parseInt(e.target.value))} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div> 
                            </div>
                            {/* ===================================================================== */}
                            <div class="flex items-center justify-center h-20 w-full border-3 border-blue-700 bg-orange-600">
                                <button class="text-white font-bold text-center  hover:bg-blue-700" type="submit">BOOK NOW</button>

                            </div>



                        </div>
                
                    </div>
                </div>
            </form>
        )
    }


    export default Background;