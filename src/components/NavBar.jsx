import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Spacer, Box, ButtonGroup, Heading} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div>

<Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>KLOVERSTORE</Heading>
  </Box>
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton colorScheme='teal' isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
          {isOpen ? 'Close' : 'Open'}
        </MenuButton>
      <MenuList>
      <MenuItem>Categoria 1</MenuItem>
      <MenuItem>Categoria 2</MenuItem>
      <MenuItem>Categoria 3</MenuItem>
      <MenuItem>Categoria 4</MenuItem>
      </MenuList>
      </>
    )}
  </Menu>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal' >Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'><CartWidget/></Button>
    
  </ButtonGroup>
</Flex>

  </div>
  );
}



export default NavBar