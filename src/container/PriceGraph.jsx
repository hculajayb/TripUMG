import { Pricehistory } from "../assets/images"


const PriceGraph = () => {
  return (
    <>
     <div className="flex flex-col gap-10 ">
            <div>
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[#7C8DB0] font-semibold text-lg leading-6">
                  <span className="text-[#6E7491]"> Tabla de precios</span> (fechas 
                  flexibles)
                </h1>
              </div>
              <div className="mt-5 w-full sm:w-[397px] h-[247px] flex flex-col border-[1px] border-[#E9E8FC] rounded-xl  ">
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="w-[45px] sm:w-[65px] h-full text-center border-r-[1px]  border-[#E9E8FC]"></h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                  <h2 className="priceGridHead">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/7</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/8</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/9</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/10</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
                <div className="w-full h-10 flex gap-1 items-cente border-b-[1px] my-auto border-[#E9E8FC]">
                  <h2 className="priceGridHead">3/11</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                  <h2 className="priceGridText">232</h2>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="flex flex-col items-start justify-start">
                <h1 className="text-[#6E7491] font-semibold text-lg leading-6">
                  Histórico de precios
                </h1>
              </div>
              <div className="w-full h-full">
                <img
                  src={Pricehistory}
                  alt="Price-history"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="flex items-center justify-start gap-3">
                <h1 className="text-[#6E7491] font-semibold text-lg leading-6">
                  Valoración de precios
                </h1>
                <button className="bg-[#5CD6C0] px-2 py-1 rounded text-white font-semibold">
                  Compre pronto
                </button>
              </div>
              <div className="flex flex-col items-start justify-start max-w-sm gap-2 px-3">
                <p className="text-[#6E7491] ">
                  Recomendamos reservar pronto. El coste medio de este vuelo es de 750 $, 
                  pero podría subir un 18% hasta 885 $ en dos semanas.
                </p>
                <p className="text-[#A1B0CC] ">
                  TripUMG analiza miles de vuelos, precios y tendencias para 
                  garantizarle la mejor oferta.
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default PriceGraph