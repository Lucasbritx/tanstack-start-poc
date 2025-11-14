import { pageStore } from "@/stores/pageStore";
import { createFileRoute } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";

export const Route = createFileRoute("/pokemons")({
  component: RouteComponent,
  loader: async () => {
      const page = pageStore.state;
    const offset = page * 20
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
    return response.json() as Promise<{
      results: { name: string; url: string }[];
    }>;
  },
});

/*TODO call "https://swapi.dev/api/people" */
function RouteComponent() {
  const page = useStore(pageStore);

  const data = Route.useLoaderData();
  console.log("getting data - ", data);
  return (
    <div>
      Hello "/pokemons"!
      Page - {page}
      {data.results.map((pokemon) => {
        return <div key={pokemon.name}>{pokemon.name}</div>;
      })}
    </div>
  );
}
