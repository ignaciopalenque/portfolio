import React from 'react';
import SpringOriginalWordmark from 'devicons-react/lib/icons/SpringOriginalWordmark';
import DotNetPlainWordmark from 'devicons-react/lib/icons/DotNetPlainWordmark';
import CsharpOriginal from 'devicons-react/lib/icons/CsharpOriginal';
import BlazorOriginal from 'devicons-react/lib/icons/BlazorOriginal';
import JavascriptOriginal from 'devicons-react/lib/icons/JavascriptOriginal';
import PhpOriginal from 'devicons-react/lib/icons/PhpOriginal';
import NodejsPlainWordmark from 'devicons-react/lib/icons/NodejsPlainWordmark';
import LaravelOriginalWordmark from 'devicons-react/lib/icons/LaravelOriginalWordmark';
import Html5Original from 'devicons-react/lib/icons/Html5Original';
import Css3Original from 'devicons-react/lib/icons/Css3Original';
import BootstrapOriginal from 'devicons-react/lib/icons/BootstrapOriginal';
import TailwindcssOriginal from 'devicons-react/lib/icons/TailwindcssOriginal';
import MicrosoftsqlserverOriginal from 'devicons-react/lib/icons/MicrosoftsqlserverOriginal';
import MysqlOriginalWordmark from 'devicons-react/lib/icons/MysqlOriginalWordmark';
import MariadbOriginalWordmark from 'devicons-react/lib/icons/MariadbOriginalWordmark';
import ApacheOriginalWordmark from 'devicons-react/lib/icons/ApacheOriginalWordmark';
import DockerOriginal from 'devicons-react/lib/icons/DockerOriginal';
import MongodbOriginal from 'devicons-react/lib/icons/MongodbOriginal';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import styled from 'styled-components'


const Skills = ({modOscuro}) =>{

   let skillsClass =modOscuro ? ' text-amber-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] bg-gray-800' : ' text-black-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-amber-50'
   let skillsClasShadow = modOscuro ? 'hover:shadow-[0_0_10px_2px_rgba(255,255,255,0.5)]' : 'hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]'
   const rocketEmoji = '\u{1F680}'; // Cohete

   const SectionStyled = styled.section`
   @media (max-width: 640px) {
     max-width: calc(100% - 10px);
     margin: 0 auto;
   }
   `


    return(

        <SectionStyled>
        
        <section id='skills' className={`mx-auto mt-24 
        flex flex-col items-center justify-center 
        gap-4 
        lg:max-w-4xl 
        md:max-w-3xl
        sm:max-w-2xl
        scroll-mt-24
        rounded-2xl p-4 ${skillsClass}`}>
        
        <section className="flex flex-row items-center justify-center gap-4">

        <h1 className="font-extrabold lg:text-3xl text-xl">Skills {rocketEmoji}</h1>

        </section>
        
        <section className="flex flex-row flex-wrap items-center justify-center text-center p-4 gap-6"> 


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span> VB.NET</span>
            <a href = 'https://es.wikipedia.org/wiki/Visual_Basic_.NET' 
            target="_blank" 
            rel="noopener noreferrer" 
            title='Ver más sobre Visual Basic .NET'
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <DotNetPlainWordmark 
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span> C#</span>
            <a href = 'https://es.wikipedia.org/wiki/C_Sharp'
            target="_blank" 
            rel="noopener noreferrer" 
            title='Ver más sobre C#'
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <CsharpOriginal 
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span> Blazor</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Blazor' 
            target="_blank" 
            rel="noopener noreferrer" 
            title='Ver más sobre Blazor'
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <BlazorOriginal 
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Spring boot</span>
            <a 
            href = 'https://en.wikipedia.org/wiki/Spring_Boot' 
            target="_blank" 
            rel="noopener noreferrer" 
            title='Ver más sobre Spring Boot'
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <SpringOriginalWordmark  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>



            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>PHP</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/PHP' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre PHP' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <PhpOriginal 
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

    
            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Javascript</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/JavaScript' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre Javascript' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <JavascriptOriginal  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>React Vite</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/React' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre React' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <ReactOriginal  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

       

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>NodeJs Express</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Node.js' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre NodeJs'
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <NodejsPlainWordmark  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>




            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Laravel</span>
            <a            
             href = 'https://es.wikipedia.org/wiki/Laravel' 
             target="_blank" 
             rel="noopener noreferrer"
             title='Ver más sobre Laravel'
             className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <LaravelOriginalWordmark 
             className="transition-transform duration-300 hover:scale-110" 
             size="100" />           
             </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>HTML</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/HTML' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre HTML' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <Html5Original  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>CSS</span>
            <a
            href = 'https://es.wikipedia.org/wiki/CSS' 
            target="_blank" 
            rel="noopener noreferrer" 
            title='Ver más sobre CSS'
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <Css3Original  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>



            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Bootstrap</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Bootstrap_(framework)' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre Bootstrap' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <BootstrapOriginal  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span className='text-center'>Tailwindcss</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Tailwind_CSS' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre Tailwindcss' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <TailwindcssOriginal  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Microsoft SQL Server</span>
            <a
             href = 'https://es.wikipedia.org/wiki/Microsoft_SQL_Server' 
             target="_blank" 
             rel="noopener noreferrer"
             title='Ver más sobre Microsoft SQL Server' 
             className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <MicrosoftsqlserverOriginal  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

        
            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Mysql</span>
            <a
             href = 'https://es.wikipedia.org/wiki/MySQL' 
             target="_blank" 
             rel="noopener noreferrer"
             title='Ver más sobre Mysql' 
             className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <MysqlOriginalWordmark  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

                
            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>MariaDB</span>
            <a
             href = 'https://es.wikipedia.org/wiki/MariaDB' 
             target="_blank" 
             rel="noopener noreferrer"
             title='Ver más sobre MariaDB'
             className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <MariadbOriginalWordmark  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>MongoDB</span>
            <a 
             href = 'https://es.wikipedia.org/wiki/MongoDB' 
             target="_blank" 
             rel="noopener noreferrer"
             title='Ver más sobre MongoDB' 
             className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <MongodbOriginal  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Apache</span>
            <a
            href = 'https://es.wikipedia.org/wiki/Servidor_HTTP_Apache' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre Apache' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <ApacheOriginalWordmark  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>


            <article 
            className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Docker</span>
            <a
            href = 'https://es.wikipedia.org/wiki/Docker_(software)' 
            target="_blank" 
            rel="noopener noreferrer"
            title='Ver más sobre Docker' 
            className={`p-4 hover:outline-2 rounded-2xl outline-green-200 ${skillsClasShadow}`}>
            <DockerOriginal  
            className="transition-transform duration-300 hover:scale-110" 
            size='100' />
            </a>
            </article>

      
        </section>
     

      </section>
      </SectionStyled>



    );

}
export default Skills