import useWebSocket from './useWebSocket';

function onMessage(event: MessageEvent) {
  console.debug(event);
}

export default function useMyWebSocket() {
  useWebSocket('ws://localhost:3000', { onMessage });
}
