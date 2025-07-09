export const Download = () => {
  return (
    <div className="flex items-center justify-center bg-[#f0f0f5] w-full pb-10 px-4">
      <div className="max-w-[1100px] w-full flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-xl sm:text-2xl font-bold">
          For better experience, download the Swiggy app now
        </p>

        <div className="flex items-center gap-4">
          <img
            src="play.png"
            alt="Download on Play Store"
            className="w-[140px] sm:w-[160px]"
          />
          <img
            src="apple.png"
            alt="Download on Apple Store"
            className="w-[140px] sm:w-[160px]"
          />
        </div>
      </div>
    </div>
  );
};
