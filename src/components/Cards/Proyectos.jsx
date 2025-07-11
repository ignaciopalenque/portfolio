import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ProyectoVideo from '../Dialog/ProyectoVideo';
import { Github }  from  'iconoir-react'  
import LaravelOriginalWordmark from 'devicons-react/lib/icons/LaravelOriginalWordmark';
import MariadbOriginalWordmark from 'devicons-react/lib/icons/MariadbOriginalWordmark';
import PhpOriginal from 'devicons-react/lib/icons/PhpOriginal';
import BootstrapOriginal from 'devicons-react/lib/icons/BootstrapOriginal';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';


const Proyectos = ({modOscuro}) => {

let proyectosClass = modOscuro ? ' text-amber-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] bg-gray-800' : ' text-black-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-amber-50'
const toolsEmoji = '\u{1F527}'; // 🛠️ Hammer and Wrench
const checkEmoji = '\u2705';
const plusEmoji = '\u2795';
const playIcon = '\u25B6';
const dialogRef = useRef(null);
const [videoProyectoSeleccionado, setVideoProyectoSeleccionado] = useState('');
let proyectosClasShadow = modOscuro ? 'hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]' : 'hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]'



useEffect(() => {
  if (videoProyectoSeleccionado && dialogRef.current) {
    dialogRef.current.showModal();
  }
}, [videoProyectoSeleccionado]);

  const verVideoProyecto = (video) => {
    setVideoProyectoSeleccionado(video); // actualiza el estado correctamente

  }

    const pararVideos = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
      setVideoProyectoSeleccionado('');
    });
  };

  const cerrarDialog = () => {
  if (dialogRef.current) {
    dialogRef.current.close(); // cierra el dialog manualmente
  }
  pararVideos(); // pausa y reinicia el video
  setVideoProyectoSeleccionado(''); // resetea el estado para permitir nuevo click
};
  
  const SectionStyled = styled.section`
  @media (max-width: 640px) {
    max-width: calc(100% - 10px);
    margin: 0 1px;
  }
  `

 const mostarOcultar = (id) => {
    const padre = document.getElementById(id); // Obtiene el padre del botón
    const ul = padre.querySelector('ul'); // Busca el <ul> dentro del padre
    ul.hidden = !ul.hidden; // Alterna la visibilidad del <ul>
  
  }



    return (
      <SectionStyled>
      <section id='proyectos' className={`mx-auto mt-24
       flex flex-col items-center justify-center gap-4 
       lg:max-w-4xl 
       md:max-w-3xl
       sm:max-w-2xl
       lg:scroll-mt-24
       md:scroll-mt-60
       sm:scroll-mt-80
       rounded-2xl p-4 ${proyectosClass}`}>
        <h1 className="font-extrabold lg:text-3xl text-xl self-center">Proyectos {toolsEmoji}</h1>
       
        <article className="flex flex-col gap-4 w-full">
          {/* Título alineado al inicio */}
          <span className="font-semibold lg:text-2xl text-xl underline self-start">Emple@Ravel - Portal del empleado desarrollado en Laravel 10 </span>
          
          {/* Fechas alineadas al final */}
        <section className="flex col justify-center aling-items-center gap-5 self-start" >
          <PhpOriginal  size='75'/>
          <LaravelOriginalWordmark size='75'/>
            {modOscuro ? (
              <img
                src="https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_white-transparent.png"
                alt="MariaDB"
                style={{ height: '48px' }}
              />
            ) : (
              <MariadbOriginalWordmark size="50" />
            )}
          <JavascriptOriginal size='50'/>
          <BootstrapOriginal size='50'/>
          <Css3Original size='50'/>
          <Html5Original size='50'/>
          </section>

        <section className='self-start' id='emplearavel'>
          
          <button title="Mostrar detalles" className={`hover:bg-amber-50 hover:outline-1  outline-green-200 ${proyectosClasShadow}`} onClick={() => mostarOcultar('emplearavel')}>
            {plusEmoji}
          </button>
          <span className="font-light underline p-1">Funcionalidades del proyecto :</span>


           
          <ul className="self-center" hidden>
            <li className="m-2 font-light flex items-center gap-2">
              {checkEmoji} Autentificación de usuarios y sistema de roles y permisos.
            </li>
            <li className="m-2 font-light flex items-center gap-2">
             {checkEmoji} Gestión de empleados y centros productivos
            </li>
            <li className="m-2 font-light flex items-center gap-2">
             {checkEmoji} Gestión de fichajes de empleados
            </li>

               <li className="m-2 font-light flex items-center gap-2">
             {checkEmoji} Gestión de proyectos
            </li>

            <li className="m-2 font-light flex items-center gap-2">
             {checkEmoji} Gestión de notificaciones
            </li>

                 <li className="m-2 font-light flex items-center gap-2">
            {checkEmoji} Gestión de intranet documental
            </li>
        
                  <button className={` mt-2 p-1 hover:text-red-500 hover:outline-1  outline-green-200 ${proyectosClasShadow}`} onClick={() => verVideoProyecto('emplearavel')}>{playIcon} ver video proyecto</button>

        
          </ul>

        </section>
      
         
  
          {/* Fecha final alineada al final */}
          <section className='flex flex-row gap-2 font-bold text-red-600  hover:text-green-200 hover:underline'>
            
            <Github/>
           <a className="self-start " 
          href='https://github.com/nachopalenque/EmpleAravel' target="_blank">repositorio del proyecto </a>

          </section>
      
        </article>


        <section>

                  <div class="flex bg-transparent p-8 justify-center items-center h-[450px]">
            <div class="text-center space-y-6">
            <div
                class="w-24 h-24 border-4 border-t-[#00e600] border-gray-700 rounded-full animate-spin mx-auto"
            ></div>
            <div
                class="text-[#00e600] font-semibold text-4xl opacity-90 animate-fadeIn"
            >
                Próximamente más proyectos...
            </div>
            <div class="text-[#9e9e9e] text-sm opacity-80 animate-fadeIn">
                <p>«Recuerda que el software es como un gas: se expande hasta llenar su contenedor...»</p>
                <p>Nathan Myhrvold.</p>
            </div>
            </div>
        </div>


        </section>


      </section>


        <section>
            <dialog id="proyectoVideo" ref={dialogRef} className='mx-auto size-lvh bg-transparent mt-24 mb-24  '>
                <form method="dialog">
                    <section className='flex m-2 flex-row items-center justify-center gap-1 font-semibold'>
                
                    <button onClick={cerrarDialog} value="no" class="text-xl w-50 h-8 rounded border-1
                        border-black
                        bg-red-500 text-white relative overflow-hidden group z-10
                        hover:text-white duration-1000">
                            <span class="absolute bg-red-600 w-54 h-54 rounded-full group-hover:scale-110 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all">

                            </span>
                            <span class="absolute bg-red-800 w-54 h-54 -left-2 -top-10 rounded-full group-hover:scale-110 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all">
                                
                            </span>
                    Cerrar Video
                    </button>
                
                
                    </section>
                </form>

            
      
                <ProyectoVideo videoProyecto={videoProyectoSeleccionado}/>
      
            </dialog>
      
      
        </section>


      </SectionStyled>

    );
  };
export default Proyectos;