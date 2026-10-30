import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Chat from "./components/Chat.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <div style={{ padding: "30px", color: "black" }}>
        <h1>MERN Chat</h1>
        <p>React is rendering successfully!</p>
        <Button>Click me</Button>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
