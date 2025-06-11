import { Flex } from "@radix-ui/themes";
import AgentList from "./AgentList";
import AgentForm from "./AgentForm";
import { useStore } from "@nanostores/react";
import { $selectAgentId } from "@/store/agent";

function Agent() {

  const selectAgentId = useStore($selectAgentId);

  return (
    <Flex direction="column" gap="4" width="100%" height="100%" p="1">
      <AgentList />
     {selectAgentId &&  <AgentForm />}
    </Flex>
  );
}

export default Agent;