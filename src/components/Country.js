import React, { useState } from 'react';
import { 
  Flex, 
  Text,
  Card, 
  CardBody, 
  CardFooter,
  Stack,
  Divider,
  Image,
  Tooltip
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Country = ({ item }) => {

  const { name, flags, capital, region, population } = item;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Flex margin="20px 10px 10px 10px" justifyContent="center" alignItems="center" height="418px">  
     <Card maxW='sm'  _hover={{ transform: 'scale(1.05)' }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <CardBody>
          <Link to={`/country/details/${name.common}`}>
          {isHovered ? (
            <Flex height="250px" width="300px">
              {flags.alt ? 
              <Text fontSize="sm" textAlign="center" p={6}>
                {flags.alt}
              </Text>
              :
              <Text fontSize="sm" color={'gray.500'} textAlign="center" p={6}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sollicitudin pellentesque risus, sed gravida nulla porttitor nec.
                 {/* Nam non mattis neque. Aliquam erat volutpat. Suspendisse aliquet velit ex, non porttitor ex pretium iaculis. Proin at dui quis 
                 sem tincidunt facilisis. Etiam finibus purus eget egestas condimentum.  */}
              </Text>
              }
            </Flex>
            ) : (
              <Image
                src={flags.png}
                alt={flags.alt}
                borderRadius='lg'
                objectFit="cover"
                height="250px"
                width="300px"
                cursor="pointer"
              />
            )}
          </Link>
          <Stack mt='6' spacing='3'>
            <Tooltip label={`Capital: ${capital} | Region: ${region} | Population: ${population}`}>
              <Text noOfLines={1} maxW="300px" cursor="pointer" fontSize='xl'>
                {name.official}
              </Text>
            </Tooltip>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Stack>
            <Tooltip label={`Common Name: ${name.common}`}>
              <Text noOfLines={1} maxW="300px" cursor="pointer" fontSize="sm">
                {name.common}
              </Text>
            </Tooltip>
          </Stack>
        </CardFooter>
      </Card>
    </Flex>
  );
}

export default Country;
