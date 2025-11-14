import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pokemons')({
  component: RouteComponent,
})

/*TODO call https://pokeapi.co/api/v2/pokemon/ */
function RouteComponent() {
  return <div>Hello "/pokemons"!</div>
}
