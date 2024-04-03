import { Route, Routes } from "react-router-dom";
import { Products } from "./components/Products";
import { SingleProduct } from "./components/Single-product";

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Products />} />
    <Route path="/:id" element={<SingleProduct />} />
  </Routes>
);
