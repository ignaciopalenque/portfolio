import React from 'react';
import me  from '../../assets/img/me.webp'
import styled from 'styled-components'

const AboutMe = ({modOscuro}) => {

  let aboutMeClass = modOscuro ? ' text-amber-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] bg-gray-800' : ' text-black-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-amber-50'
  let imgClass = modOscuro ? 'border-2 border-amber-50 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]' : 'border-2 border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]'
  const maleWavingEmoji = '\u{1F64B}\u200D\u2642\uFE0F'; // Hombre saludando
  const SectionStyled = styled.section`
  @media (max-width: 640px) {
    max-width: calc(100% - 10px);
    margin: 0 1px;

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
      lg:scroll-mt-24
      md:scroll-mt-60
      sm:scroll-mt-80
      rounded-2xl p-4 ${aboutMeClass}`}>
      <h1 className="font-extrabold lg:text-3xl text-xl">Sobre mí {maleWavingEmoji}</h1>
      <section className="flex lg:flex-row flex-col items-center justify-center gap-4">
        <img className={`border-2 object-cover ${imgClass}`} src={me} width="200px" alt="" />
        <section className="flex flex-col items-center justify-center text-justify hyphens-auto leading-relaxed gap-4">
        <p>
        Hola a todos, soy José Ignacio Palenque, tengo actualmente 32 años y soy desarrollador de software con casi cinco años de experiencia laboral en el mundo del desarrollo multiplataforma y más especificamente para la plataforma .net <a className="text-red-600  hover:text-green-200" href="https://dotnet.microsoft.com/es-es/learn/dotnet/what-is-dotnet" target='_blank'> saber mas...</a> 
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