import { Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/About" element={<About />} />
      <Route path="/MyLearning" element={<MyLearning/>} />
      <Route path="/Connect" element={<Connect/>} /> */}
    </Routes>
  );
};

export default App;
