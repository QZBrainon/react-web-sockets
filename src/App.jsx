import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Chat from "./pages/chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </>
  );
}

export default App;
