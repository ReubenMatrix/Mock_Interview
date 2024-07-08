import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Ai() {
  const genAi = new GoogleGenerativeAI("GEMINI_API_KEY");

  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function runAi() {
    setLoading(true);
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `${search}`;
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", text: search },
      { role: "model", text: response },
    ]);
    setSearch("");
    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;
    runAi();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
            CB
          </div>
          <div>
            <h2 className="font-semibold">Chatbot Assistant</h2>
            <p className="text-sm text-gray-300">Online</p>
          </div>
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-6 bg-gray-200">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                message.role === "user" ? "justify-start" : "justify-end"
              }`}
            >

              <div
                className={`bg-${
                  message.role === "user" ? "gray-300" : "black"
                } text-${
                  message.role === "user" ? "gray-800" : "white"
                } rounded-lg p-4 max-w-[75%]`}
              >
                <p>{message.text}</p>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex items-start gap-4 justify-end">
              <div className="w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
                JD
              </div>
              <div className="bg-gray-300 text-gray-800 rounded-lg p-4 max-w-[75%]">
                <p>Sending...</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-300 border-t px-6 py-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className={`p-2 bg-blue-600 text-white rounded-full ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            } transition duration-300`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Ai;
