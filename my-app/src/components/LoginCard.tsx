import { AbsoluteCenter, Box, Button, Center, Input } from "@chakra-ui/react"
import { login } from "../services/login"
import { useEffect, useState } from "react"
import { DButton } from "./DButton/DButton"
import { api } from "../api"

interface UserData {
  email: string, 
  password: string,
  name: string
}

export const LoginCard = () => {
  const [email, setEmail] = useState('')
  const [userData, setUserData] = useState<null | UserData>()

  useEffect(() => {
    const getData = async () => {
      const data: any = await api
      setUserData(data)
    }

    getData()
  })
  
    return (

        <AbsoluteCenter>
          <Box backgroundColor="#ffff" borderRadius="25px" padding="25px">
            {userData === null || userData === undefined ?  <h1>Loading ...</h1> : <h1>Informações carregadas</h1>}
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