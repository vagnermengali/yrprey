import Blog from "../pages/Blog";
import Shop from "../pages/Shop";
import Home from "../pages/Home";
import Login from "../pages/Login";
import About from "../pages/About";
import Error from "../pages/Error";
import Register from "../pages/Register";
import Collections from "../pages/Shop/Collections";
import { Routes, Route, Navigate } from "react-router-dom";
import SmoothScroll from "../components/SmoothScroll";

function Authenticator() {
  return (
    <SmoothScroll>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/shop/collection/:id" element={<Collections />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="*"
          element={<Navigate to="/error" replace={true} />}
        ></Route>
      </Routes>
    </SmoothScroll>
  );
}

export default Authenticator;
