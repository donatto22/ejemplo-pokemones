const usePokemon = () => {
    const API = 'https://pokeapi.co/api/v2/pokemon'

    const getPokemons = async () => {
        const pokemons = await fetch(API)
        const data = await pokemons.json()
        return data
    }

    const getPokemonData = async (pokemonName) => {
        const pokemons = await fetch(`${API}/${pokemonName}`)
        const data = await pokemons.json()
        return data
    }

    return {
        getPokemons, getPokemonData
    }
}

export default usePokemon
