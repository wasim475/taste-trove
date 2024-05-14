import { useContext } from "react";
import { AuthContex } from "../../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const UserChoice = () => {
  let { user } = useContext(AuthContex);
  

  const handleSubmit = (e) => {
    console.log('hello bhai');
    e.preventDefault();
    const form = e.target;
    const feedBack = form.feedBack.value;
    const userName = form.userName.value;
    const photoUrl = form.photoUrl.value;

    const galleryData = {
      feedBack,
      userName,
      photoUrl
    };

    console.log(galleryData);

    fetch("https://taste-trove-server-sigma.vercel.app/userChoice", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(galleryData)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast("Food Added Successfully")
          // Swal.fire({
          //   title: "Success!",
          //   text: "Food Added Successfully",
          //   icon: "success",
          //   confirmButtonText: "Exit"
          // });
          form.feedBack.value = "";
          form.photoUrl.value = "";
        }else{
            console.log('error khaichi');
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
                    name="feedBack"
                    placeholder="Write your Feedback here."
                  ></textarea>
                </label>
              </div>
            </div>

            <input type="submit" className="btn btn-block" value="Submit" />
            <ToastContainer></ToastContainer>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserChoice;
