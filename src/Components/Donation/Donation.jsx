import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem("favorites"));

        if (donationItems) {
            setDonations(donationItems);
        } else {
            setNotFound(true);
        }
    }, []);

    const handleDeleteAll = () => {
        localStorage.removeItem("favorites");
        setDonations([]);
    };



    return (
        <div>
            {notFound ? (
                <p className="flex justify-center items-center h-[300px] text-4xl text-black">
                    No Data Found
                </p>
            ) : (
                <div>
                      {donations.length > 0 && (
                        <button
                            className="block mx-auto my-4 py-2 px-4 bg-red-500 text-white rounded-md"
                            onClick={handleDeleteAll}
                        >
                            Delete All
                        </button>
                    )}

                    {donations.length > 4 && (
                        <button
                            className="block mx-auto my-4 py-2 px-4 bg-blue-500 text-white rounded-md"
                            onClick={()=>setShowAll(!showAll)}
                        >
                            {showAll ? "Show less" : "See all"}
                        </button>
                    )}
                    {showAll ? (
                        <div className="grid grid-cols-2 gap-5">
                            {donations.map((cart) => (
                                <Cart key={cart.id} cart={cart}></Cart>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-5">
                            {donations.slice(0, 4).map((cart) => (
                                <Cart key={cart.id} cart={cart}></Cart>
                            ))}
                        </div>
                    )}
                
                </div>
            )}
        </div>
    );
};

export default Donation;
