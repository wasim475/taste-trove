import { useContext } from "react";
import { AuthContex } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateMyFoodInfo = () => {
  let { user } = useContext(AuthContex);
  const myFoods = useLoaderData()
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
  } = myFoods;

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

    const updateFoodData = {
      FoodName,
      FoodCategory,
      shortDescription,
      price,
      countryName,
      quantity,
      userEmail,
      userName,
      photoUrl,
    };

    

    fetch(`https://taste-trove-server-sigma.vercel.app/foods/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updateFoodData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Food Info Update Successfully",
            icon: "success",
            confirmButtonText: "Close"
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
        <div className="text-center px-20">
          <h1 className="text-3xl font-Poppins mb-6">
            Food Item info Update Form
          </h1>
          <p className="text-gray-500">
            Simply Check out the form below to Modify Food Information.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="p-10">
            {/* 1st row */}
            <div className="flex gap-x-4 mb-4">
              {/* item name */}
              <div className="w-1/2 ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Food Name</span>
                  </div>
                  <input
                    type="text"
                    name="FoodName"
                    placeholder="Food Name"
                    className="input input-bordered w-full"
                    defaultValue={FoodName}
                  />
                </label>
              </div>
              {/* subcategory_Name */}
              <div className="w-1/2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Food Category</span>
                  </div>
                  <input
                    type="text"
                    name="FoodCategory"
                    placeholder="Food Category"
                    className="input input-bordered w-full"
                    defaultValue={FoodCategory}
                  />
                </label>
              </div>
            </div>
            {/* 2nd row */}
            <div className="flex gap-x-4 mb-4">
              {/* item name */}
              <div className="w-1/2 ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">photoUrl</span>
                  </div>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="photoUrl"
                    className="input input-bordered w-full"
                    defaultValue={photoUrl}
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
                    defaultValue={price}
                  />
                </label>
              </div>
            </div>
            {/* 3rd row */}
            <div className="flex gap-x-4 mb-4">
              {/* Processing time */}
              <div className="w-1/2 ml-4">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text">Food Origin</span>
                  </div>
                  <input
                    type="text"
                    name="countryName"
                    placeholder="Food Origin (Country)"
                    className="input input-bordered w-full"
                    defaultValue={countryName}
                  />
                </label>
              </div>
              {/* Price */}
              <div className="w-1/2">
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
                      defaultValue={quantity}
                    />
                  </label>
                </div>
              </div>
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
                    defaultValue={userEmail}
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
                    <span className="label-text">Short Description</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered"
                    name="shortDescription"
                    placeholder="Short Description"
                    defaultValue={shortDescription}
                  ></textarea>
                </label>
              </div>
            </div>

            <input type="submit" className="btn btn-block" value="Update" />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateMyFoodInfo;
