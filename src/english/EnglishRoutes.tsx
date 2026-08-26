import { Route, Routes } from "react-router-dom";
import EnglishHomePage from "./EnglishHomePage";
import EnglishNotFound from "./EnglishNotFound";
import "./styles/index.css";

export default function EnglishRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EnglishHomePage />} />
      <Route path="*" element={<EnglishNotFound />} />
    </Routes>
  );
}
