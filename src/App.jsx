import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error404 from "./pages/404";
import Characters from "./pages/Characters";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
