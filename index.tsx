
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log("Sparrow Agency: Initializing...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: Root element '#root' not found in DOM.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("Sparrow Agency: Rendered successfully.");
  } catch (err) {
    console.error("Sparrow Agency: Initialization failed:", err);
  }
}
