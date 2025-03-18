import React from 'react';
import { Linkedin }  from  'iconoir-react' 
import { Github }  from  'iconoir-react' 
const Social = () => {  
  return (
    <section className="fixed flex flex-col px-6 py-6  gap-4 items-center justify-center text-amber-50 bg-black border rounded-e-xl border-amber-50">
      <a href="https://www.linkedin.com/in/ignacio-palenque-tronco-30a1aa206/" target="_blank" rel="noreferrer">
        <i className="fab fa-linkedin"></i><Linkedin/>Linkedin
      </a>
      <a href="
      https://www.github.com/your-github" target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i><Github/>Github
      </a>

    </section>
  );
}
export default Social;