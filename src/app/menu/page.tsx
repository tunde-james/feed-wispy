import { MenuType } from "@/types/types";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }

  const json = await res.json();

  return json;
}

async function MenuPage() {
  const menu: MenuType = await getData();

  return (
    <main className="flex h-[calc(100vh-6rem)] flex-col items-center p-4 md:h-[calc(100vh-9rem)] md:flex-row lg:px-20 xl:px-40">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="h-1/3 w-full bg-cover p-8 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h2 className="text-sm font-bold uppercase lg:text-lg">
              {category.title}
            </h2>
            <p className="lg:text- my-1 text-sm">{category.desc}</p>
            <button
              className={`hidden rounded-md px-4
               py-2 lg:block ${
                 category.color === "white"
                   ? "bg-white text-red-500"
                   : "bg-black text-white"
               }`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </main>
  );
}

export default MenuPage;
