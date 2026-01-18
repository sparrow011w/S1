
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

console.log("Sparrow Agency: Initializing...");

// Global non-React error handling
window.onerror = (message, source, lineno, colno, error) => {
  console.error("Global Error Caught:", { message, source, lineno, colno, error });
};

window.onunhandledrejection = (event) => {
  console.error("Unhandled Promise Rejection:", event.reason);
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: Root element '#root' not found in DOM.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    );
    console.log("Sparrow Agency: Rendered successfully.");
  } catch (err) {
    console.error("Sparrow Agency: Initialization failed:", err);
  }
}
