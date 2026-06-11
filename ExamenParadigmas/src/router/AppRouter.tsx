import { Route, Routes } from "react-router";
import { Navbar } from "../presentation/components/layout/Navbar";
import { HomePage } from "../presentation/components/pages/home/HomePage";
import { CatalogPage } from "../presentation/components/pages/catalog/CatalogPage";

export const AppRouter = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
      </Routes>
    </div>
  );
};
