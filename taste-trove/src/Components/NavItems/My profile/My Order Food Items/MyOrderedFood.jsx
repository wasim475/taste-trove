import { useEffect, useState } from "react";
import ViewMyOrderList from "./ViewMyOrderList";


const MyOrderedFood = () => {
    const [myOrderDatas, setMyOrderData] = useState([])

    useEffect(()=>{

        fetch("https://taste-trove-server-sigma.vercel.app/purchases")
        .then(res=> res.json())
        .then(resData=>setMyOrderData(resData))
     
    },[])
    return (
        <>
            <div>
                <section className="mb-10">
                    <div className="text-center">
                        <h1>Your Ordered List below</h1>
                    </div>
                </section>
                <section>
                    {
                        myOrderDatas.map((myOD,index)=>(
                            <ViewMyOrderList key={index} myOD={myOD} myOrderDatas={myOrderDatas} setMyOrderData={setMyOrderData} ></ViewMyOrderList>
                        ))
                    }
                </section>
            </div>
        </>
    );
};

export default MyOrderedFood;