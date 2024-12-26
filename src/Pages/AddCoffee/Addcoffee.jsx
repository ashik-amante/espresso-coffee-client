import Swal from "sweetalert2";
import './ac.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Addcoffee = () => {
    const navigate = useNavigate()
    const handlebackhome = ()=>{
        navigate('/')
    }
    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photo }
        console.log(newCoffee);

        // send data to the server

    }
    return (
        <div >
            
            <div className=" font-semibold flex items-center gap-4 mt-8  px-10">
                <span className="font-rancho text-xl"><FaLongArrowAltLeft />
                </span>
                <button className="font-rancho" onClick={handlebackhome}>Back to home</button>
            </div>
            <div className="bg-[#F4F3F0] p-24 coffee">
                <div className="mb-10">
                    <h1 className="text-5xl font-bold text-center mb-4 font-rancho">Add A Coffee</h1>
                    <p className="md:px-44 mx-auto text-center font-raleway">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its lay out. The point of using Lorem Ipsum is that i  has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>

                <form onSubmit={handleAddCoffee}>
                    <div>
                        {/* form row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4 md:w-1/2 ">
                                <div className="label">
                                    <span className="label-text font-raleway">Coffee Name</span>
                                </div>
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full md:w-1/2">
                                <div className="label">
                                    <span className="label-text font-raleway">Chef</span>
                                </div>
                                <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full " />

                            </label>
                        </div>
                        {/* supplier row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4 md:w-1/2 ">
                                <div className="label">
                                    <span className="label-text"> Supplier Name</span>
                                </div>
                                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full md:w-1/2">
                                <div className="label">
                                    <span className="label-text">Taste </span>
                                </div>
                                <input type="text" name="taste" placeholder="Coffee taste " className="input input-bordered w-full " />

                            </label>
                        </div>
                        {/* Category row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4 md:w-1/2 ">
                                <div className="label">
                                    <span className="label-text"> Category</span>
                                </div>
                                <input type="text" name="category" placeholder="Coffee category " className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full md:w-1/2">
                                <div className="label">
                                    <span className="label-text">Details</span>
                                </div>
                                <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full " />

                            </label>
                        </div>
                        {/* photo  row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4  ">
                                <div className="label">
                                    <span className="label-text"> Photo</span>
                                </div>
                                <input type="text" name="photo" placeholder="Enter Photo url " className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    <input className="btn bg-[#D2B48C] btn-block" type="submit" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default Addcoffee;