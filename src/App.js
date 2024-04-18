import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { PagesRouter } from "./routes/PagesRouter";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <PagesRouter />
      </>
    </BrowserRouter>
  );
}
