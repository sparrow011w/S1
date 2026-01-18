import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary.tsx';

console.log("Sparrow Agency: System Startup...");

// Global non-React error handling
window.onerror = (message, source, lineno, colno, error) => {
  console.error("Critical Runtime Error:", { message, source, lineno, colno, error });
};

window.onunhandledrejection = (event) => {
  console.error("Critical Promise Rejection:", event.reason);
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("System Failure: Root container missing.");
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
    console.log("Sparrow Agency: System Online.");
  } catch (err) {
    console.error("System Failure: Render process terminated.", err);
    if (rootElement) {
        rootElement.innerHTML = `
            <div style="background: black; color: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: monospace; text-align: center; padding: 20px;">
                <h1 style="color: #dc2626; font-size: 14px; margin-bottom: 20px; letter-spacing: 2px;">CORE_INITIALIZATION_ERROR</h1>
                <p style="font-size: 10px; color: #666; max-width: 400px; line-height: 1.6;">
                    System encountered a failure during the boot sequence. This incident has been logged. 
                    Ensure your browser supports modern ESM and Import Maps.
                </p>
                <button onclick="location.reload()" style="margin-top: 30px; background: #333; color: white; border: none; padding: 10px 20px; font-size: 10px; cursor: pointer; letter-spacing: 1px;">RETRY BOOT</button>
            </div>
        `;
    }
  }
}