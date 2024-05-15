import { useLoaderData } from "react-router-dom";
import ViewAllFoods from "./ViewAllFoods";
import { useState } from "react";
import Swal from "sweetalert2";

const AllFoods = () => {
  const [userInput, setuserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const MyFoodsData = useLoaderData();
  const [MyFoods, setMyFoods]= useState(MyFoodsData)
  const handleViewDetails = (singleCraft) => {
    
  };

  const handleSearch = ()=>{
    const results = MyFoods.filter(food =>
      food.FoodName.toLowerCase().includes(userInput.toLowerCase())
    );
    if(results.length===0){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No Search Found!"
      });
    }else{
      setSearchResults(results);
      
    }

  }
  
  return (
    <>
      <div className="bg-AllFoodsBanner bg-cover mb-10 mt-10">
      <div className="flex justify-end px-10 mb-5">
        <label className="input input-bordered flex items-center gap-2 mt-5">
          <input onChange={(e) => setuserInput(e.target.value)} type="text" className="" placeholder="Search" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      <button onClick={handleSearch} className="rounded-xl px-5 font-bold border border-green-500 text-green-500 hover:bg-green-500 hover:text-white ">Search</button>
      </label>
      </div>
        <div className="text-center p-20">
        <h1 className="text-3xl font-bold font-Lora text-white bg-[#00000019] rounded-full">Tempting Tastes! Irresistible Flavors Await</h1>
        <p className="mt-3 bg-[#00000019] rounded-full text-gray-100">Indulge your senses with our Tempting Tastes section, where you'll find a tempting array of mouthwatering dishes guaranteed to satisfy even the most discerning palate</p>

        </div>
      </div>
      <div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {userInput===""
        ?
            MyFoods.map((MyFood,index)=>(
                <ViewAllFoods key={index} handleViewDetails={handleViewDetails} MyFood={MyFood}></ViewAllFoods>
            ))
          :
          searchResults.map((MyFood,index)=>(
                <ViewAllFoods key={index} handleViewDetails={handleViewDetails} MyFood={MyFood}></ViewAllFoods>
            ))
        }
          {/* {MyFoods.map((MyFood, index) => (
            <ViewAllFoods
              handleViewDetails={handleViewDetails}
              MyFood={MyFood}
              key={index}
            ></ViewAllFoods>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default AllFoods;
