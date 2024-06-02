import { Link } from "react-router-dom";
import { FlightChoose, SelectDetails } from "../components";
import { FlightDealsCard, PlacesCard } from "../container";
import { right } from "../assets/icons";
import { bed, holes, kenya, seoul, shangai, wall } from "../assets/images";

const FlightExplore = () => {
  return (
    <>
      <div className="px-8 w-full flex flex-col">
        <div className="mt-10">
          <SelectDetails />
        </div>
        <div className="mt-16">
          <FlightChoose />
        </div>
        <div className="mt-20 flex flex-col gap-7">
          <div className="flex items-center justify-between">
            <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
              Buscar{" "}
              <span className="text-[#54cdb7]"> lugares para estar</span> en Japón
            </p>
            <Link
              to="/hotels"
              className="flex items-start justify-center gap-1"
            >
              <p className="text-[#A1B0CC] text-sm md:text-lg">Todos</p>
              <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>
          <div className="flex gap-16 flex-wrap items-start ">
            <PlacesCard
              image={bed}
              name="Hotel Kaneyamaen and Bessho SASA"
              desc="Situado en la base del monte Fuji, el Hotel Kaneyamaen es un tradicional ryokan japonés con un toque moderno. Disfrute de un baño onsen privado y de una cena kaiseki privada de varios platos."
            />
            <PlacesCard
              image={wall}
              name="HOTEL THE FLAG 大阪市"
              desc="Haga una parada en Osaka y alójese en el HOTEL THE FLAG, a sólo unos minutos a pie para experimentar la cultura gastronómica que rodea Dontonbori. A solo un minuto está la calle comercial Shinsaibashi."
            />
            <PlacesCard
              image={holes}
              name="9 Hours Shinjuku"
              desc="Disfrute de una estancia única en un auténtico hotel cápsula japonés. 9 Hours Shinjuku está a unos minutos de una de las estaciones de tren más concurridas de Japón. Basta con tomar el tren NEX desde el aeropuerto de Narita."
            />
          </div>
        </div>
        <div className="mt-20 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Personas en <span className="text-[#605DEC]"> San Francisco </span>  también <br className=" block sm:hidden"/> buscaron
          </p>
          <Link
            to="/packages"
            className="flex items-start justify-center gap-1"
          >
            <p className="text-[#A1B0CC] text-sm md:text-lg">Todos</p>
            <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          <FlightDealsCard
            image={shangai}
            title="Shanghai,"
            name="China"
            price="$598"
            des="La ciudad más internacional de China"
          />
          <FlightDealsCard
            image={kenya}
            title="Nairobi, "
            name="Kenya"
            price="$1,248"
            des="Apodada la capital mundial del safari"
          />
          <FlightDealsCard
            image={seoul}
            title="Seoul, "
            name="South Korea"
            price="$589"
            des="Esta moderna ciudad es el sueño de cualquier viajero"
          />
          
        </div>
        </div>

      </div>
    </>
  );
};

export default FlightExplore;
