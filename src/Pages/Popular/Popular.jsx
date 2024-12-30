import { BsCupHot } from "react-icons/bs";
import './popular.css'
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const Popular = () => {
    const loadedCoffees = useLoaderData()
    console.log(loadedCoffees);
    return (
        <div className="popular">
            <div className="flex  items-center justify-center max-w-6xl mx-auto  mt-20">
                <div className="space-y-2 w-full  ">
                    <p className="text-[20px] text-center">--- Sip & Savor</p>
                    <h1 className="font-rancho text-center text-[55px] ">Our Popular Products :{loadedCoffees.length}</h1>

                    {/* card for coffee */}
                    <div className="grid grid-cols-2 gap-4 ">
                        {
                            loadedCoffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}>

                            </CoffeeCard>)
                        }
                    </div>

                    {/* add coffee button and link */}
                    <Link to='/addCoffee'>
                    <div className="flex items-center justify-center mt-10">
                        <button className="flex gap-2 items-center justify-center bg-[#E3B577] px-10 py-2 rounded text-white  font-rancho ">Add Coffee <span className="text-black"><BsCupHot /> </span> </button>
                    </div></Link>
                </div>
            </div>
        </div>
    );
};

export default Popular;