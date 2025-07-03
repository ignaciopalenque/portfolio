import React from 'react';
import styled from 'styled-components'

const Experience = ({modOscuro}) => {

  let experienceClass = modOscuro ? ' text-amber-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] bg-gray-800' : ' text-black-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-amber-50'
  const programmerEmoji = '\u{1F468}\u200D\u{1F4BB}'; // Hombre programador
  const checkEmoji = '\u2705';
  const plusEmoji = '\u2795';
  let experienceClasShadow = modOscuro ? 'hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]' : 'hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]'

  const SectionStyled = styled.section`
  @media (max-width: 640px) {
    max-width: calc(100% - 10px);
    margin: 0 1px;
  }
  `



  function mostarOcultar(id){
    const padre = document.getElementById(id); // Obtiene el padre del botón
    const ul = padre.querySelector('ul'); // Busca el <ul> dentro del padre
    ul.hidden = !ul.hidden; // Alterna la visibilidad del <ul>
  }

    return (
      <SectionStyled>
      <section id='experience' className={`mx-auto mt-24
       flex flex-col items-center justify-center gap-4 
       lg:max-w-4xl 
       md:max-w-3xl
       sm:max-w-2xl
       lg:scroll-mt-24
       md:scroll-mt-60
       sm:scroll-mt-80
       rounded-2xl p-4 ${experienceClass}`}>
        <h1 className="font-extrabold lg:text-3xl text-xl self-center">Experiencia laboral {programmerEmoji}</h1>
       
        <article className="flex flex-col gap-4 w-full">
          {/* Título alineado al inicio */}
          <span className="font-semibold lg:text-2xl text-xl underline self-start">Infofive S.L - 4 años y 9 meses</span>
          
          {/* Fechas alineadas al final */}
      <strong className="self-start">Desde Febrero del 2020</strong>

        <section className='self-start' id='infofive'>
          
          <button className={`hover:bg-amber-50 hover:outline-1  outline-green-200 ${experienceClasShadow}`} onClick={() => mostarOcultar('infofive')}>
            {plusEmoji}
          </button>
          <span className="font-light p-1">Desempeñando las siguientes tareas entre otras :</span>


           
          <ul className="self-center" hidden>
            <li className="font-light flex items-center gap-2">
              {checkEmoji}Desarrollo y mantenimiento de aplicaciones en .NET con visual basic , C# , Blazor, LINQ, Entity Framework y Bootstrap.
            </li>
            <li className="font-light flex items-center gap-2">
              {checkEmoji}Gestión y mantenimiento de bases de datos SQL Server. uso de vistas, procedimientos almacenados y funciones
            </li>
            <li className="font-light flex items-center gap-2">
             {checkEmoji}Desarrollo de informes tanto con crystal reports como para análisis de datos con conexiones excel obdc
            </li>
        
          </ul>

        </section>
      
         
  
          {/* Fecha final alineada al final */}
          <strong className="self-start">Hasta Septiembre del 2024</strong>
        </article>
      </section>
      </SectionStyled>

    );
  };
export default Experience;