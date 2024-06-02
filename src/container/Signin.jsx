import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Signin = ({ signin, setSignin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState(''); // Nuevo estado para nickname
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

  const submitInputs = async (e) => {
    e.preventDefault();

    if (email.trim() !== '' && password.trim() !== '' && nickname.trim() !== '') {
      if (check1 && check2) {
        try {
          const response = await axios.post('http://localhost:8080/api/auth/register', {
            email,
            password,
            nickname, // Enviar nickname al backend
          });

          if (response.status === 200 || response.status === 201) {
            const { token } = response.data;
            // Almacenar el token en localStorage
            localStorage.setItem('token', token);
            toast.success("Registro exitoso");
            navigate('/');
            setSignin(false);
          } else {
            toast.error("Error al registrar");
          }
        } catch (error) {
          toast.error("Error al registrar: " + (error.response?.data?.message || error.message));
        }
      } else {
        toast.warning("Por favor, marque las casillas");
      }
    } else {
      toast.warning("Por favor, rellene todos los datos");
    }
  };

  return (
    <div className="absolute top-36 right-0 left-0 m-auto z-20 bg-[#FFFFFF] shadowCard w-[310px] sm:w-[468px] md:w-[568px] rounded px-8 py-6 flex flex-col  gap-6 scaleUp">
      <header className="flex flex-col justify-start">
        <div className="flex items-center justify-between">
          <h1 className="text-[#6E7491] text-[20px] sm:text-[24px] leading-5 sm:leading-8 font-bold ">
            Regístrate en TripUMG
          </h1>
          <MdOutlineClose
            className="text-[#6E7491] cursor-pointer"
            onClick={() => setSignin(!signin)}
          />
        </div>
        <p className=" text-sm sm:text-[18px] leading-4 sm:leading-6 text-[#7C8DB0] mt-2">
          TripUMG es totalmente gratuito. Regístrate con tu dirección de correo electrónico para empezar.
        </p>
      </header>
      <form className="flex flex-col gap-4" onSubmit={submitInputs}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none border-[1px] border-[#A1B0CC] p-2 placeholder:text-[#7C8DB0] text-[#7C8DB0] rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="outline-none border-[1px] border-[#A1B0CC] p-2 placeholder:text-[#7C8DB0] text-[#7C8DB0] rounded"
        />
        <input
          type="text"
          placeholder="Apodo"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="outline-none border-[1px] border-[#A1B0CC] p-2 placeholder:text-[#7C8DB0] text-[#7C8DB0] rounded"
        />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="checkbox1"
              id="checkbox1"
              checked={check1}
              onChange={(e) => setCheck1(e.target.checked)}
              className="text-[#7C8DB0] outline-none"
            />
            <label htmlFor="checkbox1" className="text-[#7C8DB0] text-sm sm:text-base">
              Acepto los <span className="text-[#605DEC]">términos y condiciones</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="checkbox2"
              id="checkbox2"
              checked={check2}
              onChange={(e) => setCheck2(e.target.checked)}
              className="text-[#7C8DB0] outline-none"
            />
            <label htmlFor="checkbox2" className="text-[#7C8DB0] text-sm sm:text-base">
              Enviarme las últimas alertas de ofertas
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#605DEC] text-[#FAFAFA] rounded py-3 outline-none border-none"
        >
          Crear cuenta
        </button>
      </form>
      <div className="flex items-center justify-center gap-2">
        <div className="w-full text-[#A1B0CC] border-t-[1px] border-t-[#A1B0CC] h-1 " />
        <p className="text-[#7C8DB0] text-[18px] leading-6">or</p>
        <div className="w-full text-[#A1B0CC] border-t-[1px] border-t-[#A1B0CC] h-1" />
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          className="w-full flex gap-2 items-center justify-center border-[1px] border-[#605DEC] rounded p-3"
          onClick={() => setSignin(false)}
        >
          <FcGoogle className="w-[18px] h-[18px]" />
          <p className="text-[#605CDE] text-[16px] leading-6">
            Continuar con Google
          </p>
        </button>
      </div>
    </div>
  );
};

export default Signin;

