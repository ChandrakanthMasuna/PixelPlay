import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import image from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Image src={image} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
