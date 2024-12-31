import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import './detail.css'


const CoffeeDetail = () => {
    const coffee = useLoaderData()
    const { name, _id, chef, supplier, taste, category, details, photo, email } = coffee
    const navigate = useNavigate()
    const handlebackhome = () => {
        navigate(-1)
    }
    return (
        <div className="detail">
            <div className="  mt-8  px-10 mb-4">
                <button className="flex items-center gap-4 font-semibold hover:bg-[#D2B48C] px-8 py-2 rounded-lg">
                    <span className="font-rancho text-xl"><FaLongArrowAltLeft />
                    </span>
                    <button className="font-rancho text-3xl " onClick={handlebackhome}>Back to home</button>
                </button>
            </div>
            {/* details card  */}
            <div className="grid rounded-xl grid-cols-2 bg-[#F4F3F0] max-w-6xl mx-auto mb-10">
                <div className="p-32  grid col-span-1">
                    <img className="rounded-xl" src={photo} alt="" />
                </div>
                <div className=" grid col-span-1 items-center">
                    <div className="space-y-2">
                        <h1 className="font-rancho text-4xl mb-6">Niceties</h1>
                        <p>Name : {name}</p>
                        <p>Chef : {chef}</p>
                        <p>Suplier : {supplier}</p>
                        <p>Taste : {taste}</p>
                        <p>Category : {category}</p>
                        <p>Details : {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;