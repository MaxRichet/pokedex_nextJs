// app/pokemon/[name]/page.tsx
import Link from "next/link";

interface Pokemon {
  name: string;
  sprites: { front_default: string };
  height: number;
  weight: number;
}

async function getPokemonDetails(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

export default async function PokemonDetail({ params }: { params: { name: string } }) {
  const pokemon: Pokemon = await getPokemonDetails(params.name);

  return (
    <div>
      <Link href={"/pokemon"}>Retour</Link>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Taille : {pokemon.height}</p>
      <p>Poid : {pokemon.weight}</p>
    </div>
  );
}
