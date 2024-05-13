import { useContext } from "react";
import { AuthContex } from "../../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddFoodItem = () => {
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

    fetch("https://taste-trove-server-sigma.vercel.app/foods", {
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
        <div className="text-center">
          <h1 className="text-3xl font-worksans mb-6">
            Food Item Submission Form
          </h1>
          <p className="text-gray-500">
            Simply fill out the form below to added your food item.
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
                  ></textarea>
                </label>
              </div>
            </div>

            <input type="submit" className="btn btn-block" value="Add" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddFoodItem;
