import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Login from './views/login'; // Ensure the correct path to your Login component
// import AdminLayout from "layouts/Admin/Admin.js";

// import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
// import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
// import ForgotPassword from "views/forgetPassword";

ReactDOM.render(
  <div>
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    <h1>Toi la Sieu nhan</h1>
    <h2>Sieu nhan Gao bien hinh</h2>
  </div>,
  document.getElementById("root")
);