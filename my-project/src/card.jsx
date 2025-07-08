import { useEffect, useState } from "react";

export const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/images"); // ✅ Correct! // ✅ FIXED!
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
  <div className="card mt-8 max-w-[1000px]  gap-4  overflow-x-scroll mx-auto flex items-center border-b border-[#04040432] pb-[40px] ">
      {data.map((item, index) => (
        <img
          key={index}
          src={`http://localhost:3000/images/${item.image}`}
          className="w-[140px] h-[140px]  object-cover rounded flex items-center"
        />
      ))}
    </div>
  );
};
