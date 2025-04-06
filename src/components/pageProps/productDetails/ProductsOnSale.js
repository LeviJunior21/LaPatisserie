import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsOnSale = ({ productInfo }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (productInfo?.category) {
      axios
      .get(`http://localhost:3000/api/products/category/${productInfo.category}`)
      .then((res) => {
        const filtered = res.data.filter(
          (p) => p.id !== productInfo._id
        );
        setRelatedProducts(filtered);
        console.log(filtered)
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos pela categoria: ", err);
      });
    }
  }, [productInfo]);

  // return (
  //   <div>
  //     <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
  //       Produtos à venda
  //     </h3>
  //     <div className="flex flex-col gap-2">
  //       {SplOfferData.map((item) => (
  //         <div
  //           key={item._id}
  //           className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
  //         >
  //           <div>
  //             <img className="w-24" src={item.img} alt={item.img} />
  //           </div>
  //           <div className="flex flex-col gap-2 font-titleFont">
  //             <p className="text-base font-medium">{item.productName}</p>
  //             <p className="text-sm font-semibold">R${item.price}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
        Produtos à venda
      </h3>
      <div className="flex flex-col gap-2">
        {relatedProducts.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
          >
            <div>
              <img className="w-24 h-24 object-cover" src={item.imageUrl} alt={item.name} />
            </div>
            <div className="flex flex-col gap-1 font-titleFont">
              <p className="text-base font-medium">{item.name}</p>
              <p className="text-sm font-semibold">R$ {item.price}</p>
              {item.promotion && (
                <span className="text-green-600 text-xs font-bold">Promoção</span>
              )}
            </div>
          </div>
        ))}
        {relatedProducts.length === 0 && (
          <p className="text-sm text-gray-500">Nenhum produto relacionado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsOnSale;
