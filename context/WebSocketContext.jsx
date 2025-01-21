"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { WEBSOCKET_URL } from "../constants";
import { getSession } from "next-auth/react";

const WebSocketContext = createContext(null);

export const useWebSocket = (endpoint = "devices") => {
  const [ws, setWs] = useState(null);
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(`${WEBSOCKET_URL}/ws/${endpoint}`);

    socket.onopen = async  () => {
      setConnected(true);
      console.log(`WebSocket connected to ${endpoint}`);

      const session = await getSession();
      const token = session?.user?.access_token;

      if(token) {
        socket.send(JSON.stringify({ token }));

      } else {
        console.error('Token não encontrado na sessão.');
      }
    };

    socket.onclose = () => {
      setConnected(false);
      console.log(`WebSocket disconnected from ${endpoint}`);
    };

    socket.onerror = (error) => {
      console.error("Erro no WebSocket:", error);
    };

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    setWs(socket);

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [endpoint]);

  const sendMessage = (message) => {
    if (ws && connected) {
      ws.send(message);
      console.log("Message sent:", message);
    }
  };

  return { messages, connected, sendMessage };
};
