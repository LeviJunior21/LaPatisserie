import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Diários" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">La Pâtisserie</span>{" "}
          Estamos com a nossa loja virtual disponível!
        </h1>
        <Link to="/loja">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Voltar a Loja
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
