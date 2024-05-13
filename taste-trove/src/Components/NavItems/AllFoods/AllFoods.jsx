import { useLoaderData } from "react-router-dom";
import ViewAllFoods from "./ViewAllFoods";

const AllFoods = () => {

  const MyFoods = useLoaderData();
  const handleViewDetails = (singleCraft) => {
    console.log(singleCraft);
  };
  
  return (
    <>
      <div>
        <h1>total crafts data is:</h1>
      </div>
      <div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
        {
            MyFoods.map((MyFood,index)=>(
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
