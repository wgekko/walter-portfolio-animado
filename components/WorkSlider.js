//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
//import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Dashboard/JWT",
          path: "/img-1.png"
        },
        {
          title: "Movie-app",
          path: "/img-2.png"
        },
        {
          title: "APP-Chat",
          path: "/img-3.png"
        },
        {
          title: "Biblioteca",
          path: "/img-java.png"
        }
      ]
    },
    {
      images: [
        {
          title: "Dashboard/JWT",
          path: "/img-5.png"
        },
        {
          title: "Sistema-solar",
          path: "/img-6-1.png"
        },
        {
          title: "Chat-Bot",
          path: "/img-4.png"
        },
        {
          title: "Sistema-Empleados",
          path: "/img-php.png"
        }
      ]
    }
  ]
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image*/}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient*/}
                      <div
                        className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] 
                      opacity-0 group-hover:opacity-80 transition-all duration-700"
                      >
                        {/* title*/}
                        <div
                          className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 
                        group-hover:xl:-translate-y-20 transition-all duration-300 ml-[55px] "
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1*/}
                            <div className="delay-100"> ver en GitHub</div>
                            {/* title part 2*/}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              Proyecto
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200" >< BsArrowRight /> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
