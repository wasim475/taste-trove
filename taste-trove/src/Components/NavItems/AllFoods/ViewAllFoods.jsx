

import { Link } from "react-router-dom";
const ViewAllFoods = ({MyFood, handleViewDetails}) => {
    const {
        FoodName,
        FoodCategory,
        shortDescription,
        price,
        quantity,
        photoUrl,
        _id
      } = MyFood;
    return (
        <div className="border p-4 rounded-lg shadow-md">
        {/* section1 */}
            <section>
                <div>
                    <img className="rounded-lg" src={photoUrl} alt="Image"/>
                </div>
            </section>
        {/* section2 */}
        {/* <hr className="text-red-600 font-bold"/> */}
            <section>
                <h1 className="text-2xl font-semibold mb-3 mt-3">{FoodName}</h1>
                <p className="text-xs text-gray-400 mb-2">Category: <span className="font-semibold text-purple-900">{FoodCategory}</span></p>
               <div className="flex justify-between mb-2">
                    <p>Price: <br/> <span className="text-xl font-bold text-red-600 font-worksans">${price}</span></p>
                    <p className="flex items-center gap-x-2">Quantity: {quantity}</p>
               </div>
             <div className="text-center">
                <Link to={`/allFoods/${_id}`}>
                 <button onClick={()=>handleViewDetails(MyFood)} className="border-2 rounded-lg px-4 py-2 bg-green-600 font-semibold text-white">Details</button>
                </Link>
             </div>
                
            </section>
       
        </div>
    );
};

export default ViewAllFoods;