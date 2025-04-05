import titleImg from '../../assets/img/programmer.webp'; //importamos la imagen del programador
import styled from 'styled-components'
import '@fontsource/gochi-hand';
import { Emoji } from 'emoji';


const Title = ({modOscuro}) => {
  
  let titleClass = modOscuro ? ' text-cyan-50' : ' text-black-50'
  const programmerEmoji = '\u{1F468}\u200D\u{1F4BB}'; // Hombre programador
  const rocketEmoji = '\u{1F680}'; // Cohete
  const SectionStyled = styled.section`

    font-family: 'monospace',system-ui ,sans-serif;

  @media (max-width: 640px) {
    margin-top: 300px;
    max-width: calc(100% - 10px);
    margin-left: 10px;
    margin-right: 10px;

    #textDev{
      font-size: 50px;
    }
    #textFullStacks{
      font-size: 40px;

    }
  }
  `
  return(
  <SectionStyled>
  <section className=' lg:mt-36
   md:mt-50
   sm:mt-70
   w-screen flex flex-col justify-center items-center px-6 py-6'

   
   >
  <h1 id='textDev' className={`lg:text-7xl
  md:text-6xl 
  sm:text-5xl
  font-extrabold ${titleClass}`}>Desarrollador de Software</h1>
  <section className="flex flex-row flex-wrap gap-4 items-center justify-center ">
  <h1 id='textFullStacks' className="
  lg:text-6xl
  md:text-5xl
  sm:text-4xl
  font-extrabold 
  bg-gradient-to-b from-blue-500 to-green-500 
  bg-clip-text text-transparent " style={{ fontFamily: 'Gochi Hand, monospace, sans-serif',  fontSize: 'clamp(4rem, 6vw, 8rem)'}}>FullStacks! </h1>
  <img src={titleImg} width="100px"  alt="Icono de avatar programador" />
  </section>

</section>
</SectionStyled>
)
}

export default Title; //exportamos el componente Title