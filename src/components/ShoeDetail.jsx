import nike1 from "../assets/n1-min.png";
import { Select } from "../components/Select";
import { SIZES } from "../constant";
import { QTY } from "../constant";

export function ShoeDetail() {
    return <div className="flex flex-col lg:flex-row-reverse space-y-4 relative">

        {/* Shoe Image */}
        <div className=" flex-1 relative">
            <div className="bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6] p-8 md:-z-10 md:absolute -top-32 right-0 md:ml-14">
                <img className="animate-float" src={nike1} alt="Nike Shoes" />
            </div>
        </div>

        {/* Shoe Text */}
        <div className="flex-1 space-y-8 lg:space-y-12 flex flex-col lg:justify-center md:items-start lg:h-full">
            <div className="text-5xl font-black lg:text-9xl">Nike Air Max 270</div>
            <div className="font-medium lg:text-xl md:text-white md:bg-black md:px-3 md:py-1 lg:bg-transparent lg:p-0 lg:text-black"><p>The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.</p></div>
            <div className="flex space-x-4 items-center">
                <div className="text-3xl lg:text-6xl font-extrabold">$100</div>
                <Select title={"SIZE"} options={SIZES} />
                <Select title={"QTY"} options={QTY} />
            </div>

            {/* Shoe Buttons */}
            <div className="space-x-4">
                <button className="text-sm lg:text-lg px-8 py-3 shadow-lg bg-black text-white hover:bg-gray-900 active:bg-gray-700 btn-press-anim">Add to Card</button>
                <a href="#" className="text-sm lg:text-lg font-bold lg:font-medium px-4 py-3 border border-black hover:bg-gray-900 hover:text-white active:bg-gray-700 active:text-white">Wiew Details</a>
            </div>
        </div>
    </div>
}