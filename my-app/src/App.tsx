import { Box, ChakraProvider } from "@chakra-ui/react";
import { LoginCard } from "./components/LoginCard";


function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#0D2840">
        <LoginCard/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
