import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


const ViewFoodItems = ({FoodItem}) => {
    const {
        FoodName,
        FoodCategory,
        shortDescription,
        price,
        countryName,
        quantity,
        userEmail,
        userName,
        photoUrl,
        _id
      } = FoodItem;
    return (
        <div className="border-2 p-2 rounded-lg bg-gradient-to-r from-lime-400 to-lime-500">
                <section>
                    <div>
                        <img className="rounded-lg" src={photoUrl} alt="Image"/>
                    </div>
                </section>
               <section className="text-center md:text-left lg:text-left">
                <h1 className="text-2xl font-semibold mb-3 mt-3">{FoodName}</h1>
                <p className="text-xs text-red-400 mb-2">Category: <span className="font-semibold text-purple-900">{FoodCategory}</span></p>
        
               
                    <p>Price: <span className="text-xl font-bold text-red-600 font-worksans mb-2">${price}</span></p>
                   
            
             <div className="text-center mt-2">
                <Link to={`/allFoods/${_id}`}>
                 <button className="border-2 rounded-lg px-4 py-2 bg-green-600 font-semibold text-white">View Details</button>
                </Link>
             </div>
                
            </section>
        </div>
    );
};

export default ViewFoodItems;