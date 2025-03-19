// pages/index.tsx
import PokemonList from "../../components/Pokemon/PokemonList";

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await res.json();

  return (
    <div>
      <h1>Liste des Pokémon</h1>
      <PokemonList pokemons={data.results} />
    </div>
  );
}
