import { useEffect, useState } from "react"
import ViewRecentFood from "./ViewRecentFood"



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

  let {photoUrl,shortDescription,price, userName}=bennerData;
//   let {photoUrl,shortDescription,price}=bennerData

  return (
    <>
      <div className="container mx-auto mt-5">
      <div className="text-center mt-5 mb-5 ">
        <h1 className="text-xl lg:text-3xl font-worksans text-purple-500 font-semibold">Click on the Food to view details</h1>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <section className="p-4" >
          <h1 className="text-2xl lg:text-3xl font-bold font-playfair mb-4">Believe in Taste Trove</h1>
            <h1 className="font-semibold text-xl lg:text-2xl text-gray-500 font-worksans"><q>{price}</q></h1>
            <p className="mt-10 text-lg lg:text-xl font-worksans text-green-900 font-semibold">{shortDescription}</p>
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