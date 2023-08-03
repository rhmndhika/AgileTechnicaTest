import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import SimpleMap from '../components/SimpleMap'
import Navbar from '../components/Navbar.tsx';
import { Flex, Text, Image, Container, Heading, HStack, Box, Divider } from '@chakra-ui/react';

const CountryDetails = () => {
  const name = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
      const getCountryDetails = async () => {
          try {
              const response = await axios.get(`https://restcountries.com/v3.1/name/${name.id}`);
              setCountryDetails(response.data);
          } catch (err) {
              console.log(err);
          }
      };
      getCountryDetails();
  }, [name]);

  return (
      <>
          <Navbar />
          {countryDetails?.map((index) => {
              return (
                  <Flex flexDirection="column" width="100%" key={index.name?.official}>
                      <Flex flexDirection="column" padding="20px" margin="20px">
                          <Text fontSize="xl" fontWeight="bold" mb="-20px" textTransform="uppercase">
                              {index.name?.official}
                          </Text>
                      </Flex>
                      <Flex
                          flexDirection={{ base: 'column', md: 'row' }}
                          padding="30px"
                          alignItems="center"
                          justifyContent="center"
                          boxShadow="md"
                          borderRadius="8px"
                          bg="white"
                          color="gray.800"
                          width="100%"
                      >
                          {/* Image */}
                          <Box mr={{ base: '0', md: '20px' }}>
                              <Image
                                  src={index.flags.png} // Replace with the URL of the image
                                  alt={index.name.official}
                                  w={{ base: '100%', md: '1000px' }}
                                  h={{ base: 'auto', md: '300px' }}
                                  borderRadius="8px"
                              />
                          </Box>

                          <Divider orientation={{ base: 'horizontal', md: 'vertical' }} />

                          {/* Details */}
                          <Flex flexDirection="column" ml="50px" width="100%">
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Common Name :</Text>
                                  <Text>{index.name?.common || 'Data not available'}</Text>
                              </HStack>
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Capital :</Text>
                                  <Text>{index?.capital || 'Data not available'}</Text>
                              </HStack>
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Currency :</Text>
                                  { Object.key ? 
                                  <Text>{Object.keys(index.currencies)}</Text>
                                  :
                                  <Text>Data not available</Text>
                                  }
                              </HStack>
                              {index.languages && (
                                  <HStack spacing="20px" mt="10px">
                                      <Text fontWeight="bold">Languages :</Text>
                                      <Text>{Object.values(index.languages).join(", ")}</Text>
                                  </HStack>
                              )}
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Population :</Text>
                                  <Text>{index?.population || 'Data not available'}</Text>
                              </HStack>
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Timezone :</Text>
                                  <Text>{index?.timezones?.[0] || 'Data not available'}</Text>
                              </HStack>
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Continents :</Text>
                                  <Text>{index?.continents?.[0] || 'Data not available'}</Text>
                              </HStack>
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Status :</Text>
                                  <Text>{index?.status || 'Data not available'}</Text>
                              </HStack>
                              <HStack spacing="20px" mt="10px">
                                  <Text fontWeight="bold">Region :</Text>
                                  <Text>{index?.region || 'Data not available'}</Text>
                              </HStack>
                          </Flex>
                      </Flex>
                      <Flex flexDirection="column" padding="20px" margin="20px">
                          <Text fontSize="xl" fontWeight="bold" mb="-20px" textTransform="uppercase">
                              {index.name.official} Map
                          </Text>
                      </Flex>
                      <div style={{ padding: "10px 50px 0 50px", marginBottom: "50px" }}>
                          {index.latlng && index.latlng.length === 2 ? (
                              <SimpleMap first={index.latlng[0]} second={index.latlng[1]} />
                          ) : (
                              <Text>Map data not available</Text>
                          )}
                      </div>
                  </Flex>
              );
          })}
      </>
  );
};

export default CountryDetails;