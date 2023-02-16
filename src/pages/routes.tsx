import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}