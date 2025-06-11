import { FaceIcon, PersonIcon } from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";
import { useStore } from "@nanostores/react"
import { $messages } from "../../store/messages";

function ChatList() {

    const messages = useStore($messages)

    return (
        <Flex direction="column" gap="2">
            {messages.map((message) => (
                <Flex
                    key={message.id}
                >
                    {message.role === "user" ? <PersonIcon /> : <FaceIcon />}
                    <Text>{message.content}</Text>
                </Flex>
            ))}
        </Flex>
    );
}

export default ChatList;