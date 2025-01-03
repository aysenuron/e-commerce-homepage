export function Sidebar({ children, isOpen, onClickClose }) {
    return (
        <div>

            <div
                onClick={onClickClose} className={`fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50 ${isOpen ? "block" : "hidden"}`}>
            </div>

            <div
                className={`dark:bg-night overflow-y-auto p-5 w-full h-full md:w-[50%] lg:w-[35%] bg-white fixed top-0 right-0 z-50 transition duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"} `}>
                <button onClick={onClickClose} className="absolute right-4 top-4 p-2 font-bold dark:text-white">
                    X
                </button>
                <div>{children}</div>
            </div>
        </div>

    );
}

