import { useEffect, useState } from "react"
import { toast } from 'sonner'


import usePokemons from '../../hooks/usePokemon'

const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    const { getPokemons } = usePokemons()

    useEffect(() => {
        async function get () {
            try {
                const pokemones = await getPokemons()
                setPokemons(pokemones.results)
                toast.success('Pokemones cargados correctamente')
            } catch (e) {
                toast.error('Hubo un error al traer los pokemones')
            }
        }

        get()
    }, [])

    return (
        <>
        {/* <img src="" alt="Selecciona pokemon" /> */}
            {
                pokemons.map(p => (
                    <div key={p.id}>
                        { p.name }
                    </div>
                ))
            }
        </>
    )
}

export default Pokemons