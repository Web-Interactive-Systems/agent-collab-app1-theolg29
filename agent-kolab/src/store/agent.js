import { atom } from "nanostores"; 

export const $selectAgentId = atom("");
export const updatedSelectAgentId = (id) => {
  $selectAgentId.set(id);
};

export const $agents = atom([
  {
    id: "1",
    emoji: "🤖",
    title: "Assistant IA",
    role: "Je t'aide à coder",
    response_format: "text",
    temperature: 0.2,
    desired_response: "une explication claire",
  },
  {
    id: "2",
    emoji: "📝",
    title: "Rédacteur Scifi",
    role: "Tu es un écrivain de science-fiction",
    response_format: "text",
    temperature: 0.7,
    desired_response: "un brouillon d'histoire SF",
  },
]);

export const addAgent = (agent) => {
  const allAgent = $agents.get();
  $agents.set([...allAgent, agent]);
};

export const updateagent = (agents) => {
  $agents.set(agents);
};