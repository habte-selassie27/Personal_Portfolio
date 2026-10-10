import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = createRoot(document.getElementById("root"));

flushSync(() => {
    root.render(<App />);
});

import("../index.js");
