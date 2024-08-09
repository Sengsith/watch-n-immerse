import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <main id="outlet">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
