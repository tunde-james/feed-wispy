"use client";

import { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

function Price({ price, id, options }: Props) {
  const [total, setTotal] = useState<number>(price);
  const [quantity, setQuantity] = useState<number>(1);
  const [selected, setSelected] = useState<number>(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price),
    );
  }, [quantity, selected, options, price]);

  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>

      {/*Options Container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            key={option.title}
            className="min-w-[6rem] rounded-md p-2 ring-1 ring-red-400"
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>

      {/*Quantity & Add Button Container */}
      <div className="flex items-center justify-between">
        {/* Quantity */}
        <div className="flex w-full justify-between p-3 ring-1 ring-red-500">
          <span className="">Quantity</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* Cart Button */}
        <button className="w-56 bg-red-500 p-3 uppercase text-white ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default Price;
