

import { useContext, useEffect, useState } from "react";
// import { AuthContex } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Purchase = () => {
    let { user } = useContext(AuthContex);
    
    const myPurchaseData = useLoaderData()
    const {photoUrl}= myPurchaseData

 console.log('my purchase data is', myPurchaseData);

  const handlePurchase = (e) => {
    // const PurseBtn = document.getElementById('PurseBtn')
    
    e.preventDefault();
    const form = e.target;
    const FoodName = form.FoodName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const purchaseDate = `${day}:${month}:${year}`;
    // console.log(purchaseDate);

    const purchasesData = {
      FoodName,
      price,
      quantity,
      userEmail,
      userName,
      purchaseDate,
      photoUrl
    };

    // console.log("Current date is",purchaseDate);

    fetch("https://taste-trove-server-sigma.vercel.app/purchases", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(purchasesData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("purchase data is:",data);
        if (data.insertedId && data.quantity>0) {
          Swal.fire({
            title: "Success!",
            text: "Food Purchases Successfully",
            icon: "success",
            confirmButtonText: "Close"
          })
          form.FoodName.value = "";
          form.price.value = "";
          form.quantity.value = "";
        }else{
            // PurseBtn.setAttribute("disabled")
            Swal.fire({
                title: "Error!",
                text: "Food Purchases Fail",
                icon: "success",
                confirmButtonText: "Close"
              })
        }
      });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-worksans mb-6">
            Food purchase Submission Form
          </h1>
          <p className="text-gray-500">
            Simply fill out the form below and purchase confirm your food order.
          </p>
        </div>
        <form onSubmit={handlePurchase}>
          <div className="p-10">
            {/* 1st row */}
            <div className="flex gap-x-4 mb-4 justify-center">
              {/* item name */}
              <div className="w-1/2 ml-4 ">
                <label className="form-control w-full">
                  <div className="label flex justify-center">
                    <span className="label-text">Food Name</span>
                  </div>
                  <input
                    type="text"
                    name="FoodName"
                    placeholder="Food Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* subcategory_Name */}
            </div>
            {/* 2nd row */}
            <div className="flex gap-x-4 mb-4">
              {/* item name */}
              
                <div className="w-1/2">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Quantity</span>
                    </div>
                    <input
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
            
              {/* Price */}
              <div className="w-1/2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Price</span>
                  </div>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* 3rd row */}
            <div className="flex gap-x-4 mb-4">
              {/* Processing time */}
              
              {/* Price */}
             
            </div>

            {/* 5th row */}
            <div className="flex gap-x-4 mb-4">
              {/* item name */}
              <div className="w-1/2 ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">User Email</span>
                  </div>
                  <input
                    type="text"
                    placeholder="User Email"
                    name="userEmail"
                    value={user.email}
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              {/* subcategory_Name */}
              <div className="w-1/2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">User Name</span>
                  </div>
                  <input
                    // type="text"
                    name="userName"
                    value={user.displayName}
                    readOnly
                    placeholder="User Name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
            {/* 6th row */}
            

            <input id="PurseBtn" type="submit" className="btn btn-block bg-red-400" value="Confirm Purchese" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Purchase;
