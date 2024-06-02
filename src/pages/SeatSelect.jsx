import { Link } from "react-router-dom";
import { business, economy, plane3 } from "../assets/images";

const SeatSelect = () => {
  return (
    <>
      <div className="px-4 sm:px-8 w-full h-full flex flex-col lg:flex-row justify-between items-start gap-10 mt-20">
        <div className="relative w-full h-full mx-auto lg:mx-0 sm:w-[400px] sm:h-[850px]">
          <img src={plane3} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="w-full h-full  md:w-[712px] md:h-[850px] bg-white bg-opacity-20 flex flex-col mt-5 gap-10 border-[1px] border-[#f2f0f0] justify-between">
          <div className="w-full h-20 flex justify-between items-center bg-[#27273F]">
            <div className="h-full w-full flex flex-col items-start justify-center px-4">
              <h1 className="text-[#FAFAFA] text-base md:text-xl font-bold">
                SFO
              </h1>
              <p className="text-[#E9E8FC] text-xs">California, US</p>
            </div>
            <div className="h-full w-full flex flex-col items-start justify-center px-4">
              <h1 className="text-[#FAFAFA] text-base md:text-xl font-bold">
                NRT
              </h1>
              <p className="text-[#E9E8FC] text-xs">Tokyo, Japan</p>
            </div>
            <div className="h-full w-full flex flex-col items-start justify-center px-4 hover:bg-[#605DEC] transition-all duration-200">
              <h1 className="text-[#FAFAFA] text-xs sm:text-sm md:text-base font-normal">
                Feb 25 | 7:00AM
              </h1>
              <p className="text-[#E9E8FC] text-xs">Salida</p>
            </div>
            <div className="h-full w-full flex flex-col items-start justify-center  px-4 hover:bg-[#605DEC] transition-all duration-200">
              <h1 className="text-[#FAFAFA] text-xs sm:text-sm md:text-base font-normal">
                Mar 21 | 12:15PM
              </h1>
              <p className="text-[#E9E8FC] text-xs">Llegada</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-5">
            <div className="max-w-[336px] flex flex-col items-start justify-start">
              <img
                src={economy}
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="px-7 mt-5 flex flex-col gap-2">
                <h1 className="text-xl font-semibold text-[#6E7491]">
                  Economía
                </h1>
                <p className="text-[#7C8DB0] text-sm font-normal">
                  Descanse y recargue energía durante su vuelo con un amplio espacio para las piernas,
                  servicio personalizado y un servicio de comidas de varios platos
                </p>
                <ul className="mt-5 px-3 text-sm flex flex-col gap-4 list-disc text-[#605DEC]">
                  <li className="text-[#6E7491] ">
                    Sistema de entretenimiento integrado
                  </li>
                  <li className="text-[#6E7491] ">
                    Aperitivos y bebidas de cortesía
                  </li>
                  <li className="text-[#6E7491] ">
                    Un equipaje de mano y un objeto personal gratuitos
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-w-[336px] flex flex-col items-start justify-start">
              <img
                src={business}
                alt=""
                className="w-full h-full object-contain"
              />
              <div className="px-7 mt-5 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold text-[#6E7491]">
                    Clase de negocios
                  </h1>
                  <button className="bg-[#5CD6C0] px-1 py-[1px] text-[#FAFAFA] rounded text-sm">
                    Seleccionado
                  </button>
                </div>
                <p className="text-[#7C8DB0] text-sm font-normal">
                  Descanse y recargue energía durante su vuelo con un amplio espacio para las piernas,
                  servicio personalizado y un servicio de comidas de varios platos
                </p>
                <ul className="mt-5 px-3 text-sm flex flex-col gap-4 list-disc">
                  <li className="text-[#5CD6C0]">
                    <span className="text-[#6E7491]">Mayor espacio para las piernas</span>
                  </li>
                  <li className="text-[#5CD6C0]">
                    <span className="text-[#6E7491]">
                      Las dos primeras maletas facturadas son gratuitas
                    </span>
                  </li>
                  <li className="text-[#5CD6C0]">
                    <span className="text-[#6E7491]">Prioridad de embarque</span>
                  </li>
                  <li className="text-[#5CD6C0]">
                    <span className="text-[#6E7491]">Servicio personalizado</span>
                  </li>
                  <li className="text-[#5CD6C0]">
                    <span className="text-[#6E7491]">
                      Mejor servicio de comidas y bebidas
                    </span>
                  </li>
                  <li className="text-[#5CD6C0]">
                    <span className="text-[#6E7491]">
                      Asientos reclinables un 40% más que los económicos
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full h-[93px] border-[1px] border-[#f2f0f0] flex justify-between items-center px-4 gap-3">
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#7C8DB0] text-xs sm:text-sm">Pasajero 1</p>
              <h1 className="text-[#6E7491] text-sm sm:text-xl">
                Sofia Knowles
              </h1>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="text-[#7C8DB0] text-xs sm:text-sm">Número de asiento</p>
              <h1 className="text-[#6E7491] text-sm sm:text-xl">9F</h1>
            </div>
            <div className="flex flex-row items-center gap-3">
              <button className="hidden sm:block text-[#605DEC] border-[1px] border-[#605DEC] p-2 sm:px-3 sm:py-2 rounded hover:bg-[#605DEC] hover:text-[#FAFAFA] transition-all duration-200 text-xs sm:text-base">
                Guardar y cerrar
              </button>
              <Link to='/payment'>
              <button className="text-[#FAFAFA] border-[1px] border-[#605DEC] bg-[#605DEC] p-2 sm:px-3 sm:py-2 rounded hover:text-[#605DEC] hover:bg-white transition-all duration-200 text-xs  sm:text-base">
                Pagar
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeatSelect;
