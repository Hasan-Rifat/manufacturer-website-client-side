import AddAProduct from "../Dashboard/AddAProduct";
import AddAReview from "../Dashboard/AddAReview";
import AllUsers from "../Dashboard/AllUsers";
import Dashboard from "../Dashboard/Dashboard";
import ManageAllOrders from "../Dashboard/ManageAllOrders";
import ManageProducts from "../Dashboard/ManageProducts";
import MyOrders from "../Dashboard/MyOrders";
import Profile from "../Profile/Profile";

export const PrivateRoutes = [
  { path: "/dashboard", name: "Dashboard", Component: Dashboard },
  { path: "/myorders", name: "MyOrders", Component: MyOrders },
  { path: "/addreview", name: "AddAReview", Component: AddAReview },
  { path: "/profile", name: "Profile", Component: Profile },
];

export const AdminRoutes = [
  {
    path: "/manageallorders",
    name: "ManageAllOrders",
    Component: ManageAllOrders,
  },

  { path: "/addaproduct", name: "AddAProduct", Component: AddAProduct },
  { path: "/allusers", name: "AllUsers", Component: AllUsers },
  {
    path: "/manageproducts",
    name: "ManageProducts",
    Component: ManageProducts,
  },
];
