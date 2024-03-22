import { Link } from "react-router-dom";


const Cart = ({cart}) => {
    const {id, Picture, Title, Price, Category, Category_bg, Card_bg, Text_button_bg } =
    cart || {};

    return (
        <div>

        <div style={{backgroundColor:Card_bg}} className="card card-side">
      <figure><img className="h-full" src={Picture} alt="Movie"/></figure>
    
      <div className="card-body">
      <div className="card-actions justify-start">
          <button  style={{ backgroundColor: Category_bg, color: Text_button_bg }} className="px-2 py-1 rounded-md">{Category}</button>
        </div>
        <h2 className="card-title text-[#0B0B0B]">{Title}</h2>
        <p style={{color: Text_button_bg }} >{Price}</p>
        <div className="card-actions justify-start">
         <Link to={`/cardDetails/${id}`}>
         <button style={{backgroundColor: Text_button_bg}} className="px-3 py-2 rounded-md text-white">View Details</button>
         </Link>
        </div>
      </div>
    </div>
    
    
            </div>
    );
};

export default Cart;