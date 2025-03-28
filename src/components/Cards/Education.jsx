import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Education = ({modOscuro}) => { 
    let educationClass = modOscuro ? ' text-amber-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(255,255,255,0.5)] bg-gray-800' : ' text-black-50 border-2 font-bold border-green-200 shadow-[0_0_10px_2px_rgba(0,0,0,0.3)] bg-amber-50'
    let iconClass = modOscuro ? 'text-amber-50' : 'text-black'
    const SectionStyled = styled.section`
    @media (max-width: 640px) {
        max-width: calc(100% - 10px);
        margin: 0 auto;
    }
    `
    return (
        <SectionStyled>
        <section id='education' className={`mx-auto 
        mt-24 
        flex flex-col items-start justify-items-start gap-4
        lg:max-w-4xl 
        md:max-w-3xl
        sm:max-w-2xl
        scroll-mt-24
        rounded-2xl p-4 ${educationClass}`}>
             
            <h1 className="font-extrabold lg:text-3xl text-xl text-center self-center">Formación</h1>
                
            <article className='flex flex-row items-start justify-items-start gap-8'>

                        <section>
                        <FontAwesomeIcon icon={faGraduationCap} className={`text-2xl border-2 border-green-200 rounded-e-full p-1.5 ${iconClass}`} />
                        <figure className="w-px h-20 bg-gray-300"></figure>
                        </section>
                        <section className='flex-grow' >
                            <h1 className="font-semibold text-2xl">CFGM Sistemas Microinformáticos y Redes</h1>
                            <span className="font-light">I.E.S Juan Bosco en Alcázar de San Juan</span><br />
                            <span className="font-light">Desde 2010 hasta 2012</span>
                        </section>

            </article>
                    

            <article className='flex flex-row items-center justify-center gap-8'>

                        <section>
                        <FontAwesomeIcon icon={faGraduationCap} className={`text-2xl border-2 border-green-200 rounded-e-full p-1.5 ${iconClass}`} />
                        <figure className="w-px h-20 bg-gray-300"></figure>
                        </section>
                        <section className='flex-grow' >
                            <h1 className="font-semibold text-2xl">CFGS Administración de Sistemas Informáticos en Red</h1>
                            <span className="font-light">I.E.S Julian Zarco en Mota del Cuervo</span><br />
                            <span className="font-light">Desde 2012 hasta 2014</span>
                        </section>

            </article>  

            
            <article className='flex flex-row items-center justify-center gap-8'>

                        <section>
                        <FontAwesomeIcon icon={faGraduationCap} className={`text-2xl border-2 border-green-200 rounded-e-full p-1.5 ${iconClass}`} />
                        <figure className="w-px h-20 bg-gray-300"></figure>
                        </section>
                        <section className='flex-grow' >
                            <h1 className="font-semibold text-2xl">CFGS Mantenimiento Electrónico</h1>
                            <span className="font-light">I.E.S Juan Bosco en Alcázar de San Juan</span><br />
                            <span className="font-light">Desde 2015 hasta 2017</span>
                        </section>

            </article> 


            
            <article className='flex flex-row items-center justify-center gap-8'>

                        <section>
                        <FontAwesomeIcon icon={faGraduationCap} className={`text-2xl border-2 border-green-200 rounded-e-full p-1.5 ${iconClass}`} />
                        <figure className="w-px h-20 bg-gray-300"></figure>
                        </section>
                        <section className='flex-grow' >
                        <h1 className="font-semibold text-2xl">CFGS Desarrollo de Aplicaciones Multiplataforma</h1>
                        <span className="font-light">I.E.S Juan Bosco en Alcázar de San Juan</span><br />
                        <span className="font-light">Desde 2017 hasta 2019</span>
                        </section>

            </article> 


                        
            <article className='flex flex-row items-center justify-center gap-8'>

                        <section>
                        <FontAwesomeIcon icon={faGraduationCap} className={`text-2xl border-2 border-green-200 rounded-e-full p-1.5 ${iconClass}`} />
                        <figure className="w-px h-20 bg-gray-300"></figure>
                        </section>
                        <section className='flex-grow' >
                        <h1 className="font-semibold text-2xl">CFGS Desarrollo de Aplicaciones Web</h1>
                        <span className="font-light">I.E.S Juan Bosco en Alcázar de San Juan</span><br />
                        <span className="font-light">Desde 2024 hasta la Actualidad</span>
                        </section>

            </article> 



            </section>
        </SectionStyled>
    );
}
export default Education;