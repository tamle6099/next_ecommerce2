import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../Store/GloBalStore";
import { addToCart } from "../../Store/Actions";

export default function ProductItem({ product }) {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const userLink = () => {
    return (
      <>
        <Link href={`product/${product._id}`}>
          <a className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            View
          </a>
        </Link>
        <button
          className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          disabled={product.inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          By
        </button>
      </>
    );
  };
  return (
    <div className="">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={product.images[0].url}
          alt={product.images[0].url}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <div className="flex justify-between">
            <h6 className="text-red-400">${product.price}</h6>
            {product.inStock > 0 ? (
              <h6 className="text-red-400">InStock:{product.inStock}</h6>
            ) : (
              <h6 className="text-red-400">UotStock</h6>
            )}
          </div>
          <p className="text-gray-700 text-base">{product.descripton}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex justify-between">{userLink()}</div>
      </div>
    </div>
  );
}
