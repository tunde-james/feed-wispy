import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";

function CategoryPage() {
  return (
    <main className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="group flex h-[60vh] w-full flex-col justify-between border-b-2 border-r-2 border-red-500 p-4 even:bg-fuchsia-50 sm:w-1/2 lg:w-1/3"
        >
          {/* Image Container */}
          <div className="relative h-[80%]">
            {item.img && (
              <Image src={item.img} alt="" fill className="object-contain" />
            )}
          </div>

          {/* Text Container */}
          <div className="flex items-center justify-between">
            <h1 className="p-2 text-xl font-bold uppercase">{item.title}</h1>
            <h2 className="text-xl group-hover:hidden">${item.price}</h2>
            <button className="hidden rounded-md bg-red-500 px-2 py-1 uppercase text-white group-hover:block">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default CategoryPage;
