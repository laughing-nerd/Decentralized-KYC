// import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/navbar";
import AdminSentReq from "./pages/adminSentReq";

function App() {
  return (
      <div className="App">
        {/* <Navbar /> */}
        <AdminSentReq />
      </div>
  );
}

export default App;
