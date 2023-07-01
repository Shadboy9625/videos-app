import { Button, Container, Input, VStack, Text } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import axios from "axios";

const Forget = () => {

  const [coins, setCoins] = useState([])


  useEffect(()=>{
    const fetchAllCoins = async()=>{

      const {data} = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20");
      setCoins(data);
    };
  }, []);

  return (
    <Container maxW={"container.xl"} h={"50vh"} p={"16"}>
      <VStack spacing={"10px"}>
        {Array.map((i) => {
          <Text>{i.name}{" "}{i.symbol}{" "}{i.id}</Text>
        })}
      </VStack>

    </Container>
  )
}

export default Forget
