import { AbsoluteCenter, Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "../../services/login"
import { useEffect, useState } from "react"
import { DButton } from "../DButton/DButton"
import { api } from "../../api"



export const LoginCard = () => {
  const [email, setEmail] = useState('')
  
  
    return (

        <AbsoluteCenter>
          <Box backgroundColor="#ffff" borderRadius="25px" padding="25px">
            {/* {userData === null || userData === undefined ?  <h1>Loading ...</h1> : <h1>Informações carregadas</h1>} */}
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