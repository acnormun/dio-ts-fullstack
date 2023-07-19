import { Box, Center, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../App";

export const Header = () => {
  const context = useContext(AppContext)
  return (
    <Box width="100%" color="white" padding="25px">
      <Center>
        <Text fontSize="3xl">DIO BANK</Text>
      </Center>
    </Box>
  );
};
