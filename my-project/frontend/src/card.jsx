import { useEffect, useState } from "react";

export const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://swiigyclone-4.onrender.com/images"); // ✅ Updated
      const jsonData = await res.json();
      setData(jsonData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card mt-8 max-w-[1000px] gap-4 overflow-x-scroll mx-auto flex items-center border-b border-[#04040432] pb-[40px] ">
      {data.map((item, index) => (
        <img
          key={index}
          src={`https://swiigyclone-4.onrender.com/images/${item.image}`} // ✅ Updated
          className="w-[140px] h-[140px] object-cover rounded flex items-center"
          alt={`img-${index}`}
        />
      ))}
    </div>
  );
};
