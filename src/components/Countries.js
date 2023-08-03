import React, { useEffect, useState } from 'react'; 
import axios from 'axios'; 
import { Flex, Text } from '@chakra-ui/react';
import Country from './Country';

const Countries = () => {

    const [ countries, setCountries ] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
          try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            setCountries(response.data);
          }catch(err) {
            console.log(err);
          }
        };
        getCountries();
      }, [])

  return (
    <Flex flexDirection="column" padding="30px" mt="-60px" >
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        { countries.map((item) => ( <Country item={item} key={item.id} />))}
        </Flex>
    </Flex>
  )
}

export default Countries