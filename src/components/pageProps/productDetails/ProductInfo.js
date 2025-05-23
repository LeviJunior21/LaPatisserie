import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
      <p className="text-xl font-semibold">R${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.des}</p>
      <p className="text-sm">Seja o primeiro a deixar um comentário</p>
      <p className="font-medium text-lg">
        {productInfo.promotion ? (
          <span className="text-green-600 font-semibold">Em promoção!</span>
        ) : (
          <span className="text-gray-500">Preço normal</span>
        )}
      </p>
      <button
        onClick={() =>
          dispatch(
            addToCart({
              _id: productInfo.id,
              name: productInfo.name,
              quantity: 1,
              image: productInfo.img,
              badge: productInfo.badge,
              price: productInfo.price,
              colors: productInfo.color,
            })
          )
        }
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
      >
        Adicionar ao Carrinho
      </button>
      <p className="font-normal text-sm">
        <span className="text-base font-medium">Tags:</span> {productInfo.category}
      </p>
    </div>
  );
};

export default ProductInfo;
