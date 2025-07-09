import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export const Mind = () => {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/images");
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
  };

  return (
    <div className="mt-5 max-w-[1000px] mx-auto px-4">
      {/* Title & Arrows */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-bold flex items-center">
          What’s on your mind
        </div>
        <div className="flex items-center gap-4">
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

      {/* Scrollable Image Row */}
      <div
        ref={scrollRef}
        className="card flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar border-b border-[#04040432] pb-[40px]"
      >
        {data.map((item, index) => (
          <img
            key={index}
            src={`http://localhost:3000/images/${item.image}`}
            alt={`item-${index}`}
            className="w-[140px] h-[155px] object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};
