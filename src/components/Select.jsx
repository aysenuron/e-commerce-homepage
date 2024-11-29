export function Select({ title, options, className, defaultValue }) {
    return (<div className="flex space-x-2 border border-black  px-4 py-2 items-center dark:text-black dark:bg-white  md:bg-white">
        <select defaultValue={defaultValue || ""} className={`text-lg ${className}`}>
            <option value="" disabled hidden>{title}</option>
            {options.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))};
        </select>
    </div>
    );
};