import React from "react";
import "./App.css";
import { useState } from "react";
import { Menu } from "./components/Menu";
import { CreateAnimalPage } from "./pages/CreateAnimal";
import { AnimalListPage } from "./pages/AnimalList";
import { ViewAnimal } from "./pages/ViewAnimal";
import { HashRouter, Route, Routes } from "react-router-dom";
import {UpdateAnimalPage} from "./pages/UpdateAnimal";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<AnimalListPage />} />
          <Route path="/create" element={<CreateAnimalPage />} />
          <Route path="/animals/view/:id" element={<ViewAnimal/>} />
          <Route path="/animals/update/:id" element={<UpdateAnimalPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
