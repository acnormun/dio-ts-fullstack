import { Box, Center, Input } from "@chakra-ui/react";
import { LoginCard } from "../../components/LoginCard/LoginCard";
import { DButton } from "../../components/DButton/DButton";
import {useContext, useState } from "react";
import { login } from "../../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../components/Context/AppContext";
import { changeLocalStorage } from "../../services/storage";

export const Home = () => {
  const [email, setEmail] = useState("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const validateUser = async (email: string): Promise<any> => {
    const loggedIn = await login(email);
    if (!loggedIn) {
      alert("Usuário não encontrado");
    }
    setIsLoggedIn(true);
    changeLocalStorage({login: true})
    navigate("/conta/1");
  };

  return (
    <Box padding="25px">
      <LoginCard>
        <Center paddingBottom={5}>
          <h1>Faça Login</h1>
        </Center>
        <Input
          placeholder="e-mail"
          value={email}
          onChange={(event) => setEmail(event?.target.value)}
        />
        <Input placeholder="password" />
        <Center paddingTop={5}>
          <DButton onClick={() => validateUser(email)} />
        </Center>
      </LoginCard>
    </Box>
  );
};
