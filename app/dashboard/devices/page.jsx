"use client";

import React, { useState } from "react";
import { useWebSocket } from "@/context/WebSocketContext";
import { Button } from "@/components/ui/button";

export default function DevicesPage() {
  const { messages = [], sendMessage, connected } = useWebSocket("carambolas");
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

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          className="border p-2 flex-grow rounded"
          placeholder="Type a message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          onClick={handleSendMessage}
          variant="ghost"
          className="px-4 py-6"
          disabled={!connected}
        >
          Send
        </Button>
      </div>

      <div className="border p-4 max-h-64 overflow-y-auto rounded w-full max-w-2xl">
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
