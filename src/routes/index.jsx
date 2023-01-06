import Blog from "../pages/Blog";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Error from "../pages/Error";
import Register from "../pages/Register";
import { Routes, Route } from "react-router-dom";

function Authenticator() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default Authenticator;
