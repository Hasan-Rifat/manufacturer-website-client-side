import AddAProduct from "../Dashboard/AddAProduct";
import AddAReview from "../Dashboard/AddAReview";
import AllUsers from "../Dashboard/AllUsers";
import Dashboard from "../Dashboard/Dashboard";
import ManageAllOrders from "../Dashboard/ManageAllOrders";
import ManageProducts from "../Dashboard/ManageProducts";
import MyOrders from "../Dashboard/MyOrders";
// import Order from "../Order/Order";
import Profile from "../Profile/Profile";

export const PrivateRoutes = [
  { path: "/myorders", name: "MyOrders", Component: MyOrders },
  { path: "/addreview", name: "AddAReview", Component: AddAReview },
  { path: "/profile", name: "Profile", Component: Profile },
  // { path: "order/:id", name: "Order", Component: Order },
];
