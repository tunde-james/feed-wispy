function OrdersPage() {
  return (
    <main className="p-4 lg:px-20 xl:px-40">
      <table className="w-ful border-separate border-spacing-3">
        <thead className="">
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th className="">Date</th>
            <th className="">Price</th>
            <th className="hidden md:block">Products</th>
            <th className="">Status</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="bg-red-50 text-sm md:text-base">
            <td className="hidden px-1 py-6 md:block">
              1324iu5yuyuoii4ui43i24
            </td>
            <td className="px-1 py-6 ">19.10.2023</td>
            <td className="px-1 py-6 ">89.90</td>
            <td className="hidden px-1 py-6 md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6 ">On the way (approx. 10min)...</td>
          </tr>

          <tr className="text-sm odd:bg-gray-100 md:text-base">
            <td className="hidden px-1 py-6 md:block">
              1324iu5yuyuoii4ui43i24
            </td>
            <td className="px-1 py-6 ">19.10.2023</td>
            <td className="px-1 py-6 ">89.90</td>
            <td className="hidden px-1 py-6 md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6 ">On the way (approx. 10min)...</td>
          </tr>

          <tr className="text-sm odd:bg-gray-100 md:text-base">
            <td className="hidden px-1 py-6 md:block">
              1324iu5yuyuoii4ui43i24
            </td>
            <td className="px-1 py-6 ">19.10.2023</td>
            <td className="px-1 py-6 ">89.90</td>
            <td className="hidden px-1 py-6 md:block">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="px-1 py-6 ">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default OrdersPage;
