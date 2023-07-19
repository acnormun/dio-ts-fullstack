import { AbsoluteCenter, Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { useState } from "react"
import { DButton } from "./DButton/DButton"

export const LoginCard = () => {
  const [email, setEmail] = useState('')
  console.log('email: ', email);
  
    return (

        <AbsoluteCenter>
          <Box backgroundColor="#ffff" borderRadius="25px" padding="25px">
            <Center paddingBottom={5}>
              <h1>Faça Login</h1>
            </Center>
            <Input placeholder="e-mail" value={email}onChange={(event) => setEmail(event?.target.value)}/>
            <Input placeholder="password" />
            <Center paddingTop={5}>
              <DButton onClick={() => login(email)}/>
            </Center>
          </Box>
        </AbsoluteCenter>
    )
}