import { JobProps } from "../@types/Types";
import { useState } from "react";
export const Job = ({
    id,
    type,
    title,
    description,
    salary,
    location,
}: JobProps) => {
    // Here we have a good example of using state to handle a button click to expand a text field.

    const [showFullDescription, setShowFullDescription] = useState(false);

    if (!showFullDescription) {
        description.charAt(89) === " "
            ? (description = `${description.substring(0, 89)}...`)
            : (description = `${description.substring(0, 90)}...`);
    }

    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{type}</div>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <div className="mb-5">{description}</div>
                <button
                    className="text-indigo-500 mb-5 hover:text-indigo-600"
                    onClick={() =>
                        setShowFullDescription((prevState) => !prevState)
                    }
                >
                    {showFullDescription ? "less" : "more"}
                </button>
                <h3 className="text-indigo-500 mb-2">{salary}</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        {location}
                    </div>
                    <a
                        href={`/job/${id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};
