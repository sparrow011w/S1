
import React, { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

// Fix: explicitly using React.Component to ensure the compiler recognizes standard lifecycle properties and state management
class ErrorBoundary extends React.Component<Props, State> {
  // Fix: properly initialize state in constructor
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    // Fix: setState is now correctly identified as part of React.Component
    this.setState({ hasError: false });
    window.location.href = '/';
  };

  public render() {
    // Fix: state and props are correctly identified via inheritance from React.Component
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center space-y-8 bg-zinc-900 p-12 border border-zinc-800 rounded-lg shadow-2xl">
            <div className="flex justify-center">
              <div className="bg-red-900/20 p-4 rounded-full">
                <AlertTriangle className="w-12 h-12 text-red-600" />
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-white italic">Application Error</h1>
              <p className="text-zinc-400 leading-relaxed">
                A critical error occurred while rendering the application. This incident has been logged for analysis.
              </p>
            </div>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center px-8 py-3 bg-red-700 text-white font-bold rounded hover:bg-red-800 transition-all group"
            >
              <RefreshCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Reset Application
            </button>
            <div className="pt-8 border-t border-zinc-800">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
                Operational Integrity System
              </p>
            </div>
          </div>
        </div>
      );
    }

    // Fix: props is correctly identified
    return this.props.children;
  }
}

export default ErrorBoundary;
