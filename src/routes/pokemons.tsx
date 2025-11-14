import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pokemons")({
  component: RouteComponent,
  loader: async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    return response.json() as Promise<{ results: { name: string }[] }>;
  },
});

/*TODO call "https://swapi.dev/api/people" */
function RouteComponent() {
  const data = Route.useLoaderData();
  console.log("getting data - ", data);
  return <div>Hello "/pokemons"!</div>;
}
