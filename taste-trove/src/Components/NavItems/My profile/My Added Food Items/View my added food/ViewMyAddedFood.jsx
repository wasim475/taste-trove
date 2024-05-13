import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewMyAddedFood = ({ myFood, myFoods, setMyFoodDatas }) => {
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
  } = myFood;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://taste-trove-server-sigma.vercel.app/foods/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            const ResidualFood = myFoods.filter((myfood) => myfood._id !== _id)
            setMyFoodDatas(ResidualFood)
        }

          });
      }
    });
  };
  return (
    <div className="border-2  p-2 rounded-lg mb-10">
      <section>
        <div>
          <img className="rounded-lg" src={photoUrl} alt="Image" />
        </div>
      </section>
      <section className="text-center">
        <h1 className="text-2xl font-bold mb-3 mt-3 font-playfair">
          {FoodName}
        </h1>
        <p className="text-xs text-red-500 mb-2">
          Owner:{" "}
          <span className="font-semibold text-purple-900">{userName}</span>
        </p>
        <p className="mb-6">{shortDescription}</p>
        <div className="flex justify-between mb-2">
          <p>
            Price:
        <span className="text-xl font-bold text-red-600 font-worksans">
              ${price}
            </span>
          </p>
          <p className="flex items-center gap-x-2">
            Quantity: {quantity}
          </p>
        </div>
        <div className="text-center">
          <Link to={`/allFoods/${_id}`}>
            <button className="border-2 rounded-lg px-2 py-1 hover:border-green-600 hover:bg-white  hover:text-green-600 bg-green-600 font-semibold text-white">
              View
            </button>
          </Link>

          <button
            onClick={() => handleDelete(_id)}
            className="border-2 rounded-lg px-2 py-1 hover:border-red-500 hover:bg-white  hover:text-red-500 bg-red-500 font-semibold text-white"
          >
            Delete
          </button>

          <Link to={`/updateFoodInfo/${_id}`}>
            <button className="border-2 rounded-lg px-2 py-1 hover:border-red-500 hover:bg-white  hover:text-red-500 bg-red-500 font-semibold text-white">
              Update
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ViewMyAddedFood;
