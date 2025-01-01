import { FaLongArrowAltLeft } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const Updatecoffee = () => {
    const loadedCoffee = useLoaderData()
    const { name, chef, supplier, taste, category, details, photo,_id } = loadedCoffee
    const navigate = useNavigate()
    const handlebackhome = () => {
        navigate(-1)
    }
    const handleUpdateCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        
        const updatedCoffee = { name, chef, supplier, taste, category, details, photo, }
        console.log(updatedCoffee);
        
         // Update data to the server
                fetch(`http://localhost:5000/coffees/${_id}`,{
                    method:'PUT',
                    headers:{
                        'content-type': 'application/json',
                    },
                    body:JSON.stringify(updatedCoffee)
                })
                .then(res=> res.json())
                .then(data=>{
                    console.log(data);
                    if(data.matchedCount){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Coffee has been Updated",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                    
                })

    }
    return (
        <div >

            <div className="  mt-8  px-10">
                <button className="flex items-center gap-4 font-semibold hover:bg-[#D2B48C] px-8 py-2 rounded-lg">
                    <span className="font-rancho text-xl"><FaLongArrowAltLeft />
                    </span>
                    <button className="font-rancho " onClick={handlebackhome}>Back to home</button>
                </button>
            </div>
            <div className="bg-[#F4F3F0] p-24 coffee">
                <div className="mb-10">
                    <h1 className="text-5xl font-bold text-center mb-4 font-rancho">Updatde Coffee</h1>
                  
                </div>

                <form onSubmit={handleUpdateCoffee}>
                    <div>
                        {/* form row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4 md:w-1/2 ">
                                <div className="label">
                                    <span className="label-text font-raleway">Coffee Name</span>
                                </div>
                                <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full md:w-1/2">
                                <div className="label">
                                    <span className="label-text font-raleway">Chef</span>
                                </div>
                                <input type="text" name="chef" defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full " />

                            </label>
                        </div>
                        {/* supplier row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4 md:w-1/2 ">
                                <div className="label">
                                    <span className="label-text"> Supplier Name</span>
                                </div>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier Name" className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full md:w-1/2">
                                <div className="label">
                                    <span className="label-text">Taste </span>
                                </div>
                                <input type="text" name="taste" defaultValue={taste} placeholder="Coffee taste " className="input input-bordered w-full " />

                            </label>
                        </div>
                        {/* Category row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4 md:w-1/2 ">
                                <div className="label">
                                    <span className="label-text"> Category</span>
                                </div>
                                <input type="text" name="category" defaultValue={category} placeholder="Coffee category " className="input input-bordered w-full " />
                            </label>

                            <label className="form-control w-full md:w-1/2">
                                <div className="label">
                                    <span className="label-text">Details</span>
                                </div>
                                <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full " />

                            </label>
                        </div>
                        {/* photo  row */}
                        <div className="md:flex mb-6">
                            <label className="form-control w-full  mr-4  ">
                                <div className="label">
                                    <span className="label-text"> Photo</span>
                                </div>
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter Photo url " className="input input-bordered w-full " />
                            </label>
                        </div>
                    </div>
                    <input className="btn bg-[#D2B48C] btn-block" type="submit" value="Update Coffee" />
                </form>
            </div>
        </div>
    );
};

export default Updatecoffee;