import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RefreshCw, Home } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              Ops! Algo deu errado
            </h1>
            <p className="text-muted-foreground mb-6">
              Ocorreu um erro ao carregar esta página. Por favor, tente recarregar.
            </p>
            <div className="flex gap-4 justify-center">
              <Button onClick={this.handleReload} variant="default">
                <RefreshCw className="w-4 h-4 mr-2" />
                Recarregar
              </Button>
              <Button asChild variant="outline">
                <Link to="/">
                  <Home className="w-4 h-4 mr-2" />
                  Ir para Início
                </Link>
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
