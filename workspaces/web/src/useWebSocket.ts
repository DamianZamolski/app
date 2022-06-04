import useMount from './useMount';

interface WebSocketEventHandlers {
  onOpen?(event: Event): void;
  onMessage?(event: MessageEvent): void;
  onClose?(event: CloseEvent): void;
  onError?(event: Event): void;
}

export default function useWebSocket(
  url: string,
  { onOpen, onMessage, onClose, onError }: WebSocketEventHandlers = {}
) {
  useMount(() => {
    const webSocket = new WebSocket(url);
    webSocket.onopen = onOpen || null;
    webSocket.onmessage = onMessage || null;
    webSocket.onclose = onClose || null;
    webSocket.onerror = onError || null;
    return () => {
      webSocket.close();
    };
  });
}
