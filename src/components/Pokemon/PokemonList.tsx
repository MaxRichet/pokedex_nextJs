import Link from "next/link";

interface Pokemon {
  name: string;
}

interface PokemonDetails {
  name: string;
  sprites: { front_default: string };
  height: number;
  weight: number;
}

async function getPokemonDetails(name: string): Promise<PokemonDetails> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

export default async function PokemonList({ pokemons }: { pokemons: Pokemon[] }) {
  
  const pokemonDetails: PokemonDetails[] = [];
  pokemonDetails.push(...(await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon.name))
  )));

  return (
    <ul className="flex flex-wrap">
      {pokemonDetails.map((pokemon) => (
        <Link href={`/pokemon/${pokemon.name}`}>
          <li key={pokemon.name}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p className="text-center">{pokemon.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
