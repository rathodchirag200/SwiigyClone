import { useEffect, useState } from "react";

export const Citydata = () => {
  const [city, setCity] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const fetchdata = async () => {
    try {
      const response = await fetch("http://localhost:3000/city");
      const data = await response.json();
      setCity(data.cities);
    } catch (error) {
      console.error("Failed to fetch city data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const visibleCities = showAll ? city : city.slice(0, 7);

  return (
    <div className="mt-7 max-w-[1000px] mx-auto px-4">
      <h2 className="mt-3 text-xl sm:text-2xl font-bold text-gray-800">
        Cities With Food Delivery
      </h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleCities.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 text-black font-bold w-full h-[60px] text-center flex items-center justify-center border border-[#0006] rounded-2xl shadow"
          >
            {item.label}
          </div>
        ))}

        {city.length > 8 && (
          <div
            className="px-4 py-2 font-bold w-full h-[60px] text-center border rounded-2xl shadow cursor-pointer flex justify-center items-center hover:text-red-500 transition"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show All"}
          </div>
        )}
      </div>
    </div>
  );
};
