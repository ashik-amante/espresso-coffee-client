import { useNavigate } from "react-router-dom";



const Updatecoffee = () => {
    const navigate = useNavigate()
    const handlebackhome = ()=>{
        navigate('/')
    }
    return (
        <div>
            <div className="  mt-8  px-10">
                <button className="flex items-center gap-4 font-semibold hover:bg-[#D2B48C] px-8 py-2 rounded-lg">
                    {/* <span className="font-rancho text-xl"><FaLongArrowAltLeft />
                    </span> */}
                    <button className="font-rancho " onClick={handlebackhome}>Back to home</button>
                </button>
            </div>
            <div className="flex justify-around items-center bg-[#F4F3F0]">
                <div>
                    <p>image</p>
                </div>
                <div>
                    <h1 className="font-rancho text-3xl">Niceties</h1>
                    <p>Name:</p>
                    <p>Chef:</p>
                    <p>Suplier:</p>
                    <p>Taste:</p>
                    <p>Category:</p>
                    <p>Details:</p>
                </div>
            </div>
        </div>
    );
};

export default Updatecoffee;