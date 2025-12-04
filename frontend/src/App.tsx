import { useGetMessage } from './hooks/useQueries';
import { Sparkles } from 'lucide-react';

export default function App() {
  const { data: message, isLoading } = useGetMessage();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-semibold">Hello World Website</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
              <Sparkles className="h-12 w-12 text-primary" />
            </div>
            
            {isLoading ? (
              <div className="space-y-3">
                <div className="h-16 w-64 mx-auto bg-muted animate-pulse rounded-lg" />
                <div className="h-4 w-48 mx-auto bg-muted animate-pulse rounded" />
              </div>
            ) : (
              <>
                <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  {message}
                </h2>
                <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                  Welcome to your minimal website on the Internet Computer
                </p>
              </>
            )}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold mb-1">Fast</h3>
              <p className="text-sm text-muted-foreground">Built on the Internet Computer</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold mb-1">Secure</h3>
              <p className="text-sm text-muted-foreground">Decentralized and tamper-proof</p>
            </div>
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-semibold mb-1">Simple</h3>
              <p className="text-sm text-muted-foreground">Clean and minimal design</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2025. Built with <span className="text-red-500">♥</span> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
