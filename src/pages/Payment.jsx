import {
  AiFillApple,
  AiOutlineCreditCard,
  AiOutlineGoogle,
} from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { SiBitcoin } from "react-icons/si";
import { IoLogoApple } from "react-icons/io";
import { iconfacebook } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { PriceDetails } from "../container";
import { useState } from "react";
import { toast } from "react-toastify";

const Payment = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [ccv, setCcv] = useState("");

  const submitInputs = (e) => {
    e.preventDefault();

    if (
      name.trim() !== "" &&
      number.trim() !== "" &&
      ccv.trim() !== "" &&
      date.trim() !== ""
    ) {
      toast.success("Pago enviado correctamente");
      navigate("/confirm");
    } else {
      toast.warning("Rellene los datos de la tarjeta");
    }
  };

  return (
    <>
      <div className="px-8 w-full h-full flex lg:flex-row flex-col justify-between items-start mt-20 gap-10">
        <div className="w-full lg:w-[686px] flex flex-col items-start gap-12">
          <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="titleh1">Método de Pago</h1>
            <p className="text-[#7C8DB0] text-base font-normal">
              Seleccione un método de pago a continuación. TripUMG procesa su pago
              de forma segura con encriptación de extremo a extremo.
            </p>
          </div>
          <div className="w-full h-12 md:w-[686px] border-2 border-[#605DEC] flex justify-between items-center rounded">
            <p className="w-full h-full flex items-center justify-center gap-1 bg-[#605DEC] text-[#FAFAFA] text-sm sm:text-base">
              <AiOutlineCreditCard />
              <span>Tarjeta de Crédito</span>
            </p>
            <p className="text-sm sm:text-base w-full h-full flex items-center justify-center text-[#605DEC] gap-1 hover:bg-[#605DEC] hover:text-[#FAFAFA] focus:bg-[#605DEC] focus:text-[#FAFAFA] transition-all duration-200 ">
              <AiOutlineGoogle />
              <span>Google pay</span>
            </p>
            <p className="paymentoptions">
              <AiFillApple />
              <span>Apple pay</span>
            </p>
            <p className="text-sm sm:text-base w-full h-full flex items-center justify-center text-[#605DEC] gap-1 hover:bg-[#605DEC] hover:text-[#FAFAFA] focus:bg-[#605DEC] focus:text-[#FAFAFA] transition-all duration-200 ">
              <BsPaypal />
              <span>Pay pal</span>
            </p>
            <p className="paymentoptions">
              <SiBitcoin />
              <span>Crypto</span>
            </p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-5">
            <h2 className="text-[#6E7491] text-xl">Datos de la tarjeta de crédito</h2>
            <form className="w-full h-full flex flex-col items-start justify-start gap-5">
              <input
                type="text"
                placeholder="Nombre en la tarjeta"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full sm:w-[480px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
              />
              <input
                type="text"
                placeholder="Número de tarjeta"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full sm:w-[480px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
              />
              <div className="flex items-center justify-center gap-5">
                <input
                  type="text"
                  placeholder="Fecha de caducidad [MM/AA]"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full sm:w-[240px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
                />
                <input
                  type="text"
                  placeholder="CCV"
                  value={ccv}
                  onChange={(e) => setCcv(e.target.value)}
                  className="w-full sm:w-[216px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
                />
              </div>
            </form>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start gap-2">
              <h2 className="text-[#6E7491] text-xl">Crear una cuenta</h2>
              <p className="text-[#7C8DB0] text-base font-normal">
                TripUMG es gratuito como invitado, pero si creas una cuenta
                hoy, puedes guardar y ver vuelos, gestionar tus viajes, ganar
                recompensas y mucho más.
              </p>
            </div>
            <form className="w-full h-full flex flex-col items-start justify-start gap-5 mt-5">
              <input
                type="text"
                placeholder="Dirección de correo electrónico"
                className="w-full sm:w-[480px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
              />
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full sm:w-[480px] h-full outline-none border-[1px] border-[#A1B0CC] placeholder:text-[#7C8DB0] text-[#7C8DB0] px-2 py-3 text-base rounded"
              />
            </form>
            <div className="w-full sm:w-[480px] flex items-center justify-center gap-2 mt-7">
              <div className="w-full text-[#A1B0CC] border-t-[1px] border-t-[#A1B0CC] h-1 " />
              <p className="text-[#7C8DB0] text-[18px] leading-6">o</p>
              <div className="w-full text-[#A1B0CC] border-t-[1px] border-t-[#A1B0CC] h-1" />
            </div>
            <div className="w-full sm:w-[480px] flex flex-col items-center justify-center gap-4">
              <button className="w-full flex gap-2 items-center justify-center border-[1px] border-[#605DEC] rounded p-3">
                <FcGoogle className="w-[18px] h-[18px]" />
                <p className="text-[#605CDE] text-[16px] leading-6">
                  Continuar con Google
                </p>
              </button>
              <button className="w-full flex gap-2 items-center justify-center border-[1px] border-[#605DEC] rounded p-3">
                <IoLogoApple className="w-[18px] h-[18px] text-black" />
                <p className="text-[#605CDE] text-[16px] leading-6">
                  Continuar con Apple
                </p>
              </button>
              <button className="w-full flex gap-2 items-center justify-center border-[1px] border-[#605DEC] rounded p-3">
                <img src={iconfacebook} className="w-[18px] h-[18px]" />
                <p className="text-[#605CDE] text-[16px] leading-6">
                  Continuar con Facebook
                </p>
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start gap-3">
              <h2 className="text-[#6E7491] text-xl">Política de cancelación</h2>
              <p className="text-[#7C8DB0] text-base font-normal">
                Este vuelo tiene una política de cancelación flexible. Si cancela o
                o cambia su vuelo hasta 30 días antes de la fecha de salida, puede
                tiene derecho a un reembolso gratuito. Todos los vuelos reservados en TripUMG
                están respaldados por nuestra garantía de satisfacción
                sin embargo, las políticas de cancelación varían según la aerolínea. Consulte la{" "}
                <span className="text-[#605CDE]">
                  {" "}
                  política de cancelación completa
                </span>{" "}
                para este vuelo.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/seat-selection">
              <button className="py-2 px-4 border-[1px] border-[#605DEC] text-[#605DEC] rounded hover:bg-[#605DEC] hover:text-white transition-all duration-200">
                Volver a la selección de asiento
              </button>
            </Link>
            <Link>
              <button
                className="hidden lg:block py-2 px-4 border-[1px] border-[#7C8DB0] text-[#7C8DB0] bg-[#CBD4E6] rounded hover:bg-[#605DEC] hover:text-white hover:border-[#605DEC] transition-all duration-200"
                onClick={submitInputs}
              >
                Confirmar y Pagar
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-10 justify-end items-start lg:items-end">
          <PriceDetails />
          <Link className="mt-5">
            <button
              className="py-2 px-4 border-[1px] border-[#7C8DB0] text-[#7C8DB0] bg-[#CBD4E6] rounded hover:bg-[#605DEC] hover:text-white hover:border-[#605DEC] transition-all duration-200"
              onClick={submitInputs}
            >
              Confirmar y Pagar
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Payment;
