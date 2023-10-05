import Image from "next/image";

function CartPage() {
  return (
    <main className="flex h-[calc(100vh-6em)] flex-col text-red-500 md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Product Container */}
      <section className="flex h-1/2 flex-col justify-center p-4 lg:h-full lg:w-2/3 lg:px-20 xl:px-40 2xl:w-1/2">
        {/* Single Item */}
        <div className="mb-4 flex items-center justify-between">
          <Image
            src="/images/temporary/p1.png"
            alt=""
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="">
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span className="">Large</span>
          </div>

          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* Single Item */}
        <div className="mb-4 flex items-center justify-between">
          <Image
            src="/images/temporary/p1.png"
            alt=""
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="">
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span className="">Large</span>
          </div>

          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>

        {/* Single Item */}
        <div className="mb-4 flex items-center justify-between">
          <Image
            src="/images/temporary/p1.png"
            alt=""
            width={80}
            height={80}
            className="object-contain"
          />
          <div className="">
            <h1 className="text-xl font-bold uppercase">sicilian</h1>
            <span className="">Large</span>
          </div>

          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </section>

      {/* Payment Container */}
      <section className="flex h-1/2 flex-col justify-center gap-4 bg-fuchsia-50 p-4 lg:h-full lg:w-1/3 lg:px-20 xl:px-40 2xl:w-1/2 2xl:gap-6 2xl:text-xl">
        <div className="flex justify-between">
          <span className="">Subtotal (3 items)</span>
          <span className="">$81.70</span>
        </div>

        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>

        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>

        <hr className="my-2" />

        <div className="flex justify-between">
          <span className="">TOTAL (VAT INCL.)</span>
          <span className="font-bold">$81.70</span>
        </div>

        <button className="w-1/2 self-end rounded-md bg-red-500 p-3 text-white">
          CHECKOUT
        </button>
      </section>
    </main>
  );
}

export default CartPage;
