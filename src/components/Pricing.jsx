import React from "react";

const Pricing = () => {
    return (
        <div className="p-8">
            {/* Heading */}
            <div className="text-2xl font-bold text-center mb-6">PRICING</div>

            {/* Pricing Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 shadow-lg">
                    {/* Table Header */}
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            <th className="border border-gray-300 px-6 py-3">S.No</th>
                            <th className="border border-gray-300 px-6 py-3">Course Name</th>
                            <th className="border border-gray-300 px-6 py-3">Price (INR)</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="bg-white text-center">
                        <tr className="border border-gray-300">
                            <td className="border border-gray-300 px-6 py-3">1</td>
                            <td className="border border-gray-300 px-6 py-3">Web Development</td>
                            <td className="border border-gray-300 px-6 py-3">5000</td>
                        </tr>
                        <tr className="border border-gray-300 bg-gray-100">
                            <td className="border border-gray-300 px-6 py-3">2</td>
                            <td className="border border-gray-300 px-6 py-3">Full Stack Development</td>
                            <td className="border border-gray-300 px-6 py-3">7000</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="border border-gray-300 px-6 py-3">3</td>
                            <td className="border border-gray-300 px-6 py-3">Data Science</td>
                            <td className="border border-gray-300 px-6 py-3">8000</td>
                        </tr>
                        <tr className="border border-gray-300 bg-gray-100">
                            <td className="border border-gray-300 px-6 py-3">4</td>
                            <td className="border border-gray-300 px-6 py-3">Machine Learning</td>
                            <td className="border border-gray-300 px-6 py-3">9000</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="border border-gray-300 px-6 py-3">5</td>
                            <td className="border border-gray-300 px-6 py-3">Cyber Security</td>
                            <td className="border border-gray-300 px-6 py-3">7500</td>
                        </tr>
                        <tr className="border border-gray-300 bg-gray-100">
                            <td className="border border-gray-300 px-6 py-3">6</td>
                            <td className="border border-gray-300 px-6 py-3">Cloud Computing</td>
                            <td className="border border-gray-300 px-6 py-3">8500</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="border border-gray-300 px-6 py-3">7</td>
                            <td className="border border-gray-300 px-6 py-3">AI & Deep Learning</td>
                            <td className="border border-gray-300 px-6 py-3">9500</td>
                        </tr>
                        <tr className="border border-gray-300 bg-gray-100">
                            <td className="border border-gray-300 px-6 py-3">8</td>
                            <td className="border border-gray-300 px-6 py-3">DevOps</td>
                            <td className="border border-gray-300 px-6 py-3">6500</td>
                        </tr>
                        <tr className="border border-gray-300">
                            <td className="border border-gray-300 px-6 py-3">9</td>
                            <td className="border border-gray-300 px-6 py-3">Blockchain</td>
                            <td className="border border-gray-300 px-6 py-3">7800</td>
                        </tr>
                        <tr className="border border-gray-300 bg-gray-100">
                            <td className="border border-gray-300 px-6 py-3">10</td>
                            <td className="border border-gray-300 px-6 py-3">Game Development</td>
                            <td className="border border-gray-300 px-6 py-3">8200</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pricing;
