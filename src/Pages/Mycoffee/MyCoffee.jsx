import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCoffee = () => {
    const { user } = useContext(AuthContext)
    console.log(user.email);
    const [item, setItem] = useState([])
    console.log(item);


    // fetch data for particular user
    useEffect(() => {
        fetch(`http://localhost:5000/coffees/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItem(data)
            })
    }, [user])

    // delete specific coffee
    const handleDdelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Coffee has been deleted.",
                            icon: "success"
                        });
                        const remaining = item.filter(coff => coff._id !== id)
                        setItem(remaining)
                    })

            }
        });

    }
    // update coffee

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="font-rancho text-4xl text-center mb-20 mt-10">My Added coffee : {item.length}</h1>
            <div className="grid grid-cols-2 gap-4 ">
                {
                    item.map(coffee => <div key={coffee._id}>

                        {/* coffee card */}
                        <div className="card card-side  shadow-xl">
                            <figure>
                                <img
                                    className="w-40 rounded mr-4"
                                    src={coffee.photo}
                                    alt="Movie" />
                            </figure>
                            <div className=" flex w-full justify-between items-center ">
                                <div className=" ml-6 w-full">
                                    <p className="font-semibold">Name:  <span className="font-normal"> {coffee.name}</span></p>
                                    <p className="font-semibold">Chef: <span className="font-normal"> {coffee.chef}</span></p>
                                    <p className="font-semibold">Taste: <span className="font-normal"> {coffee.taste}</span></p>
                                </div>
                                <div className="card-actions justify-end">
                                    <div className="join join-vertical space-y-2 mr-4">
                                        <Link to={`/details/${coffee._id}`}>
                                            <button className="btn ">View</button>
                                        </Link>
                                        <Link to={`/updateCoffee/${coffee._id}`}>
                                            <button className="btn ">Update</button>
                                        </Link>
                                        <button onClick={() => handleDdelete(coffee._id)} className="btn ">Delete</button>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCoffee;