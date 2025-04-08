import React, { useContext, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import axios from "axios";
import { setTokenCookie } from "./Cookie";
import { Provider } from "../../Provider";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errCpf, setErrCpf] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const { token, setToken } = useContext(Provider);

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleCpf = (e) => {
    setCpf(e.target.value);
    setErrCpf("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!cpf) {
      setErrCpf("Insira o seu CPF");
    }

    if (!password) {
      setErrPassword("Insira a sua senha");
    }
    // ============== Getting the value ==============
    if (cpf && password) {
      const data = {
        cpf: cpf,
        password: password
      }
      axios.post("http://localhost:3000/api/auth", data).then((result) => {
        if (result.status === 200) {
          setSuccessMsg(`Logado com sucesso!`);
          setCpf("");
          setPassword("");
          setToken(result.data.token);
          setTokenCookie(result.data.token);
        }
      }).catch((error) => {
        const msg = error.response?.data?.message || "Erro ao fazer login";
        
        if (msg === "Invalid User" || msg === "Invalid password") {
          setErrCpf("CPF ou senha incorretos.");
          setErrPassword("CPF ou senha incorretos.");
        } else {
          setErrCpf("Erro inesperado ao tentar fazer login.");
        }
      });
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
            Fique conectado para mais
            </h1>
            <p className="text-base">Experimente o melhor da confeitaria francesa sem compromisso. Sabores incríveis esperam por você! 🥖🍩</p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Comece rapidamente com La Pâtisserie
              </span>
              <br />
              Acesse nossa loja online e desfrute dos melhores bolos e doces franceses, feitos com carinho e entregues com rapidez! 🍰✨
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
                Acesse todos os serviços da La Pâtisserie
              </span>
              <br />
              Oferecemos deliciosos bolos e doces artesanais com um toque francês, preparados com carinho e entregues com rapidez. Peça online e aproveite nosso atendimento exclusivo! 🍰🇫🇷
            </p>
          </div>
          <div className="w-[300px] flex items-start gap-3">
            <span className="text-green-500 mt-1">
              <BsCheckCircleFill />
            </span>
            <p className="text-base text-gray-300">
              <span className="text-white font-semibold font-titleFont">
              Aprovado por compradores on-line
              </span>
              <br />
              Sabor, qualidade e confiança! Nossos doces encantam clientes e fazem sucesso em cada pedido. Experimente! 💕
            </p>
          </div>
          <div className="flex items-center justify-between mt-10">
            <Link to="/">
              <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                © La Pâtisserie
              </p>
            </Link>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Termos
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Privacidade
            </p>
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              Segurança
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2 h-full">
        {successMsg ? (
          <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to={token !== ""? "/loja":"/cadastrar"}>
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                {token !== ""? "Ir para a loja":"Inscrever-se"}
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                Entrar
              </h1>
              <div className="flex flex-col gap-3">
                {/* CPF */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    CPF
                  </p>
                  <input
                    onChange={handleCpf}
                    value={cpf}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    placeholder="Insira o seu CPF"
                    id="cpf_usuario_input"
                  />
                  {errCpf && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCpf}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Senha
                  </p>
                  <input
                    onChange={handlePassword}
                    value={password}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="password"
                    placeholder="Insira a sua senha"
                    id="senha_usuario_input"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleSignUp}
                  className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                >
                  Entrar
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Não tem uma conta?{" "}
                  <Link to="/cadastrar">
                    <span className="hover:text-blue-600 duration-300">
                      Inscreva-se
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
