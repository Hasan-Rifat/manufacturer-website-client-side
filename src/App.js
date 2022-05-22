import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminRequireAuth from "./Components/Shared/AdminRequireAuth";
import Navbar from "./Components/Shared/Navbar";
import { AdminRoutes, PrivateRoutes } from "./Components/Shared/PrivateRoutes";
import { PublicRoutes } from "./Components/Shared/PublicRoutes";
import UserRequireAuth from "./Components/Shared/UserRequireAuth";

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
        <Route element={<AdminRequireAuth />}>
          {AdminRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
