import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContex } from "../../../AuthProvider/AuthProvider";

const UserChoice = () => {
  let { user } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const FoodName = form.FoodName.value;
    const FoodCategory = form.FoodCategory.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const countryName = form.countryName.value;
    const quantity = form.quantity.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;

    const FoodData = {
      FoodName,
      FoodCategory,
      shortDescription,
      price,
      countryName,
      quantity,
      userEmail,
      userName,
      photoUrl
    };

    console.log(FoodData);

    fetch("https://taste-trove-server-sigma.vercel.app/userChoice", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(FoodData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Food Added Successfully",
            icon: "success",
            confirmButtonText: "Exit"
          });
          form.FoodName.value = "";
          form.FoodCategory.value = "";
          form.shortDescription.value = "";
          form.price.value = "";
          form.countryName.value = "";
          form.quantity.value = "";
        //   form.userEmail.value = "";
        //   form.userName.value = "";
          form.photoUrl.value = "";
        }
      });
  };

  return (
    <>
      <div className="container mx-auto">
        
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            
            {/* 2nd row */}
            <div className="flex gap-x-4 mb-4">
              {/* item name */}
              <div className="w-1/2 ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Image url</span>
                  </div>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Image url type here"
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
            <div className="flex gap-x-4 mb-4">
              {/* Short description */}
              <div className="w-full ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Feedback</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered"
                    name="shortDescription"
                    placeholder="Write your Feedback here."
                  ></textarea>
                </label>
              </div>
            </div>

            <input type="submit" className="btn btn-block" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default UserChoice;
