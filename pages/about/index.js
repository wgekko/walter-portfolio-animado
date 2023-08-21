/* eslint-disable react/jsx-key */
import React, {useState} from 'react';

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';


// framer motion 
import {motion } from 'framer-motion';
import {fadeIn } from '../../variants';

// counters 
import Countup from 'react-countup';

import {
  RiStockFill
} from 'react-icons/ri';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,  
  FaFigma,
  FaJava,
  FaDatabase,
  FaMoneyBillAlt,
  FaNodeJs
} from 'react-icons/fa';

import {
  SiNextdotjs,  
  SiTypescript,
  SiJquery,
  SiAdobexd,
  SiAdobephotoshop,
  SiPython,
  SiFastapi,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiPhp,
  SiMicrosoftoffice,
  SiPowerbi,
  SiSimpleanalytics,
  SiAdminer
,} from 'react-icons/si';


//  data
const aboutData = [
  {
    title: 'Habilidades',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiTypescript />,
          <SiJquery />,
          <FaFigma />
          
        ],
      },
      {
        title: 'Backend Development',
        icons: [          
          <SiPython />,
          <SiFastapi />,
          <FaJava />,
          <FaNodeJs/>, 
          <SiSpring />,
          <iSpringboot/>,
          <SiSpringsecurity />,
          <SiPhp />,
          <FaDatabase />
        ],
      },
      {
        title: 'Finanzas/Administración',
        icons: [
          <SiMicrosoftoffice/>,
          <SiPowerbi />,
          <SiSimpleanalytics />,
          <RiStockFill />,
          <FaMoneyBillAlt/>,                   
        ],
      },
    ],
  },
  {
    title: 'cursos',
    info: [
      {
        title: 'Angular (beginners/expert)- Udemy',
        stage: '2023 (52 hs)',
      },
      {
        title: 'Spring Framework/Spring Boot- Udemy',
        stage: '2023 (74hs)',
      },
      {
        title: 'Java (beginners/expert)- Udemy',
        stage: '2023 (106hs)',
      },
      {
        title: 'Python-DataScience OCI/Oracle Analytics- Oracle',
        stage: '2022 (96hs)',
      },
      {
        title: 'Formación Oracle Cloud Infrastructure-Alura Oracle',
        stage: '2022 (19hs)',
      },
      {
        title: 'Python-Framework Django/Flask/PostgreSQL, Udemy',
        stage: '2022 (71hs)',
      },
      {
        title: 'JavaScript (beginners/expert)- Udemy',
        stage: '2022 (36hs)',
      },
      {
        title: 'Python (beginners/expert)- Udemy',
        stage: '2022 (18hs)',
      },
    ],
  },
  {
    title: 'experiencia',
    info: [
      {
        title: 'Fullstack Developer-Freelance/Financial Consultant',
        stage: '2022 - actual',
      },
      {
        title: 'Jefe Adm/Finanzas- Altos de Vistalba S.A.',
        stage: '2008 - 2022',
      },
      {
        title: 'Operador/analista Mercados, Bancos/Emp Bursátiles',
        stage: '1986 - 2007',
      },
    ],
  },
  {
    title: 'credenciales',
    info: [
      {
        title: 'FullStack Java-Alura Latam-Oracle, Brasil',
        stage: '2022 (500 hs)',
      },
      {
        title: 'FullStack Java-Egg Cooperation, Argentina',
        stage: '2021 (500 hs)',
      },
      {
        title: 'Experto Univ. PHP-UTN-FRBA, Argentina',
        stage: '2019 (180 hs)',
      },
      {
        title: 'Experto Mercado de Capitales-UTN-FRBA, Argentina',
        stage: '2016 (94 hs)',
      },
      {
        title: 'Lic Adm Empresas-Cs Econ.-(UNC), Arg.',
        stage: ' 1986-1990 (en curso)',
      },
    ],
  },
];



const About = () => {
  const [index, setIndex] = useState(0);

  return( 
    <div className="h-full  bg-primary/30 py-32 text-center xl:text-left ">
      <Circles/>
      {/* avatar img*/}
      <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial="hidden" 
      animate="show" 
      exit="hidden" 
      className="hidden xl:flex absolute bottom-0 -left-[370px]"> 
        <Avatar/>
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-[35px]">  
          {/* texto*/}
          <div className='flex-1 flex flex-col justify-center '>
           <motion.h2 
            variants={fadeIn('right', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
           className='h2'>Fascinantes <span className=' text-accent'>Desafíos</span> dan origen a soluciones digitales magnificas</motion.h2>    
           <motion.p 
            variants={fadeIn('right', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
           className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-6 px-2 xl:px-0'>Con más de 30 años en el mercado financiero y hace 2 años comencé a trabajar como Developer Freelance, desde entonces 
            he realizado trabajos remotos para distintos clientes, y asesorando a empresas, colaborando con productos digitales orientados a finanzas y consumo
            </motion.p>  
             {/* counters*/}
            <motion.div 
             variants={fadeIn('right', 0.6)} 
             initial="hidden" 
             animate="show" 
             exit="hidden"             
             className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div  className='flex flex-1 xl:gap-x-4'>
                {/* experience */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'> 
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <Countup start={0} end={30} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Años de Experiencia
                  </div>
                </div>
                {/* Proyectos */}
                <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'> 
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <Countup start={0} end={7} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Proyectos terminados(IT)
                  </div>
                </div> 
                  {/* Empresas  */}
                  <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'> 
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                    <Countup start={0} end={18} duration={5}/> +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                    Empresas/clientes asesoradas(IT)
                  </div>
                </div>              
              </div>             
            </motion.div>
          </div>
          {/* info*/}
          <motion.div 
           variants={fadeIn('left', 0.4)} 
           initial="hidden" 
           animate="show" 
           exit="hidden" 
          
          className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                {aboutData.map((item, itemIndex) =>{
                  return (
                  <div  key={itemIndex} 
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute  after:-bottom-1 after:left-0`}
                   onClick={() => setIndex(itemIndex)}
                   >
                    {item.title}
                  </div>
                  );
                })}
              </div>
              <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'> 
                {aboutData[index].info.map((item, itemIndex) =>{
                  return ( 
                  <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'> 
                       {/* title*/}
                       <div className='font-light mb-2 md:mb-0'>{item.title} </div>
                       <div className='hidden md:flex'>-</div>
                       <div className=''>{item.stage}</div>
                       <div className='flex gap-x-4'>
                       {/* title*/}
                       {item.icons?.map((icon, itemIndex)=> {
                          return   <div className='text-2xl text-white'>{icon} </div>;
                       })}
                       </div>
                  </div>   
                  );
                })}
              </div>
          </motion.div>
      </div> 
    </div>
  
  );
};

export default About;
