import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";


const Contact = () => {
/*  
  const motionform = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1senexc', 'template_3h637lz', motionform.current, 'Jy1OC0MtpdlyKaosU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
   href={motionform} onSubmit={sendEmail}      
*/
  return (
      <div className="h-full bg-primary/30 mt-[40px]">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full" >
           {/* text  && form*/}
          <div className="flex flex-col w-full max-w-[700px]">
            {/* text */}
            <motion.h2 variants={fadeIn('up', 0.2)}
              initial="hidden" 
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12">
              Vamos <span className="text-accent">   Hablar.</span><br></br>
              <p className="text-accent  text-lg">Formulario desabilitado por ahora contactar a walterdevcontact@gmail.com </p>
            </motion.h2>
            {/* form */}
            
            <motion.form      
           
            variants={fadeIn('up', 0.4)}
            initial="hidden" 
            animate="show"
            exit="hidden"            
            className="flex-1 flex flex-col gap-6 w-full mx-auto">                   
                {/* input group */}
                <div className="flex gap-x-6 w-full">
                    <input type="text" placeholder="nombre" className="input"  name="user_name"required></input>
                    <input type="email" placeholder="mail" className="input" name="user_email" required></input>
                </div>
                <input type="text" placeholder="referencia" className="input" name="reference" required></input>
                <textarea type="text" placeholder="mensaje" className="textarea"  name="message" required></textarea>
                <button type="submit" value="Send" className="btn rounded-full border border-white/50 max-w-[250px]
                px-8 transition-all duration-300 flex items-center justify-center
                overflow-hidden hover:border-accent group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                    Enviar Mensaje 
                  </span>
                  <BsArrowRight className="-tranlate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 
                  group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"></BsArrowRight>
                </button>                            
            </motion.form>    
                      
          </div>
        </div>
  </div> 
  );
};

export default Contact;
