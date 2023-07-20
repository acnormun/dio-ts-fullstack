import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Conta } from "./pages/Conta/Conta";
import { ContaInfo } from "./pages/ContaInfo/ContaInfo";
import { useContext } from "react";
import { AppContext } from "./components/Context/AppContext";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
          <Route path="/conta/:id" element={isLoggedIn ?  <Conta /> : <Home/>} />
          <Route path="/infoconta" element={isLoggedIn ? <ContaInfo /> : <Home/>} />

    </Routes>
  );
};

export default MainRoutes;
