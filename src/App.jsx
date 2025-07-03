import { useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Title from './components/Navbar/Title';
import './App.css'
import AboutMe from './components/Cards/AboutMe';
import Experience from './components/Cards/Experience';
import Skills from './components/Cards/Skills';
import Education from './components/Cards/Education';
import Proyectos from './components/Cards/Proyectos';
import curriculum  from './assets/img/curriculum.png'
import curriculumPDF  from './assets/pdf/curriculum-ignacio-2025.pdf'

function App() {

  //useState true por defecto sera modo oscuro
  const [modOscuro, setModOscuro] = useState(true);
  const [abrirCurriculum, setAbrirCurriculum] = useState(false);
  const dialogoCurriculum = document.getElementById("dialogoCurriculum");


  const cambiarTema = () => {
    console.log('Estado actual:', modOscuro); // Verifica el estado antes de cambiarlo
    setModOscuro(!modOscuro)
    console.log('Nuevo estado:', !modOscuro); // Verifica el nuevo estado

  }
  const abrirDialogoCurriculum = () => {
    setAbrirCurriculum(!abrirCurriculum);

    if(abrirCurriculum){
      dialogoCurriculum.showModal();
    }else{
      dialogoCurriculum.close();
    } 

  }

  function descargarPDF() {
  const enlace = document.createElement("a");
  console.log("Descargando PDF...");
  enlace.href = curriculumPDF;
  enlace.download = "curriculum-ignacio-palenque.pdf"; // Nombre con el que se descargará
  document.body.appendChild(enlace);
  enlace.click();
  document.body.removeChild(enlace);
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
      <Navbar cambiarTema={cambiarTema} modOscuro={modOscuro}  abrirCurriculum={abrirDialogoCurriculum}/>
      <Title modOscuro={modOscuro}/>
    </header>

    <section>
      <dialog id="dialogoCurriculum" className='mx-auto size-lvh
       mt-24 mb-24 border-2 border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] '>
        <section className='flex flex-wrap flex-row items-center justify-center text-center border-2 border-gray-300 '>
        <form method="dialog">
          <section className='flex m-2 flex-row items-center justify-center gap-1 font-semibold'>


                <button onClick={descargarPDF}
                  class="text-xl w-50 h-8 rounded border-1 border-black bg-emerald-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                >
                  <span
                    class="absolute bg-emerald-600 w-54 h-54 rounded-full group-hover:scale-110 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
                  ></span>
                  <span
                    class="absolute bg-emerald-800 w-54 h-54 -left-2 -top-10 rounded-full group-hover:scale-110 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
                  ></span>
                  Descargar en PDF
                </button>

                  <button value="no" 
                  class="text-xl w-50 h-8 rounded border-1 border-black bg-red-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"
                >
                  <span
                    class="absolute bg-red-600 w-54 h-54 rounded-full group-hover:scale-110 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"
                  ></span>
                  <span
                    class="absolute bg-red-800 w-54 h-54 -left-2 -top-10 rounded-full group-hover:scale-110 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"
                  ></span>
                  Cerrar Curriculum
                </button>




                  {/* Antiguos botones
                  
                        <button onClick={descargarPDF}
                        className='w-auto p-0.5 flex flex-row justify-center items-center border-2 
                        bg-green-500
                        hover:bg-green-400
                        hover:text-white
                        hover:outline-2
                        hover:outline-black'>Descargar en PDF</button>


                        <button value="no" 
                        className='w-auto p-0.5 flex flex-row justify-center items-center border-2 
                        bg-red-400
                        hover:bg-red-500
                        hover:text-white
                        hover:outline-2
                        hover:outline-black'>
                        Cerrar Curriculum</button>

                  

                  
                  */}

          
             

 


          </section>

    
       
        </form>
          <img width={"100%"} height={"auto"}  src={curriculum} alt="" />

        </section>
 
      </dialog> 
    </section>


    <section>
      <AboutMe modOscuro={modOscuro}/>
      <Experience modOscuro={modOscuro}/>
      <Education modOscuro={modOscuro}/>
      <Skills modOscuro={modOscuro}/>
      <Proyectos modOscuro={modOscuro}/>

    </section>

    <footer
    className={`mt-16 mb-2 text-center 
      ${modOscuro
      ? `text-white`
      : `text-black`}`}
    >Desarrollado en React con Tailwindcss utilizando Vite. All rights reserved.</footer>

  </main>

      
 

  </>
  )
}

export default App
