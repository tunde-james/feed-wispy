import Link from "next/link";
import { menu } from "@/data";

function MenuPage() {
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
            <h2 className="text-sm font-bold uppercase">{category.title}</h2>
            <p className="my-1 text-sm">{category.desc}</p>
            <button
              className={`hidden xl:block bg-${category.color} rounded-md px-4 py-2 text-${category.color === "black" ? "white" : "red-500"}`}
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
