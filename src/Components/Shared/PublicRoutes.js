import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Login from "./Login";
import NoteFound from "./NoteFound";
import Register from "./Register";

export const PublicRoutes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/blogs", name: "Blogs", Component: Blogs },

  { path: "/login", name: "Login", Component: Login },
  { path: "/register", name: "Register", Component: Register },
  { path: "*", name: "NoteFound", Component: NoteFound },
];
