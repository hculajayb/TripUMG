import {  kenya, seoul, shangai, sydney, temple } from "../assets/images"
import { FlightDealsCard } from "../container"


const Packages = () => {
  return (
    <>
    <div className="px-8 flex flex-col gap-7 mt-10">
    <div className="flex items-start justify-start">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Busca tu siguiente aventura <br className=" block sm:hidden " /> con
            estas <span className="text-[#605DEC]">Ofertas de vuelos</span>
          </p>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
        <FlightDealsCard
            image={shangai}
            title="The Bund, "
            name="Shanghai"
            price="$598"
            des=" La ciudad más internacional de China"
          />
          <FlightDealsCard
            image={sydney}
            title="Sydney Opera House, "
            name="Sydney"
            price="$981"
            des=" Pasee por el famoso puerto"
          />
          <FlightDealsCard
            image={temple}
            title="Kōdaiji Temple,"
            name="Kyoto"
            price="$633"
            des=" Retroceda en el tiempo en el distrito de Gion"
          />
           <FlightDealsCard
            image={kenya}
            title="Nairobi, "
            name="Kenya"
            price="$1,248"
            des=" Apodada la capital mundial del safari"
          />
          <FlightDealsCard
            image={seoul}
            title="Seoul, "
            name="South Korea"
            price="$589"
            des=" Esta moderna ciudad es el sueño de cualquier viajero"
          />
        </div>
    </div>
    </>
  )
}

export default Packages