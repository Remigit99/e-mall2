import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import { Provider } from "react-redux";
import { store } from "./app/store";

const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  );
};

export default Layout;
