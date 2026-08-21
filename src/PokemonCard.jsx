function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <p className="pokemon-name">{pokemon.name}</p>
    </div>
  )
}

export default PokemonCard
