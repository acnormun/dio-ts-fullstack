import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { CardInfo } from "../../components/CardInfo/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../components/Context/AppContext";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: number;
}

export const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>();

  useEffect(() => {
    const getData = async () => {
      const data: any = await api;
      setUserData(data);
    };

    getData();
  }, []);

  const actualData = new Date();
  const navigate = useNavigate();
  const  context = useContext(AppContext)

  const { id } = useParams();

  useEffect(() => {
    if ((userData && id !== String(userData.id))) {
        console.log(id, "-", userData?.id, '-', context.isLoggedIn);
        navigate("/");
      }

      if(!context.isLoggedIn){
        navigate('/')
      }
  })
  return (
    <Center>
      <SimpleGrid columns={2} spacing={8} paddingTop={16}>
        {userData === undefined || userData === null ? (
          <Center>
            <Spinner size="xl" color="white" />
          </Center>
        ) : (
          <>
            <CardInfo
              mainContent={`Bem vindo(a), ${userData.name}`}
              content={`${actualData.getDay()}/${actualData.getMonth()}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
            />
            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />
          </>
        )}
      </SimpleGrid>
    </Center>
  );
};
