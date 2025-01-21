"use client";

import React, { useState } from "react";
import { useWebSocket } from "@/context/WebSocketContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DevicesPage() {
  const endpoint = "carambolas";
  const { messages = [], sendMessage, connected } = useWebSocket(endpoint);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold mb-4">Devices WebSocket</h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        <b>Endpoint:</b> {endpoint}
      </p>

      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={handleSendMessage}
          variant="ghost"
          disabled={!connected}
        >
          Send
        </Button>
      </div>

      <div className="border p-4 max-h-64 overflow-y-auto rounded-md w-full max-w-2xl">
        <h2 className="text-lg font-semibold mb-2">Messages:</h2>
        {messages.length === 0 ? (
          <p>No messages yet</p>
        ) : (
          <ul>
            {messages.map((msg, index) => (
              <li key={index} className="py-1">
                {msg}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
