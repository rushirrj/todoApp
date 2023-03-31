import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MyTasks from "./Components/MyTasks"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  const[data,setData] = useState([]);
  const[complete,setComplete] = useState([]);
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setData={setData} data={data} complete={complete} setComplete={setComplete}/>}></Route>
        <Route path="/mytasks" element={<MyTasks setData={setData} data={data} complete={complete} setComplete={setComplete}/>}></Route>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
