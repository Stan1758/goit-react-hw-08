import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => (
  <nav className={s.nav}>
    <NavLink
      to="/register"
      className={({ isActive }) =>
        isActive ? `${s.link} ${s.active}` : s.link
      }
    >
      Register
    </NavLink>
    <NavLink
      to="/login"
      className={({ isActive }) =>
        isActive ? `${s.link} ${s.active}` : s.link
      }
    >
      Login
    </NavLink>
  </nav>
);

export default AuthNav;
