import { Box, Flex, TextArea, Select, Tabs, Text, Slider } from "@radix-ui/themes";
import { EmojiPicker } from "@/components/EmojiPicker";

function AgentForm() {
  return (
    <form action="">
      <Flex direction="column" gap="4" width="100%" height="100%" p="1">
        <label htmlFor="emoji">Emoji</label>
        <EmojiPicker id="emoji" name="emoji" />

        <label htmlFor="title">Title</label>
        <TextArea id="title" name="title" />

        <label htmlFor="role">Rôle</label>
        <TextArea id="role" name="role" />

        <label htmlFor="responseFormat">Response Format</label>
        <Select.Root name="responseFormat" defaultValue="text">
          <Select.Trigger />
          <Select.Content>
            <Select.Group>
              <Select.Item value="text">Text</Select.Item>
              <Select.Item value="json">JSON</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <label htmlFor="desiredResponse">Desired Response</label>
        <TextArea id="desiredResponse" name="desiredResponse" />

        <label htmlFor="temperature">Temperature</label>
        <Flex align="center" gap="4">
          <Slider id="temperature" name="temperature" defaultValue={[0]} />
          <p>0.7</p>
        </Flex>

        <button type="submit">Submit</button>
      </Flex>
    </form>
  );
}

export default AgentForm;