import React from "react";

const Services = () => {
    return (
        <>
            {/* Title Section */}
            <div className="h-4 w-full p-2 m-8 text-blue-500 flex justify-center">
                OUR SERVICES
            </div>

            {/* Cards Container */}
            <div className="flex justify-center gap-5">
                {/* Web Development Card */}
                <div className="h-64 w-1/4 flex justify-center items-center text-white bg-blue-500 shadow-lg rounded-lg">
                    Web Development
                </div>

                {/* Another Card (e.g., App Development) */}
                <div className="h-64 w-1/4 flex justify-center items-center text-white bg-green-500 shadow-lg rounded-lg">
                    App Development
                </div>

                <div className="h-64 w-1/4 flex justify-center items-center text-white bg-blue-500 shadow-lg rounded-lg">
                    Data Science 
                </div>
            </div>
        </>
    );
};

export default Services;
