
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { myContex } from "../../ContexApi/ContexApi";

const NavBar = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const {user,logOut} = useContext(myContex);
  console.log(isAdmin,'from admin');
  const handleLogOut = () => {
      logOut()
      .then(() => {})
  }
    const navOptions = <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="menu">Menu</Link></li>
              <li><Link to={`order/salad`}>Order Food</Link></li>
              <li><Link to={`secret`}>secret</Link></li>
              {
                user && isAdmin && <li><Link to='/dashboard/adminHome'>Dashboard 1</Link></li>
              }
              {
                user && !isAdmin && <li><Link to='/dashboard/userHome'>Dashboard</Link></li>
              }
              {
                user ? <>
                  <Link to="/dashboard/cart">
                    <button className="btn btn-ghost">
                    <FaShoppingCart/>
                      <div className="badge badge-secondary">+{cart.length}</div>
                  </button>
                  </Link>
                  <button onClick={handleLogOut}>Logout</button>
                </> :
                <>
                  <li><Link to={`/signin`}>Signin</Link></li>
                  <li><Link to={`/login`}>Login</Link></li>
                </>
              }
              
    </>
  return (
    <>
      <div className="navbar fixed z-10 bg-slate-900 max-w-screen-xl text-white opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <img src={user?.photoURL} alt="" srcSet="" className="w-20 absolute rounded-full"/>
        </div>
      </div>
    </>
  );
};

export default NavBar;
