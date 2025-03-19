import titleImg from '../../assets/img/programmer.webp'; //importamos la imagen del programador
import styled from 'styled-components'

const Title = ({modOscuro}) => {
  
  let titleClass = modOscuro ? ' text-cyan-50' : ' text-black-50'

  const SectionStyled = styled.section`
  @media (max-width: 640px) {
    margin-top: 300px;
  }
  `
  return(
  <SectionStyled>
  <section className=' lg:mt-36
   md:mt-50
   sm:mt-70
   w-screen flex flex-col justify-center items-center px-6 py-6'

   
   >
  <h1 className={`lg:text-7xl 
  md:text-4xl
  sm:text-3xl
 font-extrabold ${titleClass}`}>Desarrollador de Software</h1>
  <section className='flex flex-row flex-wrap gap-4 items-center justify-center'>
  <h1 className="
  lg:text-6xl 
  md:text-3xl
  sm:text-2xl
   font-extrabold bg-gradient-to-b from-blue-500 to-green-500 bg-clip-text text-transparent">FullStacks</h1>
  <img src={titleImg} width="100px"  alt="Icono de avatar programador" />
  </section>

</section>
</SectionStyled>
)
}

export default Title; //exportamos el componente Title