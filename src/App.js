import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddAProduct from "./Components/Dashboard/AddAProduct";
import AddAReview from "./Components/Dashboard/AddAReview";
import AllProducts from "./Components/Dashboard/AllProducts";
import AllUsers from "./Components/Dashboard/AllUsers";
import Dashboard from "./Components/Dashboard/Dashboard";
import ManageAllOrders from "./Components/Dashboard/ManageAllOrders";
import Order from "./Components/Order/Order";
import Navbar from "./Components/Shared/Navbar";
import { PrivateRoutes } from "./Components/Shared/PrivateRoutes";
import { PublicRoutes } from "./Components/Shared/PublicRoutes";
import UserRequireAuth from "./Components/Shared/UserRequireAuth";
import "react-toastify/dist/ReactToastify.css";
import MyOrders from "./Components/Dashboard/MyOrders";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {PublicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />}></Route>
        ))}
        <Route element={<UserRequireAuth />}>
          {PrivateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>
        {/* <Route element={}></Route> */}

        {/* dashboard */}

        <Route
          path="/dashboard"
          element={
            <UserRequireAuth>
              <Dashboard />
            </UserRequireAuth>
          }
        >
          <Route index element={<AllProducts />} />
          <Route path="manageallorders" element={<ManageAllOrders />} />
          <Route path="addaproduct" element={<AddAProduct />} />
          <Route path="allusers" element={<AllUsers />} />
          <Route path="myorders" element={<MyOrders />} />
          <Route path="addreview" element={<AddAReview />} />
        </Route>

        {/* order page  */}
        <Route
          path="/order/:id"
          element={
            <UserRequireAuth>
              <Order />
            </UserRequireAuth>
          }
        />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
