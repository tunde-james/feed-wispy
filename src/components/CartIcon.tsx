import Image from "next/image";

function CartIcon() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-8 w-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="" fill />
      </div>
      <span>Cart (3)</span>
    </div>
  );
}

export default CartIcon;
