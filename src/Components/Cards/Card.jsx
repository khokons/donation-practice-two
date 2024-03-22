import { Link } from "react-router-dom";


const Card = ({card}) => {
    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg } =
    card || {};

    return (
        <div>

        <Link to={`/cardDetails/${id}`}>
        
        <div style={{ backgroundColor: Card_bg }} class="card shadow-xl">
           <figure>
             <img src={Picture} alt="Shoes" />
           </figure>
           <div className="py-3 px-16 lg:px-4">
             <button
               style={{ backgroundColor: Category_bg, color: Text_button_bg }}
               className="px-2 py-1 rounded-md"
             >
               {Category}
             </button>
             <h2
               style={{ color: Text_button_bg }}
               className="font-sans text-xl font-light py-2"
             >
               {Title}
             </h2>
           </div>
         </div>
        
        </Link>
   
   
       </div>



    );
};

export default Card;