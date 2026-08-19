import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import faviconLogo from "./assets/images/faviconLogo.png";

const favicon = document.querySelector(
    "link[rel='icon']"
) as HTMLLinkElement;

if (favicon) {
    favicon.href = faviconLogo;
}


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);