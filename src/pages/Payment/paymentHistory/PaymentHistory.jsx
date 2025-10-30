import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();
    const {data : payments} = useQuery({
        queryKey : ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`);

            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text3-xl">Totla Payments : {payments?.length}</h2>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black">
        <th>#</th>
        <th>Price</th>
        <th>Transation Id</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {payments?.map((payment,index) => <tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>Blue</td>
      </tr>)}
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default PaymentHistory;