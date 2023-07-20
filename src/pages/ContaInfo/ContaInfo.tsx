import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ContaInfo = () => {
    return (
        <>
            <Text color='white' fontSize='3xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Link to='/conta/1' color="white">
                Página da conta
            </Link>
        </>
    );
}