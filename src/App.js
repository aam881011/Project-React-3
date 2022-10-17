import { Routes } from "react-router-dom";
import './App.scss';
import Home from "./component/Home/Home";
// import Navigation from "./component/Navigation/Navigation";
// <Navigation />

function App() {
  return (
    <div className="App"> 
      <Home />
      <Routes></Routes>
    </div>
  );
}
      
      // <Route path="" element={} />
      // <Route path="" element={} />
export default App;
