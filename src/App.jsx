import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { Sidebar } from "./components/Sidebar";
import { Cart } from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi";


const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 38
  };
});

export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">

      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />

      <ShoeDetail />

      <NewArrivalSection items={SHOE_LIST} />

      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>

      <div className="fixed bottom-4 right-4">
        <button onClick={toggleDarkMode} className="bg-night-50 px-4 py-2 shadow-lg rounded-full text-white dark:bg-white dark:text-night-50">
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}