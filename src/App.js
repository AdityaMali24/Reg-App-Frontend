import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import RegForm from "./components/RegForm";
import RegList from "./components/RegList";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <RegForm /> */}
        {/* <RegList/> */}
        <Routes>
        <Route path="/" element={<RegForm />} />
          <Route path="/list" element={<RegList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
