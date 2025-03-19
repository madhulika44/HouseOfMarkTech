import React, { useState } from "react";

const ApiIntegration = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Function to fetch users
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
        setLoading(false);
    };

    return (
        <div className="p-8 text-center">
            {/* Heading */}
            <h1 className="text-2xl font-bold mb-4">API INTEGRATION</h1>

            {/* Fetch Data Button */}
            <button
                onClick={fetchUsers}
                className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
            >
                {loading ? "Loading..." : "Fetch Data"}
            </button>

            {/* Display Users */}
            <div className="mt-6">
                {users.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {users.map((user) => (
                            <div key={user.id} className="border p-4 rounded-md shadow-md bg-gray-100">
                                <h2 className="text-lg font-semibold">{user.name}</h2>
                                <p className="text-gray-700">{user.email}</p>
                                <p className="text-gray-500">{user.phone}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">Click "Fetch Data" to load users.</p>
                )}
            </div>
        </div>
    );
};

export default ApiIntegration;
