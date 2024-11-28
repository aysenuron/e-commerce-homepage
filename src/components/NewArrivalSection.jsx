import { Card } from "./Card";

export function NewArrivalSection({ items }) {
    return <div className="space-y-8 lg:space-y-16 mt-20 md:mt-80 xl:mt-20 lg:mt-20 2xl:mt-96 mb-20">
        <div className="flex flex-center">
            <div className="bg-[url('./assets/lines.png')] bg-center text-4xl lg:text-6xl font-extrabold">
                NEW ARRIVALS
            </div>
        </div>

        <div className="grid grid-cols-[repeat(1,100%)] gap-y-24 md:grid-cols-[repeat(2,48%)] lg:grid-cols-3 md:justify-between xl:grid-cols-[repeat(3,30%)]">
            {items.map((item) => (
                <Card key={item.id} item={item} />
            ))
            }
        </div>
    </div>
}