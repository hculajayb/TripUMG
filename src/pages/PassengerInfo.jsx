import { Link } from "react-router-dom";
import { bag } from "../assets/images";
import { useState } from "react";
import { PriceDetails } from "../container";

const PassengerInfo = () => {
  const [sameAsPassenger, setSameAsPassenger] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [emergencyFirstName, setEmergencyFirstName] = useState("");
  const [emergencyLastName, setEmergencyLastName] = useState("");
  const [emergencyEmail, setEmergencyEmail] = useState("");
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState("");

  const handleCheckboxChange = (e) => {
    e.preventDefault();
    setSameAsPassenger(e.target.checked);

    if (e.target.checked) {
      setEmergencyFirstName(firstName);
      setEmergencyLastName(lastName);
      setEmergencyPhoneNumber(phoneNumber);
      setEmergencyEmail(email);
    } else {
      setEmergencyFirstName("");
      setEmergencyLastName("");
      setEmergencyEmail("");
      setEmergencyPhoneNumber("");
    }
  };

  const [numOfBag, setNumOfBag] = useState({
    numbag: 1,
  });

  const handleBagNumber = (name, oparetion) => {
    setNumOfBag((prev) => {
      return {
        ...prev,
        [name]: oparetion === "i" ? numOfBag[name] + 1 : numOfBag[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="px-8 w-full h-full flex lg:flex-row flex-col justify-between items-start mt-20 gap-10">
        <div className="w-full lg:w-[682px] flex flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="titleh1">
              Información sobre pasajeros
            </h1>
            <p className="text-[#7C8DB0] text-base font-normal">
              Introduzca la información requerida para cada viajero y asegúrese de que
              coincide exactamente con el documento de identidad oficial presentado en el
              aeropuerto.
            </p>
          </div>
          <div className="flex flex-col items-start w-full gap-4">
            <h2 className="text-[#6E7491] text-lg font-medium">
              Pasajero 1 (Adulto)
            </h2>
            <form className="flex flex-col w-full md:flex-row items-center justify-start gap-4">
              <input
                type="text"
                placeholder="Primer nombre*"
                className=" w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Segundo nombre*"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
              />
              <input
                type="text"
                placeholder="Apellido*"
                className=" w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </form>
            <form className="flex flex-col w-full md:flex-row items-center justify-start gap-4">
              <input
                type="text"
                placeholder="Sufijo (Sr., Sra., Dr., etc.)"
                className=" w-full border-[1px] border-[#A1B0CC] outline-none px-1 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
              />
              <input
                type="text"
                placeholder="Fecha de cumpleaños* dd/mm/aaaa"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-3 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
              />
            </form>
            <form className="flex flex-col w-full md:flex-row items-center justify-start gap-4 mt-2">
              <input
                type="email"
                placeholder="Correo electrónico*"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Número de teléfono*"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </form>
            <form className="flex flex-col w-full md:flex-row items-center justify-start gap-4">
              <input
                type="text"
                placeholder="Número de reclamación"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
              />
              <input
                type="text"
                placeholder="Número de viajero frecuente"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
              />
            </form>
          </div>
          <div className="flex flex-col items-start w-full gap-4">
            <h2 className="text-[#6E7491] text-lg font-medium">
              Información de contacto en caso de emergencia
            </h2>
            <div className="flex items-center justify-start gap-2 mt-2">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                checked={sameAsPassenger}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox" className="text-[#6E7491] font-normal">
                Igual que Pasajero 1
              </label>
            </div>
            <form className="flex flex-col w-full md:flex-row items-center justify-start gap-4 mt-4">
              <input
                type="text"
                placeholder="Primer nombre*"
                className=" w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={sameAsPassenger ? firstName : emergencyFirstName}
                onChange={(e) => setEmergencyFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Apellido*"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={sameAsPassenger ? lastName : emergencyLastName}
                onChange={(e) => setEmergencyLastName(e.target.value)}
              />
            </form>
            <form className="flex flex-col w-full md:flex-row items-center justify-start gap-4 mt-2">
              <input
                type="email"
                placeholder="Correo electrónico*"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={sameAsPassenger ? email : emergencyEmail}
                onChange={(e) => setEmergencyEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Número de teléfono*"
                className="w-full border-[1px] border-[#A1B0CC] outline-none px-2 py-3 text-[#7C8DB0] placeholder:text-[#7C8DB0] rounded"
                value={sameAsPassenger ? phoneNumber : emergencyPhoneNumber}
                onChange={(e) => setEmergencyPhoneNumber(e.target.value)}
              />
            </form>
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="titleh1">
              Información sobre equipaje
            </h1>
            <p className="text-[#7C8DB0] text-base font-normal">
              Cada pasajero puede llevar una maleta de mano y un objeto personal.
              personal. La primera maleta facturada para cada pasajero también es gratuita. La segunda
              Los miembros del programa de fidelidad no tienen que facturar la segunda maleta. Consulte el{" "}
              <span className="text-[#605DEC]"> política de equipaje completo.</span>
            </p>
          </div>
          <div className="w-full sm:w-[400px] flex items-start justify-between gap-10">
            <div className="flex flex-col items-start gap-2">
              <p className="text-[#7C8DB0] text-base font-semibold">
                Pasajero 1
              </p>
              <p className="text-[#6E7491] text-base font-semibold">
                Primer Último
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[#7C8DB0] text-base font-semibold">
                Equipaje facturado
              </p>
              <div className=" flex items-center gap-4">
                <button
                  className="text-[#605DEC] text-3xl font-semibold cursor-pointer disabled:cursor-not-allowed"
                  onClick={() => handleBagNumber("numbag", "d")}
                  disabled={numOfBag.numbag <= 0}
                >
                  -
                </button>
                <span className="text-[#6E7491] text-base font-semibold">
                  {numOfBag.numbag}
                </span>
                <button
                  className="text-[#605DEC] text-xl font-semibold cursor-pointer "
                  onClick={() => handleBagNumber("numbag", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="py-2 px-4 border-[1px] border-[#605DEC] text-[#605DEC] rounded hover:bg-[#605DEC] hover:text-white transition-all duration-200">
              Guardar & cerrar
            </button>
            <Link to="/seat-selection">
              <button className="hidden lg:block py-2 px-4 border-[1px] border-[#7C8DB0] text-[#7C8DB0] bg-[#CBD4E6] rounded hover:bg-[#605DEC] hover:text-white hover:border-[#605DEC] transition-all duration-200">
                Seleccionar asientos
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full h-full sm:w-[400px] justify-between flex-col">
          <div className="mt-10 flex flex-col gap-10 justify-end items-start lg:items-end">
            <PriceDetails />
            <Link to="/seat-selection" className="mt-5">
              <button className="py-2 px-4 border-[1px] border-[#7C8DB0] text-[#7C8DB0] bg-[#CBD4E6] rounded hover:bg-[#605DEC] hover:text-white hover:border-[#605DEC] transition-all duration-200">
                Seleccionar asientos
              </button>
            </Link>
          </div>     
        <div className="flex justify-center sm:justify-center mt-10">
          <img
            src={bag}
            alt="bag"
            className="w-80 h-[420px] md:w-full md:h-full object-contain"
          />
        </div>
        </div>
      </div>
    </>
  );
};

export default PassengerInfo;
