import { Resizable } from "@/components/Resizable";
import { Flex } from "@radix-ui/themes";
import Chat from "@/features/chat/Chat";
import Agent from "@/features/agent/Agent";

function Home() {
  return (
    <Flex gap="8" width="100%" height="100%">
      {/* <h1>Agent view ici</h1> */}
      <Agent></Agent>
      <Resizable
        class="resizable"
        style={{
          background: "var(--focus-a3)",
          borderLeft: "1px solid var(--gray-9)",
          marginLeft: "auto",
        }}
        enable={{
          top: false,
          right: false,
          bottom: false,
          left: true,
          topRight: false,
          bottomRight: false,
          bottomLeft: false,
          topLeft: false,
        }}
      >
        <Chat></Chat>
        {/* <h1>Chat view ici</h1> */}
      </Resizable>
    </Flex>
  );
}

export default Home;