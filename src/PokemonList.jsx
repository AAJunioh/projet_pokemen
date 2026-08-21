import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard.jsx'

const POKEMON_COUNT = 15

function PokemonList() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPokemons() {
      const list = []
      for (let id = 1; id <= POKEMON_COUNT; id++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        list.push({
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
        })
      }
      setPokemons(list)
      setLoading(false)
    }

    fetchPokemons()
  }, [])

  if (loading) {
    return <p className="status">Chargement des Pokémon...</p>
  }

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  )
}

export default PokemonList
