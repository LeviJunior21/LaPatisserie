import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import axios from "axios";

const SignUp = () => {
  // ============= Initial State Start here =============
  const [clientName, setClientName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [checked, setChecked] = useState(false);
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errClientName, setErrClientName] = useState("");
  const [errUserName, setErrUserName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errCpf, setErrCpf] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errState, setErrState] = useState("");
  const [errCep, setErrCep] = useState("");
  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleClientName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleUserName = (e) => {
    setUserName(e.target.value);
    setErrUserName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handleCpf = (e) => {
    setCpf(e.target.value);
    setErrCpf("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleState = (e) => {
    setState(e.target.value);
    setErrState("");
  };
  const handleCep = (e) => {
    setCep(e.target.value);
    setErrCep("");
  };
  // ============= Event Handler End here ===============
  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Insira o seu nome");
      }
      if (!clientName) {
        setErrUserName("Insira o seu nome de usuário");
      }
      if (!email) {
        setErrEmail("Insira o seu email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Adicione um email válido");
        }
      }
      if (!phone) {
        setErrPhone("Insira o seu número de telefone");
      }
      if (!password) {
        setErrPassword("Crie uma senha");
      } else {
        if (password.length < 6) {
          setErrPassword("A senha deve ter pelo menos 6 caracteres");
        }
      }
      if (!address) {
        setErrAddress("Insira o seu endereço");
      }
      if (!city) {
        setErrCity("Insira o nome da sua cidade");
      }
      if (!cpf) {
        setErrCpf("Digite o CPF correto");
      }
      if (!state) {
        setErrState("Insira o estado onde você mora");
      }
      if (!cep) {
        setErrCep("Insira o cep da sua localidade");
      }
      // ============== Getting the value ==============
      if (
        clientName &&
        userName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        state &&
        cep &&
        cpf
      ) {

        const data = {
          username: userName,
          name: clientName,
          email: email,
          password: password,
          cpf: cpf,
          phone: phone,
          city: city,
          address: address,
          state: state,
          cep: cep
        }
        axios.post("http://localhost:3000/api/clients", data).then(result => {
          if (result.status === 201) {
            setSuccessMsg(
              `Olá querido ${clientName}, Bem-vindo ao LaPatisserie. Você foi cadastrado com o seu email "${email}!"`
            );
            setClientName("");
            setUserName("");
            setEmail("");
            setPhone("");
            setPassword("");
            setAddress("");
            setCity("");
            setCpf("");
            setState("");
            setCep("");
          }
        });
      }
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-start">
      <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
        <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
          <Link to="/">
            <img src={logoLight} alt="logoImg" className="w-28" />
          </Link>
          <div className="flex flex-col gap-1 -mt-1">
            <h1 className="font-titleFont text-xl font-medium">
              Cadastre-se na La Pâtisserie
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
            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
              © La Pâtisserie
            </p>
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
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-[500px]">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/entrar">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center">
            <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
              <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                Crie sua conta
              </h1>
              <div className="flex flex-col gap-3">
                {/* client name */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Nome Completo
                  </p>
                  <input
                    onChange={handleClientName}
                    value={clientName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Insira o seu nome"
                    id="nome_completo_input"
                  />
                  {errClientName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errClientName}
                    </p>
                  )}
                </div>

                {/* UserName */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Nome Usuário
                  </p>
                  <input
                    onChange={handleUserName}
                    value={userName}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Insira o seu nome de usuário"
                    id="nome_usuario_input"
                  />
                  {errUserName && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errUserName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Email
                  </p>
                  <input
                    onChange={handleEmail}
                    value={email}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="email"
                    placeholder="ex.: email@gmail.com"
                    id="email_usuario_input"
                  />
                  {errEmail && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errEmail}
                    </p>
                  )}
                </div>
                {/* Phone Number */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Número de Telefone
                  </p>
                  <input
                    onChange={handlePhone}
                    value={phone}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="ex.: (83) 99999-9999"
                    id="numero_telefone_usuario_input"
                  />
                  {errPhone && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPhone}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    CPF
                  </p>
                  <input
                    onChange={handleCpf}
                    value={cpf}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="ex.: 999.999.999-99"
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
                    placeholder="Crie uma senha"
                    id="senha_usuario_input"
                  />
                  {errPassword && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errPassword}
                    </p>
                  )}
                </div>
                {/* Address */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Endereço
                  </p>
                  <input
                    onChange={handleAddress}
                    value={address}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="ex.: Rua - N 999"
                    id="endereco_usuario_input"
                  />
                  {errAddress && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errAddress}
                    </p>
                  )}
                </div>
                {/* City */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Cidade
                  </p>
                  <input
                    onChange={handleCity}
                    value={city}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Sua cidade"
                    id="cidade_usuario_input"
                  />
                  {errCity && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCity}
                    </p>
                  )}
                </div>
                {/* City */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    Estado
                  </p>
                  <input
                    onChange={handleState}
                    value={state}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="UF"
                    id="estado_usuario_input"
                  />
                  {errState && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errState}
                    </p>
                  )}
                </div>
                {/* CEP */}
                <div className="flex flex-col gap-.5">
                  <p className="font-titleFont text-base font-semibold text-gray-600">
                    CEP/Código Postal
                  </p>
                  <input
                    onChange={handleCep}
                    value={cep}
                    className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                    type="text"
                    placeholder="Seu CEP"
                    id="cep_usuario_input"
                  />
                  {errCep && (
                    <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                      <span className="font-bold italic mr-1">!</span>
                      {errCep}
                    </p>
                  )}
                </div>
                {/* Checkbox */}
                <div className="flex items-start mdl:items-center gap-2">
                  <input
                    onChange={() => setChecked(!checked)}
                    className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                    type="checkbox"
                    id="termos_servico_input"
                  />
                  <p className="text-sm text-primeColor">
                    Eu concordo com a La Pâtisserie{" "}
                    <span className="text-blue-500">Termos de Serviço </span>e{" "}
                    <span className="text-blue-500">Política de Privacidade</span>.
                  </p>
                </div>
                <button
                  onClick={handleSignUp}
                  className={`${
                    checked
                      ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                      : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
                  } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
                  id="criar_conta"
                >
                  Criar uma Conta
                </button>
                <p className="text-sm text-center font-titleFont font-medium">
                  Não tem uma conta?{" "}
                  <Link to="/entrar">
                    <span className="hover:text-blue-600 duration-300">
                      Entrar
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

export default SignUp;
