import { useState } from "react";
import { Button } from "@/components/ui/button";

const users = [
  {
    name: "Samantha Doe",
    role: "Mentor",
    year: "4th Year",
    rating: 4.8,
    tags: ["CompSci", "Career Focus"],
  },
];

export default function Community() {
  const [filter, setFilter] = useState("Mentor");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Community</h1>
        <select
          className="border rounded px-2 py-1"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="Mentor">Mentor</option>
          <option value="Mentee">Mentee</option>
          <option value="Study Partners">Study Partners</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {users
          .filter((user) => user.role === filter)
          .map((user, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2"></div>
                <h2 className="text-xl font-semibold">{user.name}</h2>
              </div>
              <div className="flex justify-center gap-2 my-2">
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                  {user.role}
                </span>
                <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                  {user.year}
                </span>
                <span className="bg-yellow-400 px-2 py-1 rounded text-sm">
                  {user.rating} ★
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {user.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button className="w-full">Connect</Button>
            </div>
          ))}
      </div>
    </div>
  );
}
export default CommunityPage;
