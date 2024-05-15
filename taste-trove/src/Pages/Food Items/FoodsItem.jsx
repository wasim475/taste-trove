import { useEffect, useState } from "react";
import ViewFoodItems from "./ViewFoodItems";


const FoodItem = () => {
const [FoodItems, setFoodItems]= useState([])

useEffect(()=>{

    fetch("https://taste-trove-server-sigma.vercel.app/foods")
    .then(res=> res.json())
    .then(resData=>setFoodItems(resData))
 
},[])

let firstSixFood = FoodItems.slice(-6).reverse()

console.log(firstSixFood);
        

    return (
        <>
            <div className="container mx-auto mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3">
                    {
                        firstSixFood.map((FoodItem, index)=>(
                            <ViewFoodItems FoodItem={FoodItem} key={index}></ViewFoodItems>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default FoodItem;