import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateContact from "./components/CreateContact";

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-slate-400">
          <div className="text-3xl text-center pt-10 flex justify-center items-center h-[30vh] ">
            React CRUD Operations using Hooks and Axios
          </div>
          <Routes>
          <Route exact path="/create" element={<CreateContact />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
