import React from "react";
import { Box } from "@chakra-ui/react";
import "./styles.css";
import SingleChat from "./SingleChat";
import { useChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = useChatState();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      padding={3}
      backgroundColor="white"
      width={{ base: "100%", sm: "50%" }}
      height={{ base: "50%", md: "80%" }}
      borderRadius="lg"
      borderWidth="1px"
      position="absolute"
      top="110px" 
      right="240px" 
      zIndex="1"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;

