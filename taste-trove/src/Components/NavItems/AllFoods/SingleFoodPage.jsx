import { Link, useLoaderData, useParams } from "react-router-dom";



const SingleFoodPage = () => {
    const MyFoods = useLoaderData()
    let {id}= useParams()
    let MyFood = MyFoods.find((myF)=>myF._id === id)
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
      } = MyFood;

    

    return (
     <>
        <div className="container mx-auto">
            <div className="flex gap-x-4 p-4">
                <section className="w-1/2 border-2 flex justify-center p-2 rounded-xl">
                    <img className="h-[80vh] rounded-lg w-full" src={photoUrl}/>
                </section>
                <section>
                    <h1 className="text-3xl font-playfair font-bold mb-2">{FoodName}</h1>
                    <p className="text-xs text-gray-400 mb-2">Made By: <span className="font-semibold text-purple-500">{userName}</span></p>
                    <p className="mb-3">Price: <span className="text-3xl font-bold text-red-600 font-worksans"><br/>${price}</span></p>
                    <p className="flex items-center gap-x-2 mb-2">Quantity: {quantity}</p>
                     <p className="mb-2">FoodCategory: {FoodCategory}</p>
                     <p className="mb-2">Food Origin: {countryName}</p>
                   
                        <p className="mb-3 text-gray-400 font-semibold">{shortDescription}</p>
                        <p className="">Contact with Food maker: <span className="font-medium">{userEmail}</span></p>

                       <div className="mt-10 flex gap-x-3">
                           <Link to={`/purchase/${_id}`}> <button className="border-2 rounded-lg px-4 py-2 bg-yellow-600 font-semibold text-white">Purchase</button></Link>
                            
                       </div>

                </section>
            </div>
        </div>
     </>
    );
};

export default SingleFoodPage;