import { PlusIcon, Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { Box, Flex, Button, Card, Text, IconButton } from "@radix-ui/themes";
import { useStore } from "@nanostores/react";
import { $agents, $selectAgentId } from "../../store/agent";
import { $selectAgentId, updatedSelectAgentId } from "../../store/agent";

function AgentList() {

  const agents = useStore($agents);
  const selectAgentId = useStore($selectAgentId);

  return (
    <Flex direction="column" gap="3" mt="3">
      <Flex direction="column" gap="2">
          <Button variant="classic">
            <PlusIcon /> Ajouter
          </Button>
        </Flex>
      <Box
        style={{
          with: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 2fr))",
          gap: "1rem",
          alignContent: "middle",
        }}
      >
        {agents.map((agent) => (
          <Card key={agent.id} style={{ width: "100%" }}>
            <Flex align="center" gap="3" justify="between">
              <Flex align="center" gap="3">
                <span style={{ fontSize: "2rem" }}>{agent.emoji}</span>
                <Flex direction="column">
                  <Text weight="bold">{agent.title}</Text>
                  <Text size="2" color="gray">
                    {agent.role}
                  </Text>
                </Flex>
              </Flex>

              <Flex gap="2">
                <IconButton variant="ghost" color="gray" aria-label="Modifier">
                  <Pencil1Icon onClick={() => updatedSelectAgentId(agent.id)} />
                </IconButton>
                <IconButton variant="ghost" color="red" aria-label="Supprimer">
                  <TrashIcon />
                </IconButton>
              </Flex>
            </Flex>
          </Card>
        ))}
      </Box>
    </Flex>
  );
}

export default AgentList;
