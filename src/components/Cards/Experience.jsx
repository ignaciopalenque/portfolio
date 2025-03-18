import React from 'react';
import { Check }  from  'iconoir-react' 
import { PlusSquare }  from  'iconoir-react' 

const Experience = ({modOscuro}) => {

  let experienceClass = modOscuro ? ' text-amber-50 border-2 font-bold border-amber-50 bg-gray-800' : ' text-black-50 border-2 font-bold border-black-50 bg-amber-50'

  function mostarOcultar(id){
    const padre = document.getElementById(id); // Obtiene el padre del botón
    const ul = padre.querySelector('ul'); // Busca el <ul> dentro del padre
    ul.hidden = !ul.hidden; // Alterna la visibilidad del <ul>
  }

    return (
      <section className={`mx-auto mt-16 flex flex-col items-center justify-center gap-4 max-w-2xl rounded-2xl p-4 ${experienceClass}`}>
        <h1 className="font-extrabold text-3xl self-center">Experiencia laboral</h1>
       
        <article className="flex flex-col gap-4 w-full">
          {/* Título alineado al inicio */}
          <span className="font-semibold text-2xl underline self-start">Infofive S.L - 4 años y 9 meses</span>
          
          {/* Fechas alineadas al final */}
      <strong className="self-start">Desde Febrero del 2020</strong>

        <section className='self-start' id='infofive'>
          
          <button className=" hover:bg-emerald-300" onClick={() => mostarOcultar('infofive')}>
            <PlusSquare />
          </button>
          <span className="font-light p-1">Desempeñando las siguientes tareas entre otras :</span>


           
          <ul className="self-center" hidden>
            <li className="font-light flex items-center gap-2">
              <Check /> Desarrollo y mantenimiento de aplicaciones en .NET con visual basic , C# , Blazor, LINQ, Entity Framework y Bootstrap.
            </li>
            <li className="font-light flex items-center gap-2">
              <Check /> Gestión y mantenimiento de bases de datos SQL Server. uso de vistas, procedimientos almacenados y funciones
            </li>
            <li className="font-light flex items-center gap-2">
              <Check /> Desarrollo de informes tanto con crystal reports como para análisis de datos con conexiones excel obdc
            </li>
        
          </ul>

        </section>
      
         
  
          {/* Fecha final alineada al final */}
          <strong className="self-start">Hasta Septiembre del 2024</strong>
        </article>
      </section>
    );
  };
export default Experience;