import { Link } from "react-router-dom";

import {
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

const Sections = () => {
  return (
    <>
      <ul className="flex">
        <Flex>
          <Menu>
            <Link to={"/catalogue"}>
              <MenuButton as={Button} colorScheme="gray" size="md" mx="2">
                Catálogo
              </MenuButton>
            </Link>
          </Menu>
          
        </Flex>
      </ul>
    </>
  );
};
export default Sections;