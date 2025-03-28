import React, {useState} from 'react';
import { Linkedin }  from  'iconoir-react' 
import { Mail }  from  'iconoir-react' 

import { Github }  from  'iconoir-react'  
import { LightBulbOn }  from  'iconoir-react' 
import { HalfMoon }  from  'iconoir-react' 
import { Menu }  from  'iconoir-react' 
import styled from 'styled-components'



const Navbar =({cambiarTema, modOscuro})=>{

    let navbarClass = modOscuro ? ' bg-gray-800 border-b-2  border-amber-50   text-amber-50' : 'bg-amber-50 border-b-2   border-b-black text-gray-800'
    let btnModeClass = modOscuro ? ' border-amber-50 bg-yellow-800' : 'border-black-50'
    let btnGitClass = modOscuro ? ' hover:bg-amber-950 ' : 'hover:bg-red-400 '
    let btnMailClass = modOscuro ? ' hover:bg-yellow-400 ' : 'hover:bg-yellow-400 '

    const [menuVisible, setMenuVisible] = useState(true); // Estado para controlar la visibilidad del menú
    const SectionStyled = styled.section`
    @media (max-width: 640px) {

    #btnMenu{
    display: block;
    visibility: visible;}

    #sectioNav{
        display: ${menuVisible ? 'flex' : 'none'};
        visibility: ${menuVisible ? 'visible' : 'hidden'};

    }



    `;

    

 /*


    const mostrarMenu = ()=>{
        hiddenMenu = !hiddenMenu;

        if(hiddenMenu){
            document.getElementById('sectioNav').style.display = 'flex'
            document.getElementById('sectioNav').className = 'flex flex-row flex-wrap gap-6'
            document.getElementById('sectioNav').style.visibility = 'visible'
        }else{
            document.getElementById('sectioNav').style.display = 'none'
            document.getElementById('sectioNav').style.visibility = 'hidden'
        }
    }


 */

    const mostrarMenu = ()=>{
        setMenuVisible(!menuVisible);
 
    }
    


    return(
    <SectionStyled>
    <nav className={`fixed w-full top-0 z-50 opacity-95 left-0 px-6 py-6 
    flex lg:flex-row flex-wrap sm:flex-col gap-16 
    items-center justify-between font-semibold ${navbarClass}`}>
       
       <section className='flex flex-row gap-6 p-0'>
        <button id='btnMenu' onClick={mostrarMenu} className='hidden'>
        <Menu/>
        </button>
       <span>Portfolio Ignacio Palenque</span>
       </section>

        <section id='sectioNav' className='flex flex-row flex-wrap gap-6'>

        <a href="#aboutMe">
            <span  className=' hover:text-green-200 hover:underline' >Sobre mí</span>
        </a>
        <a href="#experience">        
            <span  className=' hover:text-green-200 hover:underline'>Experiencia</span>
        </a>
        <a href="#education">
            <span  className=' hover:text-green-200 hover:underline'>Formación</span>
        </a>
        
        <a href="#skills">
            <span  className=' hover:text-green-200 hover:underline'>Skills</span>
        </a>
        <span  className=' hover:text-green-200 hover:underline'>Proyectos</span>
        <span  className=' hover:text-green-200 hover:underline'>Curriculum</span>
        <a href='https://www.linkedin.com/in/ignacio-palenque-tronco-30a1aa206/' 
        target="_blank" 
        rel="noopener noreferrer" 
        title='Ver perfil en Linkedin'
        className='flex flex-row justify-center items-center w-8 
         hover:bg-blue-400 p-0.5 border-2 rounded-2xl'><Linkedin/></a>


        <a href = 'https://github.com/nachopalenque' 
        target="_blank" 
        rel="noopener noreferrer"  
        title='Ver perfil en Github' 
        className={`flex flex-row justify-center items-center w-8  p-0.5 border-2 rounded-2xl ${btnGitClass}`} >
        <Github/>
        </a>
       
        <a href = 'mailto:ignpalentr@tutamail.com"' 
        target="_blank" 
        rel="noopener noreferrer"  
        title='Ver perfil en Github' 
        className={`flex flex-row justify-center items-center w-8  p-0.5 border-2 rounded-2xl ${btnMailClass}`} >
        <Mail/>
        </a>
       
        <button 
        title='Alternar entre el tema oscuro y el tema claro'
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
    </SectionStyled>
)

}
export default Navbar   //exportamos el componente Navbar