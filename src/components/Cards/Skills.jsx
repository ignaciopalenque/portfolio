import React from 'react';
import DevIcon from "devicon-react-svg";

const Skills = () =>{

    return(
        
        <section className="mx-auto mt-16 flex flex-col items-center justify-center gap-4 max-w-2xl text-amber-50 border-2 font-bold border-amber-50 bg-gray-800 rounded-2xl p-4">
        
        <section className="flex flex-row items-center justify-center gap-4">

        <h1 className="font-extrabold text-3xl">Skills</h1>

        </section>
        
        <section className="flex flex-row items-center justify-items-start  gap-4"> 


            <article className="flex flex-col gap-4 w-40 p-1">
            <span> VB.NET C# BLAZOR</span>
            <DevIcon icon="dotnet" className="w-20  bg-amber-50 hover:bg-purple-500 p-2 " />
            </article>

            <article className="flex flex-col gap-4 w-40 p-1">
            <span>Java</span>
            <DevIcon icon="java" className="w-20  bg-amber-50 hover:bg-green-500 p-2 " />
            </article>

            <article className="flex flex-col gap-4 w-40 p-1">
            <span>JavaScript</span>
            <DevIcon icon="javascript" className="w-20  bg-amber-50 hover:bg-red-500 p-2 " />
            </article>

            <article className="flex flex-col gap-4 w-40 p-1">
            <span>CSS</span>
            <DevIcon icon="css3" className="w-20  bg-amber-50 hover:bg-blue-300 p-2 " />
            </article>
      
        </section>
     

      </section>



    );

}
export default Skills