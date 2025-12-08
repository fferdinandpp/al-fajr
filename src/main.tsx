// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// Ganti BrowserRouter menjadi HashRouter
import { HashRouter } from "react-router-dom"; 
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Gunakan HashRouter di sini */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);