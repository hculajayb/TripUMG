import {  useNavigate } from "react-router-dom";
import { right } from "../assets/icons";
import { msunrise, shangai, sunrise, sydney, temple } from "../assets/images";
import FlightDealsCard from "../container/FlightDealsCard";

const FlightDeals = () => {

  const navigate = useNavigate()

  const handleSeeAllClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/packages')
    
  };

  return (
    <>
      <div className="px-8 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
          Encuentre su próxima aventura <br className=" block sm:hidden " /> con 
            estas <span className="text-[#605DEC]">ofertas de vuelos</span>
          </p>
          <div
            className="flex items-start justify-center gap-1 cursor-pointer"
            onClick={handleSeeAllClick}
          >
            <p className="text-[#A1B0CC] text-sm md:text-lg" >Todos</p>
            <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          <FlightDealsCard
            image={shangai}
            title="The Bund, "
            name="Shanghai"
            price="$598"
            des=" La ciudad china más internacional"
          />
          <FlightDealsCard
            image={sydney}
            title="Sydney Opera House, "
            name="Sydney"
            price="$981"
            des=" Dé un paseo por el famoso puerto"
          />
          <FlightDealsCard
            image={temple}
            title="Kōdaiji Temple,"
            name="Kyoto"
            price="$633"
            des=" Retroceda en el tiempo en el distrito de Gion"
          />
        </div>

        <div className="w-full h-full flex flex-col dealsShadow rounded-b gap-2 ">
           <div className="w-full h-full">
             <img src={sunrise} alt="" className="w-full h-full object-cover rounded-t hidden md:block" />
             <img src={msunrise} alt="" className="w-full h-full object-cover rounded-t block md:hidden" />
           </div>
           <div className="w-full h-full flex flex-col justify-center items-start gap-1 px-4 py-3">
          <div className="flex flex-row items-center justify-between w-full">
            <h1 className="text-[#6E7491] text-base font-medium capitalize">
            Tsavo East National Park, <span className="text-[#605DEC]">Kenya</span>
            </h1>
            <p className="text-[#6E7491] text-base font-medium">$1,248</p>
          </div>
          <p className="text-[#7C8DB0] text-sm font-normal">
            Llamado así por el río Tsavo e inaugurado en abril de 1984, el Parque Nacional de Tsavo Oriental es uno de los más antiguos de Kenia. 
            Está situado en el semiárido desierto de Taru.
          </p>
        </div>
        </div>

      </div>
    </>
  );
};

export default FlightDeals;
