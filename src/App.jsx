import Navbar from "./components/Navbar";
import "./App.css";
import Container from "./components/Container";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import { Signup } from "./pages/Signup";
import Login from "./pages/Login";
function App() {
   return (
      <main className="h-full w-full ">
         <Navbar />
         <Container>
            <Outlet />
         </Container>
      </main>
   );
}

export default App;
