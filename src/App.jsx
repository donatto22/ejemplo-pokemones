import { Toaster } from 'sonner'

import Footer from "./components/Footer/Footer"
import Pokemons from "./components/pokemons/Pokemons"
import Header from "./components/header/Header"

function App() {
    return (
        <>
            <Toaster richColors />
            <Header />

            {/* contenido del pokemon */}
            <Pokemons />

            <Footer />
        </>
    )
}

export default App
