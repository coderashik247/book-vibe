import { Outlet } from "react-router";
import Container from "../components/Container/Container";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Container>
        <Navbar></Navbar>
      </Container>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
