import { pageStore } from "@/stores/pageStore";
import { createFileRoute } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";

export const Route = createFileRoute("/pokemons")({
  component: RouteComponent,
  loader: async () => {
    const page = pageStore.state;
    const offset = page * 50;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`
    );
    return response.json() as Promise<{
      results: { name: string; url: string }[];
    }>;
  },
});

function getImageFromUrl(url: string) {
  const id = url.split("/").filter(Boolean).pop();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

/*TODO call "https://swapi.dev/api/people" */
function RouteComponent() {
  const page = useStore(pageStore);

  const data = Route.useLoaderData();
  console.log("getting data - ", data);
  return (
    <div>
      Page - {page}
      <div className="flex flex-wrap">
        {data.results.map((pokemon) => {
          return (
            <div key={pokemon.name}>
              <span className="text-red-400 font-semibold">{pokemon.name}</span>
              <img className="w-20" src={getImageFromUrl(pokemon.url)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
