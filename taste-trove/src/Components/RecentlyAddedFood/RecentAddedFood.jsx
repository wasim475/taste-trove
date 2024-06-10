import { useEffect, useState } from "react"
import ViewRecentFood from "./ViewRecentFood"
import { FaBangladeshiTakaSign } from "react-icons/fa6";




const RecentAddedFood = () => {
    let [bennerData, setBannerData] =useState([])
  let [Top3Foods, setTop3Foods] =useState([])


  useEffect(()=>{
      fetch('https://taste-trove-server-sigma.vercel.app/foods')
         .then(res=> res.json())
          .then(resData=>setTop3Foods(resData))
  },[])
  let firsFourFood = Top3Foods.slice(-4).reverse()

  let handleBanner = (mdata)=>{
    setBannerData(mdata)
  }

  let {photoUrl,shortDescription,price,FoodName, userName}=bennerData;
//   let {photoUrl,shortDescription,price}=bennerData

  return (
    <>
      <div className="container mx-auto mt-20 mb-14 bg-[#00000019] p-2 rounded-lg">
      <div className="text-center mt-5 mb-5 ">
        <h1 className="text-xl lg:text-3xl font-worksans text-purple-500 font-semibold">Click on the Food to view details</h1>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <section className="p-4" >
          <h1 className="text-2xl lg:text-3xl font-bold font-Lora mb-4">Trust in Taste Trove</h1>
            <h1 className="font-semibold text-xl lg:text-2xl font-Lora">{FoodName}</h1>
            <h1 className="font-semibold text-xl lg:text-2xl text-red-500 font-Poppins flex items-center mt-2"> <FaBangladeshiTakaSign/>{price}</h1>
            <p className="mt-3 mb-3 text-lg lg:text-xl font-Poppins text-green-900 font-semibold">{shortDescription}</p>
            <p>Added by: {userName}</p>
          </section>
          <section className="border-2 border-red-500 p-4 rounded-md">
            <img src={photoUrl}/>
          </section>
          <section className='grid grid-cols-2 gap-2'>
            {
                firsFourFood.map((Food,index)=> <ViewRecentFood key={index} Food={Food} handleBanner={handleBanner}></ViewRecentFood>)
            }
          </section>
        </div>
      </div>
    </>
  )
}

export default RecentAddedFood;