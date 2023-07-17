import {
  ChakraProvider,
  Input,
  Box,
  AbsoluteCenter,
  Button,
  Center,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#0D2840">
        <AbsoluteCenter>
          <Box backgroundColor="#ffff" borderRadius="25px" padding="25px">
            <Center paddingBottom={5}>
              <h1>Faça Login</h1>
            </Center>
            <Input placeholder="e-mail"/>
            <Input placeholder="password" />
            <Center paddingTop={5}>
              <Button width="100%">Entrar</Button>
            </Center>
          </Box>
        </AbsoluteCenter>
      </Box>
    </ChakraProvider>
  );
}

export default App;
