import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { clearContacts } from "../../redux/contacts/slice";

import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearContacts());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.greeting}>Welcome, {user.name}</p>
      <button className={s.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
