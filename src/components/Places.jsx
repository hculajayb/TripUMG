import { useNavigate } from "react-router-dom";
import { right } from "../assets/icons";
import PlacesCard from "../container/PlacesCard";
import { maldivs, mongolia, morocco } from "../assets/images";

const Places = () => {

  const navigate = useNavigate()

  const handleSeeAllClick = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/hotels')
    
  };
  return (
    <>
      <div className="px-8 flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
          Explore lugares únicos
            <span className="text-[#54cdb7]"> donde alojarse</span>
          </p>
          <div className="flex items-start justify-center gap-1 cursor-pointer" onClick={handleSeeAllClick}>
            <p className="text-[#A1B0CC] text-sm md:text-lg">Todos</p>
            <img src={right} alt="arrow" className="w-5 h-5 md:w-6 md:h-6" />
          </div>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          <PlacesCard
            image={maldivs}
            title="Alójese entre los atolls en "
            name="Maldives"
            desc="Desde el siglo II d.C., las islas eran conocidas como las «Islas del Dinero», debido a la abundancia de conchas de cauri, moneda de la época primitiva."
          />
          <PlacesCard
            image={morocco}
            title="Descubra el Valle del Ourika en "
            name="Morocco"
            desc="La arquitectura hispano-morisca de Marruecos mezcla influencias de la cultura bereber, de España y de las corrientes artísticas contemporáneas de Oriente Próximo."
          />
          <PlacesCard
            image={mongolia}
            title="Vive tradicionalmente en "
            name="Mongolia"
            desc="Las yurtas mongolas tradicionales constan de un entramado angular de madera o bambú para las paredes, costillas y una rueda."
          />
        </div>
      </div>
    </>
  );
};

export default Places;
