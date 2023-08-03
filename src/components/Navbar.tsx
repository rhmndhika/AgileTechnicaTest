import React, { useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Stack,
  useColorMode,
  useMediaQuery,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Search from './Search';

interface Props {
  children: React.ReactNode;
}

export default function Navbar() {

  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [showSearch, setShowSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Country</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex justifyContent="center" alignItems="center">
              <Search />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Box px={4} margin="20px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to="/">
            <Box cursor="pointer" fontSize="2xl" fontWeight="bold" color="red.400" textTransform="uppercase">
              Agile Technica
            </Box>
          </Link>
          {isLargerThan768 ? (
            <Flex>
              <Search />
            </Flex>
          ) : (
            <Button
              variant="ghost"
              display="flex"
              alignItems="center"
              onClick={onOpen}
            >
              <SearchIcon />
            </Button>
          )}
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
        {isLargerThan768 && showSearch && (
          <Flex justifyContent="center" my="4">
            <Search />
          </Flex>
        )}
      </Box>
    </>
  );
}
