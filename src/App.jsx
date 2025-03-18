import { useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Title from './components/Navbar/Title';
import './App.css'
import AboutMe from './components/Cards/AboutMe';
import Experience from './components/Cards/Experience';
import Skills from './components/Cards/Skills';
function App() {

  const [modOscuro, setModOscuro] = useState(false)
  
  const cambiarTema = () => {
    console.log('Estado actual:', modOscuro); // Verifica el estado antes de cambiarlo
    setModOscuro(!modOscuro)
    console.log('Nuevo estado:', !modOscuro); // Verifica el nuevo estado

  }



  return (
  <>
  <main 
    className={`min-h-screen
     ${modOscuro 
      ? `bgDark` 
      : `bgLight`}
      bg-center bg-cover`}>

    <header>
      <Navbar cambiarTema={cambiarTema} modOscuro={modOscuro}/>
      <Title modOscuro={modOscuro}/>
    </header>

    <section>
      <AboutMe modOscuro={modOscuro}/>
      <Experience modOscuro={modOscuro}/>
      <Skills modOscuro={modOscuro}/>
    </section>

    <footer></footer>

  </main>

      
 

  </>
  )
}

export default App
