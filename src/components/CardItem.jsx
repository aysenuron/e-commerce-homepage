import { BsFillTrash3Fill } from "react-icons/bs";
import { Select } from "../components/Select";
import { SIZES } from "../constant";
import { QTY } from "../constant";

export function CardItem({ item: { product, qty, size } }) {
    return (<div className="w-full">
        <div className={`hover:bg-white bg-gray-50 transform transition hover:scale-105 mb-4 p-8 space-x-8 items-center flex`}>
            <img className="h-24" src={product.src} alt={product.title} />

            <div className="space-y-6">
                <div className="space-y-2">
                    <div>
                        <h3>{product.title}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500 text-sm">{product.description}</p>
                    </div>
                </div>

                <div>
                    <h4>${product.price}</h4>
                </div>

                <div className="flex gap-8">

                    <div className="space-y-2 cursor-pointer">
                        <h5 className="text-sm font-light -mb-2">SIZE</h5>
                        <Select defaultValue={size} title="" options={SIZES} className={`text-sm`} />
                    </div>

                    <div className="space-y-2 cursor-pointer">
                        <h5 className="text-sm font-light -mb-2">QTY</h5>
                        <Select defaultValue={qty} title="" options={QTY} className={`text-sm`} />
                    </div>
                </div>
            </div>

            <div className="cursor-pointer absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                <BsFillTrash3Fill />
            </div>


        </div>
    </div>
    );
};