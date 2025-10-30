import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import { FaBook, FaDollarSign, FaLaptop, FaUser } from "react-icons/fa6";
const AdminHome = () => {
  const { user } = useAuth();
  const secureAxios = useAxios();
  const { data : stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await secureAxios.get("admin-stats");
      return res.data;
    },
  });
  console.log(stats);
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome</span>
        {user?.dispalyName ? user.dispalyName : "Back"}
        <div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaDollarSign className="text-5xl"></FaDollarSign>
              </div>
              <div className="stat-title">Revenue</div>
              <div className="stat-value">{stats?.revenue}</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUser></FaUser>
              </div>
              <div className="stat-title">Users</div>
              <div className="stat-value">{stats?.users}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaBook></FaBook>
              </div>
              <div className="stat-title">Orders</div>
              <div className="stat-value">{stats?.orders}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaLaptop></FaLaptop>
              </div>
              <div className="stat-title">Menu Items</div>
              <div className="stat-value">{stats?.menuItems}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
};

export default AdminHome;
