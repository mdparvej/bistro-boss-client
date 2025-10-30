import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const ManegeItems = () => {
    const [menu] = useMenu();    
    const secureAxios = useAxios();
    const hanldeDelete = item => {
      console.log(item);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          const res = await secureAxios.delete(`/menu/${item._id}`)
          console.log(res.data);
          // if(res.data.deletedCount > 0){
          //   Swal.fire({
          //     position: "top-end",
          //     icon: "success",
          //     title: `Your work has been saved${item.name}`,
          //     showConfirmButton: false,
          //     timer: 1500
          //   });
          // } 
        }
      });
    }
  return (
    <div>
      <SectionTitle
        titleHead={"Manage All Items"}
        titleBody={"Hurry up"}
      ></SectionTitle>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black">
              <th>#</th>
              <th>Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                menu?.map((item,index) => <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <th>
                  <Link to={`/dashboard/updateitem/${item._id}`}><button className="btn btn-primary btn-lg" ><FaEdit></FaEdit></button></Link>
                </th>
                <th>
                  <button className="btn btn-success btn-lg" onClick={() => hanldeDelete(item)}><FaTrash></FaTrash></button>
                </th>
              </tr>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManegeItems;
