import { Box, Button, Center, Flex, Spacer, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../../services/storage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  const logout = () => {
    changeLocalStorage({login: false})
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <Flex color="white" padding="5px">
      <Box>
        <Center>
          <Text fontSize="3xl">DIO BANK</Text>
        </Center>
      </Box>
      {isLoggedIn ? (
        <>
          <Spacer />
          <Button onClick={() => logout()}>Sair</Button>
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};
