import { BrowserRouter, Routes, Route } from "react-router-dom";
import InicioPage from "./pages/inicio";
import LoginPage from "./pages/login";
import CadastroPage from "./pages/cadastro";
import MeusAnunciosPage from "./pages/meusAnunciosPage";
import DetalheAnuncioPage from "./pages/detalheAnuncio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/meus-anuncios" element={<MeusAnunciosPage />} />
        <Route path="/:slugId" element={<DetalheAnuncioPage />} />
      </Routes>
    </BrowserRouter>
  );
}
