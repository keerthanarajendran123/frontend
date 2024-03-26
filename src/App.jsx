import "./App.css";
import Homepage from "./Pages/Homepage";
import { Routes, Route } from "react-router-dom"; 
import Chatpage from "./Pages/Chatpage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} exact /> 
        <Route path="/chats" element={<Chatpage />} /> 
      </Routes>
    </div>
  );
}

export default App;
