import { FaAd, FaEnvelope, FaHome, FaSearch, FaUtensils } from "react-icons/fa";
import { FaCalendar, FaCartShopping, FaList, FaUser } from "react-icons/fa6";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex text-black">
            <div className="w-64 min-h-screen bg-amber-700">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                        <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems"><FaUtensils></FaUtensils>Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manegeitems"><FaList></FaList>Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageBookings"><FaCartShopping></FaCartShopping>Manage Booking</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/allUsers"><FaUser></FaUser>All users</NavLink>
                    </li>  
                        </>
                        :
                        <>
                            <li>
                        <NavLink to="/dashboard/userHome"><FaHome></FaHome>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/resevation"><FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory"><FaCalendar></FaCalendar>Payment History</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"><FaAd></FaAd>Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"><FaCartShopping></FaCartShopping>My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking"><FaList></FaList> Cart</NavLink>
                    </li> 
                        </>
                    }
                    {/* shared nav links */}
                    <div className="divider text-red"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"><FaSearch></FaSearch>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact"><FaEnvelope></FaEnvelope>Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* deshboard content */}
            <div className="flex-1 p-8 bg-gray-400">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;