import { ChakraProvider, Box } from "@chakra-ui/react";
import { LoginCard } from "./components/LoginCard";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box padding='25px'>
          <LoginCard />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
