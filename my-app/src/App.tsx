import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Conta } from "./pages/Conta/Conta";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "./components/Layout";
import { ContaInfo } from "./pages/ContaInfo/ContaInfo";
import { createContext, AppContextProvider, Children } from "react";

interface IAppContext {
  user: string;
}

 export const AppContext = createContext({} as IAppContext);

const AppContextProvider = ({ children }: any) => {
  const user = "ana";
  return <AppContextProvider value={user}>{children}</AppContextProvider>;
};

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conta/:id" element={<Conta />} />
              <Route path="/infoconta" element={<ContaInfo />} />
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
