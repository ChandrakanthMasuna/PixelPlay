import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import image from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={image} boxSize="60px" />
      <text>NavBar</text>
    </HStack>
  );
};

export default NavBar;
