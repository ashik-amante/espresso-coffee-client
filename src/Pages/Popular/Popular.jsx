import { BsCupHot } from "react-icons/bs";
import './popular.css'

const Popular = () => {
    return (
        <div className="popular">
            <div className="flex  items-center justify-center mt-20">
                <div className="space-y-2">
                    <p className="text-[20px] text-center">--- Sip & Savor</p>
                    <h1 className="font-rancho text-[55px] ">Our Popular Products</h1>
                    <div className="flex items-center justify-center">
                        <button className="flex gap-2 items-center justify-center bg-[#E3B577] px-10 py-2 rounded text-white  font-rancho ">Add Coffee <span className="text-black"><BsCupHot /> </span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;