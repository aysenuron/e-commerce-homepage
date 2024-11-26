import { CiShoppingCart } from "react-icons/ci";
import NikoLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (
        /* Logo */
        <nav className="flex flex-wrap items-center justify-between">
            <a href="#">
                <NikoLogo className="h-20 w-20" />
            </a>

            {/* Burger button */}
            <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className="lg:hidden rounded-lg p-2 focus:ring-2 focus:ring-blue-200 hover:bg-gray-200">
                <RxHamburgerMenu size={25} />
            </button>

            {/* Menu list */}
            <div className={`${isMobileMenuShown ? "block" : "hidden"} lg:block w-full lg:w-auto`}>
                <ul className="flex flex-col lg:flex-row lg:space-x-4 bg-gray-50 lg:bg-transparent text-sm border lg:border-hidden border-gray-400 rounded-lg cursor-pointer p-2">
                    {ROUTES.map((route, i) => {
                        return <li className={`my-2 py-2 px-4 ${i == 0 ? "bg-blue-500 lg:bg-transparent text-white lg:text-blue-500 rounded-lg" : "rounded-lg hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-500"}
                        ${i == 3 || i == 4 ? "lg:text-white" : ""}`}
                            key={route}
                        >
                            {route}
                        </li>
                    })}
                </ul>
            </div>


            {/* Card button */}
            <div className="rounded-full bg-white border border-gray-400 p-2 lg:p-4 shadow-md flex-center fixed bottom-4 left-4 hover:bg-gray-100 cursor-pointer lg:static btn-press-anim">
                <CiShoppingCart />
            </div>

        </nav>
    );
}
