import React from 'react';
import me  from '../../assets/img/me.webp'
const AboutMe = ({modOscuro}) => {

  let aboutMeClass = modOscuro ? ' text-amber-50 border-2 font-bold border-amber-50 bg-gray-800' : ' text-black-50 border-2 font-bold border-black-50 bg-amber-50'
  let imgClass = modOscuro ? 'border-2 border-amber-50' : 'border-2 border-black'
  return (
    <section className={`mx-auto mt-16 flex flex-col items-center justify-center gap-4 max-w-2xl rounded-2xl p-4 ${aboutMeClass}`}>
      <h1 className="font-extrabold text-3xl">Sobre mí</h1>
      <section className="flex flex-row items-center justify-center gap-4">
        <img className={`border-2 object-cover ${imgClass}`} src={me} width="200px" alt="" />
        <section className="flex flex-col items-center justify-center text-justify hyphens-auto leading-relaxed gap-4">
        <p>
        Hola a todos, soy José Ignacio Palenque, tengo actualmente 32 años y soy desarrollador de software con casi cinco años de experiencia laboral en el mundo del desarrollo multiplataforma y más especificamente para la plataforma .net <a className="text-red-600  hover:text-green-200" href="https://www.microsoft.com/es-es"> saber mas...</a> 
        </p>
        <p>
        Nacido y con residencia en España, concretamente en Pedro Muñoz, un localidad de Ciudad Real.
        </p>
        <p>
        Me considero una persona seria, responsable y comprometida con mi trabajo, con ganas de seguir aprendiendo y mejorando en mi carrera profesional.
        </p>

        </section>


      </section>
    
    </section>
  );
}
export default AboutMe;