//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

import {
  FaDev,
} from "react-icons/fa";

import {
  MdDeveloperMode,  
} from "react-icons/md";

import {
  SiDatabricks,
  SiAutomattic
} from "react-icons/si"

// import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <MdDeveloperMode />,
    title: "Web Developer",
    description: "Crear páginas web estáticas-dinámicas, funcionales y modernas."
  },
  {
    icon: <FaDev />,
    title: "Backend Developer",
    description: "Desarrollo de lógica y soluciones a sitios web desde servidores."
  },
  {
    icon: <SiDatabricks />,
    title: "DataScience",
    description: "Analizar bases de datos con modelos estadísticos."
  },
  {
    icon: <RxDesktop />,
    title: "Finanzas",
    description: "Presupuestos, mercados financieros, proyectos de inversión."
  },
  {
    icon: <RxReader />,
    title: "Administración",
    description: "Planificar objetivos, gestión de equipos, procesos y resultados ."
  },
  {
    icon: <SiAutomattic/>,
    title: "Automatización Digital",
    description: "Aplicaciones digitales sobre tareas repetitivas."
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 }
      }}
      FreeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)]
             h-max rounded-lg px-6 
             py-8 flex sm:flex-col 
             gap-x-6 sm:gap-x-0 group cursor-pointer
            hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/*icon*/}
              <div className="text-4xl text-accent mb-4" >{item.icon}</div>
              {/*title & descrition */}
              <div className="mb-8">
                <div className="mb-2  text-lg" >{item.title}</div>
                <p className="max-x-[350px] leading-normal"> {item.description}</p>
              </div>
              {/* arrow*/}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
