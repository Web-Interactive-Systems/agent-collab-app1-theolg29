import { Flex } from "@radix-ui/themes";
import ChatList from "./ChatList";
import ChatPrompt from "./ChatPrompt";
// import { useState } from "react";

function Chat() {

    // const [messages, setMessages] = useState([
    //     { role: "user", content: "bonjour ! comment çava ?", id: "1" },
    //     {
    //         role: "assistant",
    //         content: "bonjour !! je vais bien.. merci.  Je suis là pour aider",
    //         id: "2",
    //     },
    //     { role: "user", content: "aide moi à apprendre react", id: "3" },
    // ]);


    // const handleAddMessage = (message) => {
    //     console.log("New message", message);
    //     setMessages((prev) => [...prev, message]);
    // }

  return (
    <Flex direction="column" gap="4" width="100%" height="100%" p="1">
      {/* Ancienne méthode*/}
      {/*
      <ChatList messages={messages}/>
      <ChatPrompt onAddMessage={handleAddMessage} /> 
      */}

      {/* Avec nanostore */}
      <ChatList />
      <ChatPrompt />
    </Flex>
  );
}

export default Chat;