import "./App.css";
import Navbar from "./Pages/Sidebar/Navbar";
import Sidebar from "./Pages/Sidebar/Sidebar";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Navbar></Navbar>
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
