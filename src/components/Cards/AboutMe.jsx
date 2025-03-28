import React from 'react';
import me  from '../../assets/img/me.webp'
import styled from 'styled-components'

const AboutMe = ({modOscuro}) => {

  let aboutMeClass = modOscuro ? ' text-amber-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] bg-gray-800' : ' text-black-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-amber-50'
  let imgClass = modOscuro ? 'border-2 border-amber-50 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]' : 'border-2 border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]'

  const SectionStyled = styled.section`
  @media (max-width: 640px) {
    max-width: calc(100% - 10px);
    margin: 0 auto;
  }
  `


  return (
    <SectionStyled>
    <section id='aboutMe' className={`mx-auto 
      mt-24 
      flex flex-col items-center justify-center gap-4
      lg:max-w-4xl 
      md:max-w-3xl
      sm:max-w-2xl
      scroll-mt-24
      rounded-2xl p-4 ${aboutMeClass}`}>
      <h1 className="font-extrabold lg:text-3xl text-xl">Sobre mí</h1>
      <section className="flex lg:flex-row flex-col items-center justify-center gap-4">
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
    </SectionStyled>

  );
}
export default AboutMe;