import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement, InputLeftElement, IconButton, List, ListItem, ListIcon } from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const { value } = event.target;
    setSearchText(value);

    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const countries = response.data;
      const filteredSuggestions = countries.filter(
        (country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } catch (error) {
      console.log('Error fetching country data:', error);
    }
  };

  const handleClearInput = () => {
    setSearchText('');
    setSuggestions([]);
  };

  return (
    <div style={{ position: 'relative' }}>
      <InputGroup width="300px">
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="black.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search..."
          borderWidth="1px"
          borderColor="red.400"
          borderRadius="md"
          color="black.300"
          py="2"
          pl="10"
          pr="4"
          outline="none"
          _focus={{ borderColor: 'blue.400', boxShadow: 'outline' }}
          value={searchText}
          onChange={handleInputChange}
        />
        {searchText && (
          <InputRightElement>
            <IconButton
              aria-label="Clear"
              icon={<CloseIcon />}
              size="sm"
              variant="ghost"
              onClick={handleClearInput}
            />
          </InputRightElement>
        )}
      </InputGroup>
      {suggestions.length > 0 && (
        <List
          mt="2"
          maxH="200px"
          overflowY="auto"
          position="absolute"
          top="100%" 
          left="0" 
          zIndex="1" 
          bg="white" 
          borderRadius="md" 
          boxShadow="md" 
          width="100%" 
        >
          {suggestions.map((country) => (
            <ListItem key={country.cca2} p="2" _hover={{ bg: 'gray.100' }} cursor="pointer">
              <ListIcon as={SearchIcon} color="gray.500" />
              <Link to={`/country/details/${country.name.common}`}>
                {country.name.common}
              </Link>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default Search;
