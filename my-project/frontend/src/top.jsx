import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdStars } from "react-icons/md";

export const Top = () => {
  const [resdata, setResdata] = useState([]);
  const scrollRef = useRef(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://swiigyclone-4.onrender.com/api/images");
      const jsonData = await res.json();
      setResdata(jsonData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="mt-5 max-w-[1000px] mx-auto px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-xl sm:text-2xl font-bold">Top restaurant chains in Jodhpur</div>
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="bg-[#d6cece] w-[35px] h-[35px] flex items-center justify-center rounded-full"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={scrollRight}
            className="bg-[#d6cece] w-[35px] h-[35px] flex items-center justify-center rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="card flex overflow-x-auto no-scrollbar scroll-smooth gap-4 pb-2"
      >
        {resdata.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded shadow hover:shadow-lg transition duration-200
              min-w-full sm:min-w-full md:min-w-[50%] lg:min-w-[25%] max-w-[300px] flex-shrink-0"
          >
            {/* Image */}
            <div className="relative w-full h-[140px] overflow-hidden rounded-t">
              <img
                src={`https://swiigyclone-4.onrender.com/images/${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2 left-2 text-white text-[16px] font-semibold">
                {item.offer}
              </div>
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="font-bold text-[17px] truncate">{item.title}</p>
              <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                <MdStars className="text-green-700 w-5 h-5" />
                <span>{item.rating}</span>
                <span className="text-gray-500">
                  {item.minTime} - {item.maxTime} mins
                </span>
              </div>
              <p className="text-[15px] text-gray-600 mt-1">{item.name}</p>
              <p className="text-[15px] text-gray-500">{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
