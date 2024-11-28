import { useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { Sidebar } from "./components/Sidebar";
import { Cart } from "./components/Cart";

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 38
  };
});

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="animate-fadeIn p-10 xl:px-24">

      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />

      <ShoeDetail />

      <NewArrivalSection items={SHOE_LIST} />

      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>

    </div>
  );
}