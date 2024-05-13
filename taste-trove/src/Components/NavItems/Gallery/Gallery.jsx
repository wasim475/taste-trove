import { Link, useLoaderData } from "react-router-dom";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import ViewGalleryItems from "./ViewGalleryItems";
import { useContext } from "react";
import UserChoice from "./UserChoice";

const Gallery = () => {

  const AllFoods = useLoaderData();
  let { user } = useContext(AuthContex);
  return (
    <div className="py-6 dark:bg-gray-100 dark:text-gray-900">


      <section className="bg-galleryImg bg-center p-20 text-center">
        <h1 className="text-white mb-10">
          Share Your Feedback With Us. Click on the Add button and share your
          exprerience.
        </h1>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
       <Link to={
        user? '': '/userChoice'
       }>
       <button
          className="btn"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Add
        </button>
       </Link>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <UserChoice></UserChoice>
            </form>
          </div>
        </dialog>
      </section>


      <section>
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 grid-container">
          {AllFoods.map((Food, index) => (
            <ViewGalleryItems
              key={index}
              Food={Food}
              user={user}
            ></ViewGalleryItems>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
