import { atom } from 'nanostores';

export const agentForm = atom({
    id: Math.random().toString(),
    emoji: '😀',
    title: 'Scifi writer',
    role: 'your are a wonderful writer',
    response_format: 'text',
    temperature: 0.1,
    desired_response: 'a draft of scifi writing',
});