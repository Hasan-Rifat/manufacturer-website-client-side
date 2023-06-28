import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [admin] = useAdmin(user);
  // console.log(admin);
  return (
    <section>
      <div className=" px-4">
        <div class="drawer drawer-mobile ">
          <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content flex  justify-center">
            {/* <!-- Page content here --> */}
            <Outlet />
            <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div class="drawer-side ">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu  bg-[#f9fafb] p-4 overflow-y-auto w-80 text-base-content">
              {/* <!-- Sidebar content here --> */}
              {admin && (
                <>
                  <li>
                    <Link
                      className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary my-4"
                      to="/dashboard"
                    >
                      Manage Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary my-4"
                      to="/dashboard/addaproduct"
                    >
                      Add A Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary my-4"
                      to="/dashboard/manageallorders"
                    >
                      Manage All orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary my-4"
                      to="/dashboard/allusers"
                    >
                      All Users
                    </Link>
                  </li>
                </>
              )}
              {!admin && (
                <>
                  <li>
                    <Link
                      className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary my-4"
                      to="/dashboard/myorders"
                    >
                      My orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="border-none hover:bg-secondary rounded-xl hover:text-white text-accent font-semibold px-8 py-3 bg-primary my-4"
                      to="/dashboard/addreview"
                    >
                      Add A Review
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
