import { AbsoluteCenter, Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"

export const LoginCard = () => {
    return (
        <AbsoluteCenter>
          <Box backgroundColor="#ffff" borderRadius="25px" padding="25px">
            <Center paddingBottom={5}>
              <h1>Faça Login</h1>
            </Center>
            <Input placeholder="e-mail"/>
            <Input placeholder="password" />
            <Center paddingTop={5}>
              <Button width="100%" onClick={login}>Entrar</Button>
            </Center>
          </Box>
        </AbsoluteCenter>
    )
}