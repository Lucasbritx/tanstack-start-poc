import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div className="flex items-start gap-2 p-8 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Link
        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
        to="/pokemons"
      >
        Pokemons
      </Link>
      <Link
        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
        to="/about"
      >
        About
      </Link>
    </div>
  );
}
