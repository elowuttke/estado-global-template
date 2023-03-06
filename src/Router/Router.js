import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import frutaria from "../frutaria.json";
import Cadastro from "../Pages/Cadastro";

export default function Router() {
  const [carrinho, setCarrinho] = useState([]);
  const [frutas, setFrutas] = useState(frutaria.frutaria);
  //   const [name, setName] = useState("");
  //   const [url, setUrl] = useState("");
  //   const [price, setPrice] = useState(0);

  //   console.log(carrinho);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Mercadinho
              carrinho={carrinho}
              setCarrinho={setCarrinho}
              frutas={frutas}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Carrinho
              carrinho={carrinho}
              setCarrinho={setCarrinho}
              frutas={frutas}
            />
          }
        />
        <Route
          path="/cadastro"
          element={<Cadastro 
            frutas={frutas} 
            setFrutas={setFrutas} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
