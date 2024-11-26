export function Select({ title, options }) {
    return (<div className="flex space-x-2 border border-black px-4 py-2 items-center md:bg-white">
        <select defaultValue={""} className="text-lg">
            <option value="" disabled hidden>{title}</option>
            {options.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))};
        </select>
    </div>
    );
};