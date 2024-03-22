import { json, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const CardDetails = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    console.log(details, idInt);
    const newDetails = details.find(detail => detail.id == idInt)


    const handleDonation = () =>{

        const addedDonation = [];
        const donationItems = JSON.parse(localStorage.getItem('favorites'));
        if(!donationItems){
            addedDonation.push(newDetails)
            localStorage.setItem('favorites',JSON.stringify(addedDonation))
            swal("Donation Added Successful!", "You clicked the button!", "success"); 
        }
        else{

          const isExit = donationItems.find(donate => donate.id == idInt)

          if(!isExit){
            addedDonation.push(...donationItems,newDetails)
            localStorage.setItem('favorites', JSON.stringify(addedDonation))
            swal("Donation Added Successful!", "You clicked the button!", "success"); 
          }

          else{
            swal("Soory Already added this donation", "You clicked the button!", "Faild!!"); 
          }




           

        }


    }
   

    return (
        <div className="py-12">
        <div className="card max-w-screen-xl h-[350px] mx-auto bg-gray-700">
        <figure><img className="w-full"  src={newDetails.Picture} alt="Shoes" />
        <div className="absolute h-[85px] w-full bg-gray-950 opacity-60 bottom-0 left-0"></div>


      <button onClick={handleDonation}  style={{backgroundColor: newDetails.Text_button_bg}} className="px-2 py-2 absolute left-6 bottom-5 text-white">
        Donate {newDetails.Price}
        </button>


        </figure>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-[#0B0B0B] py-6">{newDetails.Title}</h2>
        <p>{newDetails.Description}</p>
      </div>

 
     </div>

    );
};

export default CardDetails;