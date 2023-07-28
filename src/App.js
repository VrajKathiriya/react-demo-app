import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import User from "./components/User";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/"> HOME </NavLink>
        <NavLink to="/about"> ABOUT </NavLink>
        <NavLink to="/contact"> CONTACT </NavLink>
        <NavLink to="/user"> USER </NavLink>
      </div>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user" element={<User name="vraj" role="student" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
