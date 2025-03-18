import { Linkedin }  from  'iconoir-react' 
import { Github }  from  'iconoir-react'  
import { LightBulbOn }  from  'iconoir-react' 
import { HalfMoon }  from  'iconoir-react' 

const Navbar =({cambiarTema, modOscuro})=>{

    let navbarClass = modOscuro ? ' bg-gray-800 border-b-2  border-amber-50   text-amber-50' : 'bg-amber-50 border-b-2   border-b-black text-gray-800'
    let btnModeClass = modOscuro ? ' border-amber-50' : 'bg-black-50'
return(
    
    <nav className={`fixed w-full top-0 z-50 opacity-80 left-0 px-6 py-6 flex flex-row gap-16 items-center justify-between font-semibold ${navbarClass}`}>
       
       <section className='flex flex-row gap-6 p-0'>
       <span>Portfolio Ignacio Palenque</span>
       </section>

        <section className='flex flex-row gap-6'>

        <span  className=' hover:text-green-200 hover:underline' >Sobre mí</span>
        <span  className=' hover:text-green-200 hover:underline'>Experiencia</span>
        <span  className=' hover:text-green-200 hover:underline'>Skils</span>
        <span  className=' hover:text-green-200 hover:underline'>Proyectos</span>
        <span  className=' hover:text-green-200 hover:underline'>Formación</span>
        <span  className=' hover:text-green-200 hover:underline'>Curriculum</span>
        <a href='https://www.linkedin.com/in/ignacio-palenque-tronco-30a1aa206/' target="_blank" rel="noopener noreferrer"  className='hover:bg-blue-400 p-1 border-2 rounded-2xl'><Linkedin/></a>
        <a href = 'https://github.com/nachopalenque' target="_blank" rel="noopener noreferrer"   className='hover:bg-amber-950 p-1 border-2 rounded-2xl' ><Github/></a>
        <button 
                onClick={cambiarTema}
                className={`w-18 p-0.5 flex flex-row justify-center items-center border-2 rounded-2xl hover:bg-emerald-300 ${btnModeClass}` }>
        {modOscuro ? (
            <>
                        <LightBulbOn/> / <HalfMoon/>

            </>
        ) : (
            <>
                         <HalfMoon/> /  <LightBulbOn/> 

            </>
        )}
        
        </button>
        </section>

    </nav>

)

}
export default Navbar   //exportamos el componente Navbar