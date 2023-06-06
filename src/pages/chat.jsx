import React, { useEffect, useState } from "react";
import lfg from "../assets/lfg.png";
import io from "socket.io-client";

const socket = io("http://localhost:3000/");

export default function Chat() {
  // const playAudio = () => new Audio()
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("serverMessage", (message) =>
      setMessages((prevState) => [...prevState, message])
    );
  }, [socket]);

  const handleSend = () => {
    socket.emit("sendMessage", text);
    setText("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-800">
      <nav className="flex justify-between items-center h-26 w-full bg-slate-800 mt-8">
        <img
          src={lfg}
          alt=""
          className="rounded-full h-16 inline-block ml-48"
        />
        <div className="flex items-center justify-center mr-40">
          <p className="text-white inline-block mr-4">Bem Vindo, User</p>
          <div className="rounded-full bg-white h-12 w-12 mr-8"></div>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-around">
        <div
          className="bg-gray-200 w-[70%] mb-12 flex flex-col justify-end"
          id="chat-container"
        >
          <ul className="p-2">
            {messages.map((message) => (
              <li>{message}</li>
            ))}
          </ul>
        </div>
        <div className="mb-6 w-[90%] h-20 rounded-md bg-gray-200 relative p-8 outline-none">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-[90%] rounded-md bg-gray-200 absolute outline-none"
            placeholder="Digite sua mensagem..."
          />
          <button
            className="absolute p-4 right-4 top-4 bg-slate-800 text-white"
            onClick={() => handleSend()}
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
}
