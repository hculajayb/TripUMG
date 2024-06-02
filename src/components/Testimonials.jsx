import { Link } from "react-router-dom";
import { Star } from "../assets/icons";
import { Anthony, Yifei, kaori } from "../assets/images";

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            La opinión de los usuarios de  <span className="text-[#605DEC]">TripUMG</span>
          </h1>
        </div>

        <div className="flex flex-wrap gap-12 justify-start">

         <div className="flex-1 flex max-w-[410px] gap-2">
          <div className="w-[200px] h-[48px]">
            <img src={Yifei} alt="" className="rounded-full w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#6E7491] text-base">
            <h1>Yifei Chen</h1>
            <p>Seoul, South Korea | Abril 2019</p>
            </div>
            <div className="flex items-center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            </div>
            <p className="text-[#27273F] text-base">Fue una gran experiencia utilizar TripUMG. Reservé todos mis vuelos para mi año sabático a través de TripUMG y nunca tuve ningún problema. Cuando tuve que cancelar un vuelo por una emergencia, el soporte de TripUMG me ayudó... <span className="text-[#605DEC]"> seguir leyendo...</span></p>
          </div>
         </div>

         <div className="flex-1 flex max-w-[410px] gap-2">
          <div className="w-[200px] h-[48px]">
            <img src={kaori} alt="" className="rounded-full w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#6E7491] text-base">
            <h1>Kaori Yamaguchi</h1>
            <p>Honolulu, Hawaii | Febrero 2017</p>
            </div>
            <div className="flex items-center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            </div>
            <p className="text-[#27273F] text-base">Mi familia y yo visitamos Hawai cada año, y normalmente reservamos nuestros vuelos utilizando otros servicios. Un viejo amigo nos recomendó TripUMG, ¡y me alegro mucho de haberlo probado! El proceso fue fácil y <span className="text-[#605DEC]"> seguir leyendo...</span></p>
          </div>
         </div>

         <div className="flex-1 flex max-w-[410px] gap-2">
          <div className="w-[200px] h-[48px]">
            <img src={Anthony} alt="" className="rounded-full w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-[#6E7491] text-base">
            <h1>Anthony Lewis</h1>
            <p>Berlin, Alemania | Marzo 2019</p>
            </div>
            <div className="flex items-center">
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            </div>
            <p className="text-[#27273F] text-base">Cuando quise reservar mi vuelo a Berlín desde el aeropuerto de Los Ángeles, TripUMG me ofreció la mejor experiencia de navegación, así que decidí probarlo. Era la primera vez que utilizaba TripUMG, pero sin duda se lo recomendaría a un amigo y lo utilizaría para <span className="text-[#605DEC]"> seguir leyendo...</span></p>
          </div>
         </div>

        </div>
        <Link to='/hotels' className="flex items-center justify-center mt-10">
           <button className="bg-[#605DEC] text-[#FAFAFA] px-5 py-3 border-2 border-[#605DEC] rounded hover:text-[#605DEC] hover:bg-white hover:border-2 hover:border-[#605DEC] transition-all duration-200">Descubra más estancias</button>
        </Link>
      </div>
    </>
  );
};

export default Testimonials;
