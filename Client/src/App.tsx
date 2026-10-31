import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import Chat from "./components/Chat.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
