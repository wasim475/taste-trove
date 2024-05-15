import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContex } from "../../../../AuthProvider/AuthProvider";
import ViewMyAddedFood from "./View my added food/ViewMyAddedFood";



const MyAddedFoodItems = () => {
    const myFoods = useLoaderData()
    const [myFoodsDatas, setMyFoodDatas]= useState(myFoods)
    let {user} = useContext(AuthContex)
  
    return (
        <>
        <div>
            <div className="grid grid-cols-3 gap-3">
                {
                    myFoodsDatas.map((myFood,index)=>
                        myFood.userEmail===user.email
                    ?
                    <ViewMyAddedFood myFood ={myFood} myFoodsDatas={myFoodsDatas} setMyFoodDatas={setMyFoodDatas} key={index}></ViewMyAddedFood>
                    :
                    ""
                    
                    )
                }
            </div>
        </div>
        </>
    );
};

export default MyAddedFoodItems;