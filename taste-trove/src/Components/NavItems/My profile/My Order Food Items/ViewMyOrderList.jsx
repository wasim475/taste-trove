
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
const ViewMyOrderList = ({myOD,myOrderDatas,setMyOrderData}) => {
    const  {FoodName,price,quantity,userEmail,userName,photoUrl,_id,purchaseDate}= myOD

    const handleDelete = (id)=>{
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
              fetch(`https://taste-trove-server-sigma.vercel.app/purchases/${_id}`, {
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
                  const ResidualFood = myOrderDatas.filter((myfood) => myfood._id !== id)
                  setMyOrderData(ResidualFood)
              }
      
                });
            }
          });
    }
    return (
        <>
           <div className="overflow-x-auto">
  <table className="table">
  
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img className="rounded-full" src={photoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{FoodName}</div>
              <div className="text-sm opacity-50">Owner:{userName}</div>
            </div>
          </div>
        </td>
        <td>
         <h1 className="flex items-center"><TbCurrencyTaka className="font-bold text-lg"/>{price}</h1>
        </td>
        <td>Placed On<br/>{purchaseDate}</td>
        <th>
          <button onClick={()=>handleDelete(_id)} className="btn bg-red-600 text-white btn-xs">Delete</button>
        </th>
      </tr>
      
      {/* row 4 */}
      
    </tbody>
    {/* foot */}
    
    
  </table>
</div> 
        </>
    );
};

export default ViewMyOrderList;