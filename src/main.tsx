import React from "react";
import ReactDOM from "react-dom/client";
import { Container, Header, Hero, Filters, Results } from "./components";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Container>
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <div className="w-full lg:w-64">
          <Filters />
        </div>
        <div className="flex-1">
          <Results />
        </div>
      </div>
    </Container>
  </React.StrictMode>
);
