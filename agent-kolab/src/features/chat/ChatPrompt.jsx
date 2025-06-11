import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextArea } from "@radix-ui/themes";
import { useState, useRef } from "react";
import { styled } from "../../lib/stitches";
import { $messages, addMessage, updateMessages } from "../../store/messages";
import { onDummyAgent } from "../../actions/agent";

// const Box = styled("div", {
//   background: 'red',
//   width: 100,
//   height: 100,
//   '&:hover': {
//     background: 'blue',
//   },
//   '& div': {
//     background: 'green',
//     width: 50,
//     height: 50,
//   },
// });

const StyledArea = styled(TextArea, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100px",
  borderRadius: '4px',
  border: "none",
  outline: "none",
  boxShadow: "none",
  background: "none",
});

const PromptContainer = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    background: "White",
    padding: "8px",
    borderRadius: "8px",
});

function ChatPrompt() {
    
    // const [prompt, setPrompt] = useState("");
    
    const promptRef = useRef(null);
    const [IsPromptEmpty, setIsPromptEmpty] = useState(true);
    console.log("ChatPrompt", prompt);

  const onTextChange = (e) => {
    
    promptRef.current = e.target.value;
    setIsPromptEmpty(promptRef.current.trim().length === 0);
    
    // console.log("onTextChange", e.target.value);
    // setPrompt(e.target.value);

  };

  const onSendPrompt = async () => {
    console.log("onSendPrompt", prompt);

    const userMessage = {
        content: promptRef.current,
        role: "user",
        id: Math.random().toString(),
    }
    
    // Étape 1 : Ajouter le message du user au store
    addMessage(userMessage);

    // Étape 2 : Récupère tous les messages
    const messages = $messages.get();

    // Étape 3 : Création de la réponse vide de l'assistant
    const response = {
      content: '',
      role: "assistant",
      id: Math.random().toString(),
    }
    
    // Étape 4 : Ajoute la response qui est vide
    addMessage(response);

    // Étape 5 : Ajoute le message caractères par character
    for await (const token of onDummyAgent()) {
      response.content = response.content + token;
      updateMessages([...messages, response]);
    };

  };


  return (
    <Flex>
      <PromptContainer>
        <StyledArea
          placeholder="Comment puis-je aider..."
          onChange={onTextChange}
        />

        <Flex justify="end" width="100%">
          <Button onClick={onSendPrompt} disabled={IsPromptEmpty}>
            <PaperPlaneIcon />
          </Button>
        </Flex>
      </PromptContainer>
    </Flex>
  );
}

export default ChatPrompt;