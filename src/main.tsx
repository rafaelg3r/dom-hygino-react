import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ScrollToTop } from "./components/ScrollToTop";
import "./global.css";

import { PageLoader } from "./components/PageLoader";

import { AppRouter } from "./routes/appRouter";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* TODO:tirar o basename quando for publicar */}
    <BrowserRouter basename="/dom-hygino-react">
      <ScrollToTop />
      <PageLoader />
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
