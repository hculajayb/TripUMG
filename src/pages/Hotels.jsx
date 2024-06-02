import { bed, holes, maldivs, mongolia, morocco, wall } from "../assets/images"
import { PlacesCard } from "../container"


const Hotels = () => {
  return (
    <>
    <div className=" px-8 flex flex-col gap-7 mt-10">
    <div className="flex items-start justify-start">
          <p className="text-[#6E7491] font-medium md:font-bold sm:text-base md:text-[24px] md:leading-8">
            Busca los mejores <span className="text-[#54cdb7]">lugares para estar</span>
          </p>
        </div>
        <div className="flex gap-16 flex-wrap items-start ">
          <PlacesCard
            image={maldivs}
            title="Stay among the atolls in"
            name="Maldives"
            desc="Desde el siglo II d.C., las islas eran conocidas como las «Islas del Dinero», debido a la abundancia de conchas de cauri, moneda de la época primitiva."
          />
          <PlacesCard
            image={morocco}
            title="Experience the Ourika Valley in"
            name="Morocco"
            desc="La arquitectura hispano-morisca de Marruecos mezcla influencias de la cultura bereber, de España y de las corrientes artísticas contemporáneas de Oriente Próximo."
          />
          <PlacesCard
            image={mongolia}
            title="Live traditionally in "
            name="Mongolia"
            desc="Las yurtas mongolas tradicionales constan de un entramado angular de madera o bambú para las paredes, costillas y una rueda."
          />
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
    </>
  )
}

export default Hotels