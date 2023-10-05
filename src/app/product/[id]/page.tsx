import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/Price";

function SingleProductPage() {
  return (
    <main className="flex h-screen flex-col justify-around p-4 text-red-500 md:flex-row md:items-center md:gap-8 lg:px-20 xl:px-40">
      {/* Image Container */}
      {singleProduct.img && (
        <div className="relative h-1/2 w-full md:h-[70%]">
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        </div>
      )}

      {/* Text Container */}
      <div className="flex h-1/2 flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-2xl font-bold uppercase xl:text-4xl">
          {singleProduct.title}
        </h1>
        <p>{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </main>
  );
}

export default SingleProductPage;
