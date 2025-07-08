import { useEffect, useState } from "react";
import { MdStars } from "react-icons/md";

export const Online = () => {
  const [resdata, setResdata] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/images");
      const jsonData = await res.json();
      setResdata(jsonData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-7 max-w-[1000px] mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">
        Restaurants with online delivery in Jodhpur
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {resdata.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden  transition-shadow duration-300"
          >
            {/* Image Section */}
            <div className="relative h-[150px] w-full overflow-hidden">
              <img
                src={`http://localhost:3000/images/${item.image}`}
                alt={item.title || "restaurant-image"}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full h-[40px] rounded-xl bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
                {item.offer}
              </div>
            </div>

            {/* Content */}
            <div className="p-3">
              <p className="font-bold text-[18px] truncate">{item.title}</p>
              <div className="flex items-center gap-2 text-[15px] text-gray-700 mt-1">
                <MdStars className="text-green-700 w-[22px] h-[22px]" />
                <span>{item.rating}</span>
                <span className="flex items-center gap-1 text-gray-500">
                  <span>{item.minTime}</span> - <span>{item.maxTime}</span> mins
                </span>
              </div>
              <p className="text-[16px] text-gray-600 mt-1 truncate">{item.name}</p>
              <p className="text-[16px] text-gray-500 truncate">{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
