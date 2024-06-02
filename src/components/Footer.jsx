import { appStore, facebook, googlePlay, instagram, twitter } from "../assets/icons"


const Footer = () => {
  return (
    <>
    <div className="mt-40 flex flex-col gap-5 px-8">
      <div className="flex justify-between items-start flex-col md:flex-row gap-7">
        <div className="flex justify-start items-start">
          <h1 className="text-[#605DEC] font-bold text-2xl">TripUMG</h1>
        </div>
        <ul className="flex flex-col items-start justify-start gap-3">
          <h2 className="text-[#6E7491] font-bold text-lg">About</h2>
          <li className="footerLi">Acerca de TripUMG</li>
          <li className="footerLi">¿Cómo funciona?</li>
          <li className="footerLi">Empleo</li>
          <li className="footerLi">Blog</li>
          <li className="footerLi">Press</li>
          <li className="footerLi">Forum</li>
        </ul>
        <ul className="flex flex-col items-start justify-start gap-3">
          <h2 className="text-[#6E7491] font-bold text-lg">Soporte</h2>
          <li className="footerLi">Centro de ayuda</li>
          <li className="footerLi">Contactanos</li>
          <li className="footerLi">Politica de Privacidad</li>
          <li className="footerLi">Terminos de Servicio</li>
          <li className="footerLi">Confianza y Seguridad</li>
          <li className="footerLi">Accesibilidad</li>
        </ul>
        <ul className="flex flex-col items-start justify-start  gap-3">
          <h2 className="text-[#6E7491] font-bold text-lg">Obten la App</h2>
          <li className="footerLi">TripUMG para Android</li>
          <li className="footerLi">TripUMG para iOS</li>
          <li className="footerLi">Sitio para móviles</li>
          <img src={appStore} alt="appStore"  className=""/>
          <img src={googlePlay} alt="googlePlay" />
        </ul>
      </div>
      <div className="border-t-2 border-[#CBD4E6] py-8 flex justify-between items-center">
        <div className="flex items-center justify-center gap-3">
          <img src={twitter} alt="twitter"  className="cursor-pointer object-cover w-5 h-5 sm:w-7 sm:h-7"/>
          <img src={instagram} alt="twitter"  className="cursor-pointer object-cover w-5 h-5 sm:w-7 sm:h-7" />
          <img src={facebook} alt="twitter"   className="cursor-pointer object-cover w-5 h-5 sm:w-7 sm:h-7"/>
        </div>
        <p className="text-[#7C8DB0] text-sm sm:text-base">&copy; 2024 TripUMG inc.</p>
      </div>
    </div>
    </>
  )
}

export default Footer