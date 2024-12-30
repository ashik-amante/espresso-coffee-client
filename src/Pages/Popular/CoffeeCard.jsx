

const CoffeeCard = ({ coffee }) => {
    console.log(coffee);
    const { name, chef, supplier, taste, category, details, photo, email } = coffee
    return (

        <div className="card card-side  shadow-xl">
            <figure>
                <img
                    className="w-40 rounded mr-4"
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className=" flex w-full justify-between items-center ">
                <div className=" ml-6 w-full">
                    <p className="font-semibold">Name: <span className="font-normal"> {name}</span></p>
                    <p className="font-semibold">Chef: <span className="font-normal"> {chef}</span></p>
                    <p className="font-semibold">Taste: <span className="font-normal"> {taste}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2 mr-4">
                        <button className="btn ">View</button>
                        <button className="btn ">Cart</button>
                       
                    </div>
                </div>
            </div>
        </div>



        // <div className="grid grid-cols-3 border-4 p-2">
        //     <div className="grid col-span-1">
        //         <img className="w-32 rounded mr-4" src={photo} alt="" />
        //     </div>
        //     <div className="grid col-span-1">
        //         <div>
        //             <p className="font-semibold">Name: <span className="font-normal"> {name}</span></p>
        //             <p className="font-semibold">Chef: <span className="font-normal"> {chef}</span></p>
        //             <p className="font-semibold">Taste: <span className="font-normal"> {taste}</span></p>
        //         </div>
        //     </div>
        //     <div className="grid col-span-1">
        //         <div className="join join-vertical">
        //             <button className=" join-item">view</button>
        //             <button className="btn join-item">Cart</button>
        //             <button className="btn join-item">Button</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default CoffeeCard;