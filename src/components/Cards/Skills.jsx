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


const Skills = ({modOscuro}) =>{

   let skillsClass = modOscuro ? '  text-amber-50 border-2 font-bold border-amber-50 bg-gray-800' : ' text-black-50 border-2 font-bold border-black-50 bg-amber-50'

    return(
        
        <section className={`mx-auto mt-16 flex flex-col items-center justify-center gap-4 max-w-2xl rounded-2xl p-4 ${skillsClass}`}>
        
        <section className="flex flex-row items-center justify-center gap-4">

        <h1 className="font-extrabold text-3xl">Skills</h1>

        </section>
        
        <section className="flex flex-row flex-wrap items-center justify-items-start p-4 gap-4"> 


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span> VB.NET</span>
            <a href = 'https://es.wikipedia.org/wiki/Visual_Basic_.NET' target="_blank" rel="noopener noreferrer" 
            className='p-4 hover:hover:border-2 rounded-2xl border-green-200 '>
            <DotNetPlainWordmark size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span> C#</span>
            <a href = 'https://es.wikipedia.org/wiki/C_Sharp' target="_blank" rel="noopener noreferrer" 
            className='p-4 hover:hover:border-2 rounded-2xl border-green-200'>
            <CsharpOriginal size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span> Blazor</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Blazor' target="_blank" rel="noopener noreferrer" 
            className='p-4 hover:hover:border-2 rounded-2xl border-green-200'>
            <BlazorOriginal size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Spring boot</span>
            <a 
            href = 'https://en.wikipedia.org/wiki/Spring_Boot' target="_blank" rel="noopener noreferrer" 
            className='p-4 hover:hover:border-2 rounded-2xl border-green-200'>
            <SpringOriginalWordmark  size='100' />
            </a>
            </article>



            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>PHP</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/PHP' target="_blank" rel="noopener noreferrer" 
            className='p-4 hover:hover:border-2 rounded-2xl border-green-200'>
            <PhpOriginal  size='100' />
            </a>
            </article>

    
            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Javascript</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/JavaScript' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <JavascriptOriginal  size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>React Vite</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/React' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <ReactOriginal  size='100' />
            </a>
            </article>

       

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>NodeJs Express</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Node.js' target="_blank" rel="noopener noreferrer" 
            className='p-4 hover:border-2 rounded-2xl border-green-200'>
            <NodejsPlainWordmark  size='100' />
            </a>
            </article>




            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Laravel</span>
            <a            
             href = 'https://es.wikipedia.org/wiki/Laravel' target="_blank" rel="noopener noreferrer" 
             className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <LaravelOriginalWordmark  size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>HTML</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/HTML' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <Html5Original  size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>CSS</span>
            <a
            href = 'https://es.wikipedia.org/wiki/CSS' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <Css3Original  size='100' />
            </a>
            </article>



            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Bootstrap</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Bootstrap_(framework)' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <BootstrapOriginal  size='100' />
            </a>
            </article>


            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Tailwindcss</span>
            <a 
            href = 'https://es.wikipedia.org/wiki/Tailwind_CSS' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <TailwindcssOriginal  size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Microsoft SQL Server</span>
            <a
             href = 'https://es.wikipedia.org/wiki/Microsoft_SQL_Server' target="_blank" rel="noopener noreferrer" 
             className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <MicrosoftsqlserverOriginal  size='100' />
            </a>
            </article>

        
            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Mysql</span>
            <a
             href = 'https://es.wikipedia.org/wiki/MySQL' target="_blank" rel="noopener noreferrer" 
             className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <MysqlOriginalWordmark  size='100' />
            </a>
            </article>

                
            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>MariaDB</span>
            <a
             href = 'https://es.wikipedia.org/wiki/MariaDB' target="_blank" rel="noopener noreferrer" 
             className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <MariadbOriginalWordmark  size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>MongoDB</span>
            <a 
             href = 'https://es.wikipedia.org/wiki/MongoDB' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <MongodbOriginal  size='100' />
            </a>
            </article>

            <article className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Apache</span>
            <a
            href = 'https://es.wikipedia.org/wiki/Servidor_HTTP_Apache' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <ApacheOriginalWordmark  size='100' />
            </a>
            </article>


            <article 
            className="flex flex-col gap-4 w-40 p-1 justify-center items-center  hover:text-green-200">
            <span>Docker</span>
            <a
            href = 'https://es.wikipedia.org/wiki/Docker_(software)' target="_blank" rel="noopener noreferrer" 
            className=' p-4 hover:border-2 rounded-2xl border-green-200'>
            <DockerOriginal  size='100' />
            </a>
            </article>

      
        </section>
     

      </section>



    );

}
export default Skills