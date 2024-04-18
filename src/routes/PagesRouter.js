import React from "react";
import { Route, Routes } from "react-router-dom";
import { PagePeople } from "../pages/PagePeople";
import { PagePlanets } from "../pages/PagePlanets";
import { PageStarships } from "../pages/PageStarships";

export const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/people" element={<PagePeople/>} />
      <Route path="/planets" element={<PagePlanets />} />
      <Route path="/starships" element={<PageStarships />} />
    </Routes>
  );
};
