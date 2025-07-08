export const Footer = () => {
  return (
    <footer className="mt-[30px] w-full bg-[#f0f0f5] px-4 py-8">
      <div className="max-w-[1200px] mx-auto border-b border-black pb-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & copyright */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <img
              src="swiggy5.png"
              alt="Swiggy Logo"
              className="w-[200px] h-[100px] object-contain"
            />
            <p className="text-black font-semibold text-[16px] mt-2 md:mt-0 md:relative md:bottom-4 md:left-2 text-center md:text-left">
              © 2025 Swiggy Limited
            </p>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-[#63666b] text-[15px] font-medium">
            {/* Company */}
            <ul className="space-y-3">
              <li className="text-lg sm:text-xl font-bold text-black">Company</li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Swiggy Corporate</a></li>
              <li><a href="#">Pyng</a></li>
              <li><a href="#">Minis</a></li>
              <li><a href="#">Swiggy Dineout</a></li>
              <li><a href="#">Swiggy Instamart</a></li>
              <li><a href="#">Swiggy One</a></li>
              <li><a href="#">Careers</a></li>
            </ul>

            {/* Contact Us */}
            <ul className="space-y-3">
              <li className="text-lg sm:text-xl font-bold text-black">Contact Us</li>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Partner with us</a></li>
              <li><a href="#">Ride with us</a></li>
            </ul>

            {/* Cities */}
            <ul className="space-y-3">
              <li className="text-lg sm:text-xl font-bold text-black">Available in:</li>
              <li><a href="#">Bangalore</a></li>
              <li><a href="#">Surat</a></li>
              <li><a href="#">Ahmedabad</a></li>
              <li><a href="#">Rajkot</a></li>
              <li><a href="#">Vadodara</a></li>
              <li><a href="#">Valsad</a></li>
              <li><a href="#">Bhavnagar</a></li>
            </ul>

            {/* Life at Swiggy */}
            <ul className="space-y-3">
              <li className="text-lg sm:text-xl font-bold text-black">Life at Swiggy</li>
              <li><a href="#">Explore with Swiggy</a></li>
              <li><a href="#">Swiggy News</a></li>
              <li><a href="#">Snackables</a></li>
            </ul>

             <ul className="space-y-3">
              <li className="text-lg sm:text-xl font-bold text-black">Life at Swiggy</li>
              <li><a href="#">Explore with Swiggy</a></li>
              <li><a href="#">Swiggy News</a></li>
              <li><a href="#">Snackables</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
