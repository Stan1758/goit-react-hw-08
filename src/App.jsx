import "./App.css";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "./redux/auth/selectors";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";
import { fetchContacts } from "./redux/contacts/operations";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  if (isRefreshing) {
    return <p style={{ padding: 20 }}>Refreshing user...</p>;
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route element={<RestrictedRoute />}>
            <Route path="register" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
