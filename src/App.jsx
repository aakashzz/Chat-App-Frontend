import Navbar from "./components/Navbar";
import "./App.css";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/slices/authorize.slice";
import { useEffect, useState } from "react";
import Loading from "./components/mini-components/Loading";

function App() {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();

   useEffect(() => {
      setLoading(true);
      axios
         .get(`${import.meta.env.VITE_BASEURL}/users/getUser`)
         .then((data) => {
            console.log(data.data)
            dispatch(login(data.data.data));
         })
         .catch(() => {
            dispatch(logout());
         })
         .finally(setLoading(false));
   }, []);
   return loading ? (
      <Loading />
   ) : (
      <main className="h-full w-full ">
         <Navbar />
         <Container>
            <Outlet />
         </Container>
      </main>
   );
}

export default App;
