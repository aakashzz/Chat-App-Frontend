import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import AuthLayout from "./components/AuthLayout.jsx";

const router = createBrowserRouter([
   {
      path: "/",
      element:(
         <AuthLayout authenticate={false}>
            <App />
         </AuthLayout>
      ),
      children: [
         {
            path: "signup",
            element: (
               <AuthLayout authenticate={false}>
                  <Signup />
               </AuthLayout>
            ),
         },
         {
            path: "login",
            element: (
               <AuthLayout authenticate={false}>
                  <Login />
               </AuthLayout>
            ),
         },
         {
            path: "chat",
            element: (
               <AuthLayout authenticate>
                  <Home />
               </AuthLayout>
            ),
         },
      ],
   },
]);

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <ThemeProvider>
         <Provider store={store}>
            <RouterProvider router={router} />
         </Provider>
      </ThemeProvider>
   </StrictMode>
);
