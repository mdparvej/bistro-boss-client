
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import useAxios from '../../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const secureAxios = useAxios();
    const {data : users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await secureAxios.get('/users');
            return res.data;
        }
    });
    const handleMakeAdmin = user => {
        secureAxios.patch(`/users/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const handleDelete = user => {
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
                secureAxios.delete(`/users/${user._id}`)
              .then(res => {
                console.log(res);
                if(res.data.deletedCount){
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                }
              })
            }
          });
    }
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-gray-950">
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index) => <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    {
                        user.role === 'admin' ? 'admin' : 
                        <button onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-lg text-red-600 bg-gray-300">
                        <FaUserAlt></FaUserAlt>
                      </button>
                    }
                </td>
                <th>
                <button onClick={() => handleDelete(user)}
                      className="btn btn-ghost btn-lg text-red-600 bg-gray-300">
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                </th>
              </tr>)
        }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default AllUsers;