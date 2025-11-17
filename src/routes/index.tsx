import { JokesList } from "@/components/JokesList";
import { getJokes } from "@/serverActions/jokesActions";
import { pageStore } from "@/stores/pageStore";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";

export const Route = createFileRoute("/")({
  loader: async () => {
    return getJokes();
  },
  component: App,
});

function App() {
  const jokes = Route.useLoaderData() || [];

  const page = useStore(pageStore);
  return (
    <div className="flex items-start gap-2 p-8 min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <button
        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
        onClick={() => pageStore.setState((n) => n + 1)}
      >
        Next page - {page}
      </button>
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
      <JokesList jokes={jokes} />
    </div>
  );
}
