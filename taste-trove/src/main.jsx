import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <div className="container mx-auto">
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </div>
    </>
  </React.StrictMode>
);
