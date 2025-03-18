import titleImg from '../../assets/img/programmer.webp'; //importamos la imagen del programador
const Title = ({modOscuro}) => {
  
  let titleClass = modOscuro ? ' text-cyan-50' : ' text-black-50'

  return(
  <section className=' mt-24 w-full flex flex-col justify-center items-center px-6 py-6'>
  <h1 className={`text-7xl font-extrabold ${titleClass}`}>Desarrollador de Software</h1>
  <section className='flex flex-row gap-4 items-center justify-center'>
  <h1 className="text-6xl font-extrabold bg-gradient-to-b from-blue-500 to-green-500 bg-clip-text text-transparent">FullStacks</h1>
  <img src={titleImg} width="100px"  alt="Icono de avatar programador" />
  </section>

</section>)
}

export default Title; //exportamos el componente Title