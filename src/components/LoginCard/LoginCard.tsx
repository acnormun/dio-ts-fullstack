import { AbsoluteCenter, Box } from "@chakra-ui/react";

export const LoginCard = ({ children }: any) => {
  return (
    <AbsoluteCenter>
      <Box backgroundColor="#ffff" borderRadius="25px" padding="25px">
        {/* {userData === null || userData === undefined ?  <h1>Loading ...</h1> : <h1>Informações carregadas</h1>} */}
        {children}
      </Box>
    </AbsoluteCenter>
  );
};
